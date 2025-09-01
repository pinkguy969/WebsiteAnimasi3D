import { useEffect, useRef } from 'react';

export function RotatingWorld3D() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: Add mouse interaction later if needed
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto perspective-1000" data-testid="rotating-world">
      {/* World Globe Container */}
      <div 
        ref={worldRef}
        className="world-globe relative w-full h-full transform-preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'worldRotate 30s linear infinite'
        }}
      >
        {/* Main Globe Sphere */}
        <div className="globe-sphere absolute inset-0 rounded-full border border-white/20 bg-gradient-radial-world">
          {/* Continent Outlines */}
          <div className="continents absolute inset-0 rounded-full overflow-hidden">
            {/* Asia */}
            <div className="continent-asia absolute top-[25%] right-[15%] w-16 h-12">
              <svg viewBox="0 0 64 48" className="w-full h-full fill-none stroke-white/40 stroke-[0.5]">
                <path d="M10,20 Q20,15 35,18 Q45,20 55,25 Q50,35 40,38 Q25,40 15,35 Q8,28 10,20Z" />
                <path d="M35,18 Q40,10 50,12 Q58,15 60,22" />
              </svg>
            </div>
            
            {/* Europe */}
            <div className="continent-europe absolute top-[20%] left-[35%] w-12 h-8">
              <svg viewBox="0 0 48 32" className="w-full h-full fill-none stroke-white/40 stroke-[0.5]">
                <path d="M5,15 Q15,8 25,12 Q35,10 42,15 Q38,25 28,28 Q18,26 8,22 Q3,18 5,15Z" />
              </svg>
            </div>
            
            {/* Africa */}
            <div className="continent-africa absolute top-[35%] left-[40%] w-10 h-16">
              <svg viewBox="0 0 40 64" className="w-full h-full fill-none stroke-white/40 stroke-[0.5]">
                <path d="M20,5 Q30,8 35,18 Q32,35 30,45 Q25,55 20,58 Q15,55 10,45 Q8,35 5,18 Q10,8 20,5Z" />
              </svg>
            </div>
            
            {/* Americas */}
            <div className="continent-americas absolute top-[25%] left-[5%] w-14 h-20">
              <svg viewBox="0 0 56 80" className="w-full h-full fill-none stroke-white/40 stroke-[0.5]">
                <path d="M15,10 Q25,5 30,15 Q28,25 25,35 Q30,45 28,55 Q25,65 20,70 Q15,65 12,55 Q10,45 15,35 Q12,25 10,15 Q12,5 15,10Z" />
                <path d="M30,15 Q40,12 45,20 Q42,30 38,35 Q35,30 30,25" />
              </svg>
            </div>
          </div>
          
          {/* Coordinate Grid Lines */}
          <div className="grid-lines absolute inset-0 rounded-full">
            {/* Latitude lines */}
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 border-t border-white/10"
                style={{
                  top: `${20 + i * 15}%`,
                  borderRadius: '50%'
                }}
              />
            ))}
            
            {/* Longitude lines */}
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 border-l border-white/10"
                style={{
                  left: `${10 + i * 15}%`,
                  borderRadius: '50%',
                  transform: `rotateY(${i * 30}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Orbital Rings */}
        <div className="orbital-ring-1 absolute inset-0 border border-orange-400/60 rounded-full" 
             style={{ 
               transform: 'rotateX(20deg) rotateY(45deg) scale(1.2)',
               animation: 'orbitRotate1 20s linear infinite'
             }} />
        
        <div className="orbital-ring-2 absolute inset-0 border border-orange-500/40 rounded-full" 
             style={{ 
               transform: 'rotateX(-30deg) rotateY(-60deg) scale(1.4)',
               animation: 'orbitRotate2 25s linear infinite reverse'
             }} />

        {/* Location Markers */}
        <div className="markers absolute inset-0">
          {/* London Marker */}
          <div className="marker absolute top-[22%] left-[48%]" data-testid="marker-london">
            <div className="marker-dot w-2 h-2 bg-orange-400 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="marker-label absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>LONDON</div>
              <div className="text-white/60">51.5053°N,</div>
              <div className="text-white/60">0.1212°W</div>
            </div>
          </div>

          {/* Jakarta Marker */}
          <div className="marker absolute top-[45%] right-[25%]" data-testid="marker-jakarta">
            <div className="marker-dot w-2 h-2 bg-cyan-400 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="marker-label absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>JAKARTA</div>
              <div className="text-white/60">6.2088°S,</div>
              <div className="text-white/60">106.8456°E</div>
            </div>
          </div>

          {/* Singapore Marker */}
          <div className="marker absolute top-[42%] right-[22%]" data-testid="marker-singapore">
            <div className="marker-dot w-2 h-2 bg-green-400 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="marker-label absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>SINGAPORE</div>
              <div className="text-white/60">1.3521°N,</div>
              <div className="text-white/60">103.8198°E</div>
            </div>
          </div>
        </div>

        {/* Floating Data Points */}
        <div className="data-points absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="data-point absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                top: `${25 + (i * 8)}%`,
                left: `${20 + (i * 7)}%`,
                animation: `dataFloat ${3 + (i * 0.3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}