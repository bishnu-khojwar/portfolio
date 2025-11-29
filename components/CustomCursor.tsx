import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (cursor) {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
    };

    const animate = () => {
        // Smooth follow effect (lerp)
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        if (follower) {
            follower.style.transform = `translate3d(${posX - 12}px, ${posY - 12}px, 0) scale(${hoveredRef.current ? 1.5 : 1})`;
        }
        requestAnimationFrame(animate);
    };
    
    // We use a ref for hovered state inside the animation loop to avoid dependency issues
    const hoveredRef = { current: false };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        hoveredRef.current = true;
        setHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        hoveredRef.current = false;
        setHovered(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    const animFrame = requestAnimationFrame(animate);

    return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseout', onMouseOut);
        cancelAnimationFrame(animFrame);
    };
  }, []);

  // Only render on desktop/large screens where hover makes sense
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor-dot" 
        style={{
             position: 'fixed',
             top: 0,
             left: 0,
             width: '8px',
             height: '8px',
             backgroundColor: 'var(--accent-primary)',
             borderRadius: '50%',
             pointerEvents: 'none',
             zIndex: 9999,
             marginTop: '-4px', // Center alignment adjustment
             marginLeft: '-4px',
             mixBlendMode: 'difference'
        }} 
      />
      <div 
        ref={followerRef} 
        className={`cursor-follower ${hovered ? 'is-hovering' : ''}`}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '24px',
            height: '24px',
            border: '1.5px solid var(--accent-primary)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            transition: 'opacity 0.3s ease, transform 0.1s ease',
            mixBlendMode: 'difference',
            opacity: 0.6
        }}
       />
       <style>{`
          body, a, button, input, textarea {
            cursor: none; 
          }
          /* Fallback for touch devices */
          @media (pointer: coarse) {
            body, a, button, input, textarea {
              cursor: auto;
            }
          }
       `}</style>
    </>
  );
};