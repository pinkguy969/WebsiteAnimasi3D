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
        {/* Saturn Ring Style Curved Light Beam */}
        <div 
          ref={lightBeamRef}
          className="light-beam absolute top-1/2 -right-1/4 w-[300%] h-6 transform -translate-y-1/2"
          style={{
            background: `conic-gradient(
              from 180deg,
              transparent 0deg,
              rgba(255, 255, 255, 0.1) 30deg,
              rgba(255, 255, 255, 0.6) 90deg,
              rgba(255, 255, 255, 0.9) 180deg,
              rgba(255, 255, 255, 0.6) 270deg,
              rgba(255, 255, 255, 0.1) 330deg,
              transparent 360deg
            )`,
            borderRadius: '50%',
            clipPath: 'ellipse(150% 15% at 50% 50%)',
            transform: 'translateY(-50%) rotateY(-12deg) rotateZ(-5deg) rotateX(65deg)',
            filter: 'blur(0.5px)',
            boxShadow: `
              0 0 60px rgba(255, 255, 255, 0.5),
              0 0 120px rgba(255, 255, 255, 0.2),
              0 0 200px rgba(255, 255, 255, 0.1),
              inset 0 0 30px rgba(255, 255, 255, 0.3)
            `,
            animation: 'lightBeamPulse 8s ease-in-out infinite alternate'
          }}
        >
          {/* Inner Curved Ring Glow */}
          <div 
            className="absolute -inset-2"
            style={{
              background: `conic-gradient(
                from 180deg,
                transparent 0deg,
                rgba(255, 255, 255, 0.4) 60deg,
                rgba(255, 255, 255, 0.8) 180deg,
                rgba(255, 255, 255, 0.4) 300deg,
                transparent 360deg
              )`,
              borderRadius: '50%',
              clipPath: 'ellipse(150% 20% at 50% 50%)',
              filter: 'blur(3px)',
              animation: 'lightBeamGlow 4s ease-in-out infinite alternate'
            }}
          />
          
          {/* Outer Curved Ring Glow */}
          <div 
            className="absolute -inset-4"
            style={{
              background: `conic-gradient(
                from 180deg,
                transparent 0deg,
                rgba(0, 212, 255, 0.3) 45deg,
                rgba(255, 255, 255, 0.5) 180deg,
                rgba(0, 212, 255, 0.3) 315deg,
                transparent 360deg
              )`,
              borderRadius: '50%',
              clipPath: 'ellipse(150% 25% at 50% 50%)',
              filter: 'blur(6px)',
              animation: 'lightBeamOuterGlow 6s ease-in-out infinite alternate'
            }}
          />
          
          {/* Additional Saturn Ring Layers */}
          <div 
            className="absolute -inset-1"
            style={{
              background: `conic-gradient(
                from 90deg,
                transparent 0deg,
                rgba(255, 255, 255, 0.2) 90deg,
                rgba(255, 255, 255, 0.6) 180deg,
                rgba(255, 255, 255, 0.2) 270deg,
                transparent 360deg
              )`,
              borderRadius: '50%',
              clipPath: 'ellipse(140% 12% at 50% 50%)',
              filter: 'blur(1px)',
              animation: 'lightBeamGlow 5s ease-in-out infinite alternate reverse'
            }}
          />
        </div>
        
        {/* Saturn Ring Ambient Glow */}
        <div 
          className="ambient-glow absolute top-[25%] -right-[15%] w-[100%] h-[50%]"
          style={{
            background: `radial-gradient(
              ellipse 140% 30%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(0, 212, 255, 0.12) 40%,
              rgba(255, 255, 255, 0.05) 70%,
              transparent 90%
            )`,
            borderRadius: '50%',
            transform: 'rotateZ(-5deg) rotateX(60deg)',
            filter: 'blur(25px)',
            animation: 'ambientPulse 8s ease-in-out infinite alternate'
          }}
        />
        
        {/* Secondary Ring Glow */}
        <div 
          className="ambient-glow absolute top-[35%] -right-[20%] w-[90%] h-[30%]"
          style={{
            background: `radial-gradient(
              ellipse 120% 20%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(0, 212, 255, 0.08) 50%,
              transparent 80%
            )`,
            borderRadius: '50%',
            transform: 'rotateZ(-3deg) rotateX(70deg)',
            filter: 'blur(15px)',
            animation: 'ambientPulse 10s ease-in-out infinite alternate reverse'
          }}
        />
        
        {/* Enhanced Multi-Layer Particle System */}
        <div className="particles absolute inset-0">
          {/* Main particle stream - following Saturn ring curve */}
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={`main-${i}`}
              className="particle absolute bg-white/70 rounded-full"
              style={{
                width: `${0.5 + (i % 3) * 0.2}px`,
                height: `${0.5 + (i % 3) * 0.2}px`,
                top: `${48 + (i % 7) * 0.8}%`,
                left: `${88 - (i * 3.5)}%`,
                animation: `particleFloat ${6 + (i * 0.3)}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.9)',
                transformOrigin: 'center center'
              }}
            />
          ))}
          
          {/* Secondary particle layer - curved trajectory */}
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={`secondary-${i}`}
              className="particle absolute bg-white/50 rounded-full"
              style={{
                width: `${0.3 + (i % 4) * 0.15}px`,
                height: `${0.3 + (i % 4) * 0.15}px`,
                top: `${44 + (i % 12) * 1.2}%`,
                left: `${90 - (i * 4.8)}%`,
                animation: `particleFloatCurved ${9 + (i * 0.4)}s linear infinite`,
                animationDelay: `${i * 0.6}s`,
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.7)',
                transformOrigin: 'center center'
              }}
            />
          ))}
          
          {/* Micro particles - following micro curved path */}
          {Array.from({ length: 32 }, (_, i) => (
            <div
              key={`micro-${i}`}
              className="particle absolute bg-white/40 rounded-full"
              style={{
                width: '0.3px',
                height: '0.3px',
                top: `${46 + (i % 15) * 0.6}%`,
                left: `${92 - (i * 2.8)}%`,
                animation: `particleFloatMicro ${4 + (i * 0.2)}s linear infinite`,
                animationDelay: `${i * 0.25}s`,
                boxShadow: '0 0 1.5px rgba(255, 255, 255, 0.95)',
                transformOrigin: 'center center'
              }}
            />
          ))}
          
          {/* Larger ambient particles - slow curved movement */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`ambient-${i}`}
              className="particle absolute bg-white/30 rounded-full"
              style={{
                width: `${1 + (i % 2) * 0.5}px`,
                height: `${1 + (i % 2) * 0.5}px`,
                top: `${42 + (i % 6) * 2.5}%`,
                left: `${85 - (i * 10)}%`,
                animation: `particleFloatCurved ${12 + (i * 0.8)}s linear infinite`,
                animationDelay: `${i * 1.2}s`,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
                transformOrigin: 'center center'
              }}
            />
          ))}
          
          {/* Saturn ring accent particles - curved cyan trail */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`diagonal-${i}`}
              className="particle absolute bg-cyan-200/40 rounded-full"
              style={{
                width: `${0.4 + (i % 3) * 0.2}px`,
                height: `${0.4 + (i % 3) * 0.2}px`,
                top: `${38 + (i % 20) * 1.2}%`,
                left: `${82 - (i * 5.2)}%`,
                animation: `particleFloatCurved ${7 + (i * 0.5)}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 3px rgba(0, 212, 255, 0.8)',
                transformOrigin: 'center center'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
