import { useEffect, useRef } from "react";

interface LightBeam3DProps {
  mousePosition: { x: number; y: number };
}

export function LightBeam3D({ mousePosition }: LightBeam3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightBeamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightBeamRef.current) {
      const centerX = 0.5;
      const centerY = 0.5;
      
      const deltaX = (mousePosition.x - centerX) * 10;
      const deltaY = (mousePosition.y - centerY) * 4;
      
      const rotateY = -15 + deltaX;
      const rotateZ = -2 + deltaY;
      
      lightBeamRef.current.style.transform = 
        `translateY(-50%) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Light Beam Container with 3D perspective */}
      <div className="light-beam-container absolute inset-0" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {/* Ultra Minimal Light Beam - x.ai style */}
        <div 
          ref={lightBeamRef}
          className="light-beam absolute top-1/2 -right-1/4 w-[300%] h-1 transform -translate-y-1/2"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.08) 15%,
              rgba(255, 255, 255, 0.5) 45%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0.5) 55%,
              rgba(255, 255, 255, 0.08) 85%,
              transparent 100%
            )`,
            transform: 'translateY(-50%) rotateY(-12deg) rotateZ(-1deg)',
            filter: 'blur(0.3px)',
            boxShadow: `
              0 0 40px rgba(255, 255, 255, 0.4),
              0 0 80px rgba(255, 255, 255, 0.15),
              0 0 160px rgba(255, 255, 255, 0.08)
            `,
            animation: 'lightBeamPulse 6s ease-in-out infinite alternate'
          }}
        >
          {/* Inner Glow Layer */}
          <div 
            className="absolute -top-1 -bottom-1 left-0 right-0"
            style={{
              background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.4) 15%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(255, 255, 255, 0.4) 85%,
                transparent 100%
              )`,
              filter: 'blur(2px)',
              animation: 'lightBeamGlow 3s ease-in-out infinite alternate'
            }}
          />
          
          {/* Outer Glow Layer */}
          <div 
            className="absolute -top-2 -bottom-2 left-0 right-0"
            style={{
              background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(0, 212, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(0, 212, 255, 0.2) 80%,
                transparent 100%
              )`,
              filter: 'blur(4px)',
              animation: 'lightBeamOuterGlow 5s ease-in-out infinite alternate'
            }}
          />
        </div>
        
        {/* Ambient Glow Effect */}
        <div 
          className="ambient-glow absolute top-[30%] -right-[10%] w-[80%] h-[40%]"
          style={{
            background: `radial-gradient(
              ellipse 120% 60%,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(0, 212, 255, 0.08) 30%,
              transparent 70%
            )`,
            transform: 'rotateZ(-2deg)',
            filter: 'blur(20px)',
            animation: 'ambientPulse 6s ease-in-out infinite alternate'
          }}
        />
        
        {/* Enhanced Multi-Layer Particle System */}
        <div className="particles absolute inset-0">
          {/* Main particle stream - close to beam */}
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={`main-${i}`}
              className="particle absolute bg-white/70 rounded-full"
              style={{
                width: `${0.5 + (i % 3) * 0.2}px`,
                height: `${0.5 + (i % 3) * 0.2}px`,
                top: `${46 + (i % 7) * 1.2}%`,
                left: `${88 - (i * 3.5)}%`,
                animation: `particleFloat ${6 + (i * 0.3)}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.8)'
              }}
            />
          ))}
          
          {/* Secondary particle layer - scattered around beam */}
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={`secondary-${i}`}
              className="particle absolute bg-white/50 rounded-full"
              style={{
                width: `${0.3 + (i % 4) * 0.15}px`,
                height: `${0.3 + (i % 4) * 0.15}px`,
                top: `${42 + (i % 12) * 1.5}%`,
                left: `${90 - (i * 4.8)}%`,
                animation: `particleFloat ${9 + (i * 0.4)}s linear infinite`,
                animationDelay: `${i * 0.6}s`,
                boxShadow: '0 0 1px rgba(255, 255, 255, 0.6)'
              }}
            />
          ))}
          
          {/* Micro particles - very small and fast */}
          {Array.from({ length: 32 }, (_, i) => (
            <div
              key={`micro-${i}`}
              className="particle absolute bg-white/40 rounded-full"
              style={{
                width: '0.2px',
                height: '0.2px',
                top: `${44 + (i % 15) * 0.8}%`,
                left: `${92 - (i * 2.8)}%`,
                animation: `particleFloat ${4 + (i * 0.2)}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: '0 0 1px rgba(255, 255, 255, 0.9)'
              }}
            />
          ))}
          
          {/* Larger ambient particles - slower moving */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`ambient-${i}`}
              className="particle absolute bg-white/30 rounded-full"
              style={{
                width: `${1 + (i % 2) * 0.5}px`,
                height: `${1 + (i % 2) * 0.5}px`,
                top: `${40 + (i % 6) * 3}%`,
                left: `${85 - (i * 10)}%`,
                animation: `particleFloat ${12 + (i * 0.8)}s linear infinite`,
                animationDelay: `${i * 1.2}s`,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)'
              }}
            />
          ))}
          
          {/* Diagonal particles - crossing the beam */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`diagonal-${i}`}
              className="particle absolute bg-cyan-200/40 rounded-full"
              style={{
                width: `${0.4 + (i % 3) * 0.2}px`,
                height: `${0.4 + (i % 3) * 0.2}px`,
                top: `${35 + (i % 20) * 1.5}%`,
                left: `${80 - (i * 5.2)}%`,
                animation: `particleFloat ${7 + (i * 0.5)}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
                transform: 'rotate(15deg)',
                boxShadow: '0 0 2px rgba(0, 212, 255, 0.7)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
