export function RotatingWorld3D() {
  return (
    <div className="relative w-80 h-80 mx-auto perspective-1000" data-testid="rotating-world">
      {/* 3D Globe Container */}
      <div 
        className="globe-3d relative w-full h-full transform-preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'globe3dRotate 30s linear infinite'
        }}
      >
        {/* Main Globe Sphere */}
        <div className="globe-sphere absolute inset-0 rounded-full border border-white/20 bg-gradient-radial-globe">
          
          {/* Latitude Grid Lines */}
          <div className="latitude-lines absolute inset-0 rounded-full">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 border-t border-white/15"
                style={{
                  top: `${10 + i * 10}%`,
                  borderRadius: '50%',
                  transform: `rotateX(${(i - 4) * 20}deg)`
                }}
              />
            ))}
          </div>

          {/* Longitude Grid Lines */}
          <div className="longitude-lines absolute inset-0 rounded-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 left-1/2 border-l border-white/15"
                style={{
                  transform: `rotateY(${i * 30}deg)`,
                  transformOrigin: 'center'
                }}
              />
            ))}
          </div>

          {/* Continent Wireframes on Globe Surface */}
          <div className="continents absolute inset-0 rounded-full overflow-hidden">
            {/* Asia */}
            <div 
              className="continent absolute"
              style={{
                top: '25%',
                right: '15%',
                width: '60px',
                height: '40px',
                transform: 'rotateY(45deg) rotateX(10deg)'
              }}
            >
              <svg viewBox="0 0 60 40" className="w-full h-full fill-none stroke-white/60 stroke-[0.8]">
                <path d="M10,15 Q20,10 35,12 Q45,15 55,20 Q50,30 40,33 Q25,35 15,30 Q8,25 10,15Z" />
                <path d="M35,12 Q40,5 50,8 Q55,12 55,20" />
              </svg>
            </div>
            
            {/* Europe */}
            <div 
              className="continent absolute"
              style={{
                top: '20%',
                left: '35%',
                width: '40px',
                height: '25px',
                transform: 'rotateY(15deg) rotateX(5deg)'
              }}
            >
              <svg viewBox="0 0 40 25" className="w-full h-full fill-none stroke-white/60 stroke-[0.8]">
                <path d="M5,12 Q15,8 25,10 Q35,8 38,15 Q33,20 25,22 Q15,20 8,17 Q3,14 5,12Z" />
              </svg>
            </div>
            
            {/* Africa */}
            <div 
              className="continent absolute"
              style={{
                top: '35%',
                left: '40%',
                width: '30px',
                height: '50px',
                transform: 'rotateY(20deg) rotateX(-5deg)'
              }}
            >
              <svg viewBox="0 0 30 50" className="w-full h-full fill-none stroke-white/60 stroke-[0.8]">
                <path d="M15,5 Q25,8 28,18 Q25,30 22,40 Q18,47 15,48 Q12,47 8,40 Q5,30 8,18 Q12,8 15,5Z" />
              </svg>
            </div>
            
            {/* Americas */}
            <div 
              className="continent absolute"
              style={{
                top: '25%',
                left: '5%',
                width: '45px',
                height: '60px',
                transform: 'rotateY(-45deg) rotateX(0deg)'
              }}
            >
              <svg viewBox="0 0 45 60" className="w-full h-full fill-none stroke-white/60 stroke-[0.8]">
                <path d="M15,8 Q25,5 30,12 Q28,22 25,32 Q30,42 28,52 Q25,58 20,60 Q15,58 12,52 Q10,42 15,32 Q12,22 10,12 Q12,5 15,8Z" />
                <path d="M30,12 Q38,10 42,18 Q40,28 35,32 Q32,28 30,22" />
              </svg>
            </div>
          </div>
        </div>

        {/* Orbital Rings Around Globe */}
        <div 
          className="orbital-ring absolute inset-0 border border-orange-400/60 rounded-full" 
          style={{ 
            transform: 'rotateX(75deg) scale(1.2)',
            animation: 'orbitRing3d1 20s linear infinite'
          }} 
        />
        
        <div 
          className="orbital-ring absolute inset-0 border border-orange-500/40 rounded-full" 
          style={{ 
            transform: 'rotateX(-60deg) rotateZ(45deg) scale(1.4)',
            animation: 'orbitRing3d2 25s linear infinite reverse'
          }} 
        />

        {/* Location Markers on Globe */}
        <div className="markers-3d absolute inset-0">
          {/* London Marker */}
          <div 
            className="marker-3d absolute"
            style={{
              top: '22%',
              left: '48%',
              transform: 'rotateY(0deg) translateZ(80px)'
            }}
            data-testid="marker-london"
          >
            <div className="marker-dot w-2 h-2 bg-orange-400 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>LONDON</div>
              <div className="text-white/60">51.5053°N,</div>
              <div className="text-white/60">0.1212°W</div>
            </div>
          </div>

          {/* Jakarta Marker */}
          <div 
            className="marker-3d absolute"
            style={{
              top: '45%',
              right: '25%',
              transform: 'rotateY(120deg) translateZ(80px)'
            }}
            data-testid="marker-jakarta"
          >
            <div className="marker-dot w-2 h-2 bg-cyan-400 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>JAKARTA</div>
              <div className="text-white/60">6.2088°S,</div>
              <div className="text-white/60">106.8456°E</div>
            </div>
          </div>
        </div>

        {/* Floating Data Points */}
        <div className="data-points-3d absolute inset-0">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="data-point absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                top: `${30 + (i * 8)}%`,
                left: `${25 + (i * 10)}%`,
                transform: `rotateY(${i * 60}deg) translateZ(${70 + i * 5}px)`,
                animation: `dataOrbit3d ${4 + (i * 0.5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}