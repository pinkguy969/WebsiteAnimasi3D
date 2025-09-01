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
              rgba(255, 255, 255, 0.05) 15%,
              rgba(255, 255, 255, 0.3) 45%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0.3) 55%,
              rgba(255, 255, 255, 0.05) 85%,
              transparent 100%
            )`,
            transform: 'translateY(-50%) rotateY(-12deg) rotateZ(-1deg)',
            filter: 'blur(0.3px)',
            boxShadow: `
              0 0 30px rgba(255, 255, 255, 0.3),
              0 0 60px rgba(255, 255, 255, 0.1),
              0 0 120px rgba(255, 255, 255, 0.05)
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
                rgba(255, 255, 255, 0.3) 15%,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(255, 255, 255, 0.3) 85%,
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
              rgba(255, 255, 255, 0.1) 0%,
              rgba(0, 212, 255, 0.05) 30%,
              transparent 70%
            )`,
            transform: 'rotateZ(-2deg)',
            filter: 'blur(20px)',
            animation: 'ambientPulse 6s ease-in-out infinite alternate'
          }}
        />
        
        {/* Extended Particle System */}
        <div className="particles absolute inset-0">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="particle absolute w-0.5 h-0.5 bg-white/60 rounded-full"
              style={{
                top: `${48 + (i % 5)}%`,
                left: `${85 - (i * 7)}%`,
                animation: `particleFloat ${8 + (i * 0.5)}s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
