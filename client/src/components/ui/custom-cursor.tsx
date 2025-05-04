import { useState, useEffect, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnLink, setIsOnLink] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Calculate velocity
      velocity.current = {
        x: clientX - lastPos.current.x,
        y: clientY - lastPos.current.y
      };
      
      lastPos.current = { x: clientX, y: clientY };
      setPosition({ x: clientX, y: clientY });
      
      // Update trail positions
      setTrailPositions(prev => {
        const newTrail = [...prev, { x: clientX, y: clientY }];
        if (newTrail.length > 5) {
          return newTrail.slice(newTrail.length - 5);
        }
        return newTrail;
      });
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('[role="button"]')) {
        setIsHovering(true);
        if (target.tagName === 'A' || target.closest('a')) {
          setIsOnLink(true);
        }
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setIsOnLink(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Animate cursor
    const animateCursor = () => {
      // Add any additional animations here
      animationFrameId.current = requestAnimationFrame(animateCursor);
    };
    
    animationFrameId.current = requestAnimationFrame(animateCursor);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, isHovering]);

  // Calculate cursor rotation based on velocity
  const rotation = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovering ? 1.8 : 1})`,
          backgroundColor: isHovering 
            ? isOnLink 
              ? 'rgba(66, 66, 255, 0.2)' 
              : 'rgba(66, 66, 255, 0.15)' 
            : 'rgba(66, 66, 255, 0.3)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(66, 66, 255, 0.8), 0 0 30px rgba(66, 66, 255, 0.4), 0 0 40px rgba(66, 66, 255, 0.2)' 
            : '0 0 15px rgba(66, 66, 255, 0.8), 0 0 5px rgba(66, 66, 255, 0.8)',
          transition: isHovering ? 'all 0.3s ease-out' : 'all 0.15s ease-out'
        }}
      >

      </div>
      
      {/* Center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.7 : 1})`,
          boxShadow: isClicking 
            ? '0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(66, 66, 255, 0.8)' 
            : '0 0 10px rgba(66, 66, 255, 1), 0 0 5px rgba(66, 66, 255, 1)',
        }}
      />
      
      {/* Trail effect */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="custom-cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trailPositions.length * 0.2,
            transform: `translate(-50%, -50%) scale(${0.5 * (index + 1) / trailPositions.length})`,
            backgroundColor: 'rgba(66, 66, 255, 0.4)',
            boxShadow: '0 0 5px rgba(66, 66, 255, 0.5)',
            position: 'fixed',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: 'difference'
          }}
        />
      ))}
      
      {/* Effect lines */}
      <div
        className="custom-cursor-effect"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible && isHovering ? 0.4 : 0,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${isHovering ? 1 : 0})`,
          width: '40px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(66, 66, 255, 0.8), transparent)',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'opacity 0.2s ease-out'
        }}
      />
    </>
  );
}