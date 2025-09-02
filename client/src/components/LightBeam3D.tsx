import { useEffect, useRef } from "react";

interface LightBeam3DProps {
  mousePosition: { x: number; y: number };
}

export function LightBeam3D({ mousePosition }: LightBeam3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ringsRef.current) {
      const centerX = 0.5;
      const centerY = 0.5;
      
      const deltaX = (mousePosition.x - centerX) * 8;
      const deltaY = (mousePosition.y - centerY) * 6;
      
      const rotateX = 15 + deltaY;
      const rotateY = deltaX;
      
      ringsRef.current.style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Saturn Rings Container with 3D perspective */}
      <div className="saturn-rings-container absolute inset-0" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
        {/* Saturn Rings System */}
        <div 
          ref={ringsRef}
          className="saturn-rings absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '600px',
            height: '600px',
            transform: 'rotateX(15deg) rotateY(0deg)',
            transformStyle: 'preserve-3d',
            animation: 'saturnRotation 25s linear infinite'
          }}
        >
          {/* Main Ring - Largest */}
          <div 
            className="saturn-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '500px',
              height: '500px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              boxShadow: `
                0 0 20px rgba(255, 255, 255, 0.2),
                inset 0 0 30px rgba(255, 255, 255, 0.1)
              `,
              animation: 'ringGlow 8s ease-in-out infinite alternate'
            }}
          />
          
          {/* Inner Ring */}
          <div 
            className="saturn-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '380px',
              height: '380px',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              boxShadow: `
                0 0 15px rgba(255, 255, 255, 0.3),
                inset 0 0 20px rgba(255, 255, 255, 0.15)
              `,
              animation: 'ringGlow 6s ease-in-out infinite alternate',
              animationDelay: '1s'
            }}
          />
          
          {/* Outer Ring */}
          <div 
            className="saturn-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '620px',
              height: '620px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              boxShadow: `
                0 0 25px rgba(255, 255, 255, 0.15),
                inset 0 0 40px rgba(255, 255, 255, 0.08)
              `,
              animation: 'ringGlow 10s ease-in-out infinite alternate',
              animationDelay: '2s'
            }}
          />
          
          {/* Ultra Thin Ring */}
          <div 
            className="saturn-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '300px',
              height: '300px',
              border: '1px solid rgba(0, 212, 255, 0.5)',
              borderRadius: '50%',
              boxShadow: `
                0 0 10px rgba(0, 212, 255, 0.4),
                inset 0 0 15px rgba(0, 212, 255, 0.2)
              `,
              animation: 'ringGlow 4s ease-in-out infinite alternate',
              animationDelay: '0.5s'
            }}
          />
        </div>
        
        {/* Central Planet/Core */}
        <div 
          className="saturn-core absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 100%)',
            borderRadius: '50%',
            boxShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.4)
            `,
            animation: 'corePulse 3s ease-in-out infinite alternate'
          }}
        />
        
        {/* Orbital Particles - following ring paths */}
        <div className="particles absolute inset-0">
          {/* Main ring particles */}
          {Array.from({ length: 36 }, (_, i) => {
            const angle = (i * 10) % 360;
            const radius = 250;
            const x = 50 + (radius * Math.cos(angle * Math.PI / 180)) / 12;
            const y = 50 + (radius * Math.sin(angle * Math.PI / 180) * 0.3) / 12;
            
            return (
              <div
                key={`ring-main-${i}`}
                className="particle absolute bg-white/60 rounded-full"
                style={{
                  width: `${0.8 + (i % 3) * 0.3}px`,
                  height: `${0.8 + (i % 3) * 0.3}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `ringParticle ${20 + (i * 0.5)}s linear infinite`,
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)'
                }}
              />
            );
          })}
          
          {/* Inner ring particles */}
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 15) % 360;
            const radius = 190;
            const x = 50 + (radius * Math.cos(angle * Math.PI / 180)) / 12;
            const y = 50 + (radius * Math.sin(angle * Math.PI / 180) * 0.3) / 12;
            
            return (
              <div
                key={`ring-inner-${i}`}
                className="particle absolute bg-white/50 rounded-full"
                style={{
                  width: `${0.6 + (i % 2) * 0.2}px`,
                  height: `${0.6 + (i % 2) * 0.2}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `ringParticle ${15 + (i * 0.4)}s linear infinite`,
                  animationDelay: `${i * 0.4}s`,
                  boxShadow: '0 0 2px rgba(255, 255, 255, 0.6)'
                }}
              />
            );
          })}
          
          {/* Outer ring particles */}
          {Array.from({ length: 42 }, (_, i) => {
            const angle = (i * 8.5) % 360;
            const radius = 310;
            const x = 50 + (radius * Math.cos(angle * Math.PI / 180)) / 12;
            const y = 50 + (radius * Math.sin(angle * Math.PI / 180) * 0.3) / 12;
            
            return (
              <div
                key={`ring-outer-${i}`}
                className="particle absolute bg-white/40 rounded-full"
                style={{
                  width: `${0.4 + (i % 4) * 0.15}px`,
                  height: `${0.4 + (i % 4) * 0.15}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `ringParticle ${25 + (i * 0.3)}s linear infinite`,
                  animationDelay: `${i * 0.25}s`,
                  boxShadow: '0 0 1px rgba(255, 255, 255, 0.5)'
                }}
              />
            );
          })}
          
          {/* Cyan accent particles */}
          {Array.from({ length: 18 }, (_, i) => {
            const angle = (i * 20) % 360;
            const radius = 150;
            const x = 50 + (radius * Math.cos(angle * Math.PI / 180)) / 12;
            const y = 50 + (radius * Math.sin(angle * Math.PI / 180) * 0.3) / 12;
            
            return (
              <div
                key={`ring-cyan-${i}`}
                className="particle absolute bg-cyan-300/60 rounded-full"
                style={{
                  width: `${0.5 + (i % 2) * 0.3}px`,
                  height: `${0.5 + (i % 2) * 0.3}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `ringParticle ${12 + (i * 0.6)}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                  boxShadow: '0 0 3px rgba(0, 212, 255, 0.8)'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
