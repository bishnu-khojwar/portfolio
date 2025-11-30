import React, { useEffect, useRef } from 'react';
import { HERO_STATS } from '../constants';

export const Hero: React.FC = () => {
  // refs to the stat number elements so we can animate them
  const statRefs = useRef<Array<HTMLDivElement | null>>([]);
  const statsContainerRef = useRef<HTMLDivElement | null>(null);

  const formatZero = (raw: string) => {
    const r = raw.trim();
    if (r.endsWith('%')) {
      const num = r.slice(0, -1);
      const decimals = num.includes('.') ? num.split('.')[1].length : 0;
      return decimals ? (0).toFixed(decimals) + '%' : '0%';
    }
    if (r.endsWith('+')) return '0+';
    return '0';
  };

  useEffect(() => {
    const handles: number[] = [];

    const runAnimations = () => {
      // cancel any previous frames
      handles.forEach(h => cancelAnimationFrame(h));
      handles.length = 0;

      HERO_STATS.forEach((stat, i) => {
        const node = statRefs.current[i];
        if (!node) return;

        const raw = stat.value.trim();
        let suffix = '';
        let decimals = 0;
        let target = 0;

        if (raw.endsWith('%')) {
          suffix = '%';
          const num = raw.slice(0, -1);
          decimals = (num.includes('.') ? num.split('.')[1].length : 0);
          target = parseFloat(num) || 0;
        } else if (raw.endsWith('+')) {
          suffix = '+';
          target = parseFloat(raw.slice(0, -1)) || 0;
        } else {
          target = parseFloat(raw) || 0;
        }

        const duration = 1200; // ms
        const start = performance.now();
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const step = (now: number) => {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / duration);
          const eased = easeOutCubic(t);
          const current = target * eased;

          if (suffix === '%') {
            node.textContent = (decimals ? current.toFixed(decimals) : Math.round(current).toString()) + '%';
          } else if (suffix === '+') {
            node.textContent = Math.round(current).toString() + '+';
          } else {
            node.textContent = Math.round(current).toString();
          }

          if (t < 1) {
            handles[i] = requestAnimationFrame(step);
          } else {
            node.textContent = stat.value;
          }
        };

        handles[i] = requestAnimationFrame(step);
      });
    };

    const container = statsContainerRef.current;
    let obs: IntersectionObserver | null = null;
    if (container && 'IntersectionObserver' in window) {
      // observe with a small threshold and do not disconnect — allow observer to trigger if needed
      obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runAnimations();
            // keep observer attached in case of remounts
          }
        });
      }, { threshold: 0.2 });
      obs.observe(container);
    }

    // try to run immediately on mount but ensure stat refs are attached
    let tryRaf = 0;
    let attempts = 0;
    const tryRun = () => {
      const ready = HERO_STATS.every((_, idx) => !!statRefs.current[idx]);
      if (ready || attempts > 60) {
        runAnimations();
      } else {
        attempts += 1;
        tryRaf = requestAnimationFrame(tryRun);
      }
    };
    tryRun();

    // fallback: ensure animations run after a short delay in case refs mount slowly
    const fallbackTimer = window.setTimeout(() => runAnimations(), 250);

    return () => {
      if (obs) obs.disconnect();
      handles.forEach(h => cancelAnimationFrame(h));
      if (tryRaf) cancelAnimationFrame(tryRaf);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">👋 Available for opportunities</div>
          <h1>Bishnu Khojwar</h1>
          <p className="hero-subtitle">
            DevOps Engineer specializing in Cloud Infrastructure, Kubernetes, and CI/CD automation. Building scalable systems with 99.9% uptime.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="image-bg-circle"></div>
            <div className="profile-image">
              <img src="BishnuPP.png" alt="Bishnu Khojwar Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="floating-elements">
              <div className="floating-icon">🐳</div>
              <div className="floating-icon">☸️</div>
              <div className="floating-icon">☁️</div>
              <div className="floating-icon">⚙️</div>
            </div>
          </div>
        </div>

        <div className="hero-stats" ref={statsContainerRef}>
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="stat-item">
              <div
                className="stat-number"
                ref={el => (statRefs.current[index] = el)}
              >
                {formatZero(stat.value)}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};