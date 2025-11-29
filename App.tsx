import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Engagement } from './components/Engagement';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  // Default to Dark Mode as per original design
  const [isDark, setIsDark] = useState(true);

  // Toggle Theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply Theme Attribute to html tag to ensure full page background coverage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Scroll Progress Bar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scrollProgress');
      if (scrollProgress) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-wrapper">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" id="scrollProgress"></div>
      {/* Background and Cursor Effects */}
      <ParticlesBackground />
      <CustomCursor />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Engagement />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;