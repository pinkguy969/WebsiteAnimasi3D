export function RotatingWorld3D() {
  return (
    <div className="relative w-full h-96 max-w-lg mx-auto" data-testid="rotating-world">
      {/* 3D Globe with Multiple Layers for Realistic Sphere Effect */}
      <div 
        className="globe-container absolute inset-0"
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        <div 
          className="globe-sphere transform-preserve-3d"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'realGlobeRotate 35s linear infinite',
            position: 'absolute',
            inset: '0',
            transform: 'rotateX(-15deg) rotateY(0deg)'
          }}
        >
          {/* Main Globe Base with Realistic Shading */}
          <div 
            className="sphere-base absolute inset-8 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse at 25% 25%, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  rgba(255, 99, 8, 0.08) 15%,
                  rgba(100, 100, 100, 0.05) 35%,
                  rgba(30, 30, 30, 0.6) 60%,
                  rgba(0, 0, 0, 0.9) 85%,
                  rgba(0, 0, 0, 1) 100%
                )
              `,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                inset -20px -20px 50px rgba(0, 0, 0, 0.8),
                inset 20px 20px 50px rgba(255, 255, 255, 0.1),
                0 0 80px rgba(255, 99, 8, 0.1)
              `
            }}
          >

            {/* 3D Latitude Rings */}
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i - 3.5) * 25; // -87.5 to 87.5 degrees
              const radius = Math.cos(angle * Math.PI / 180);
              const yOffset = Math.sin(angle * Math.PI / 180) * 40;
              
              return (
                <div
                  key={`lat-3d-${i}`}
                  className="absolute border border-white/20 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: `${radius * 85}%`,
                    height: `${radius * 85}%`,
                    transform: `translate(-50%, calc(-50% + ${yOffset}px)) rotateX(${angle}deg)`,
                    transformOrigin: 'center center',
                    opacity: Math.abs(radius) * 0.8 + 0.2
                  }}
                />
              );
            })}

            {/* 3D Longitude Meridians */}
            {Array.from({ length: 16 }, (_, i) => (
              <div
                key={`lng-3d-${i}`}
                className="absolute border border-white/20 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '85%',
                  height: '85%',
                  transform: `translate(-50%, -50%) rotateY(${i * 22.5}deg)`,
                  transformOrigin: 'center center',
                  opacity: 0.6
                }}
              />
            ))}

            {/* Continent Shadows on Sphere */}
            <div className="continents-shadow absolute inset-0 rounded-full overflow-hidden">
              {/* Asia shadow */}
              <div 
                className="absolute bg-white/10 rounded-lg"
                style={{
                  top: '25%',
                  right: '20%',
                  width: '35px',
                  height: '25px',
                  transform: 'rotateY(45deg) rotateX(5deg) translateZ(1px)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Europe shadow */}
              <div 
                className="absolute bg-white/10 rounded-lg"
                style={{
                  top: '22%',
                  left: '45%',
                  width: '20px',
                  height: '15px',
                  transform: 'rotateY(15deg) rotateX(2deg) translateZ(1px)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Africa shadow */}
              <div 
                className="absolute bg-white/10 rounded-lg"
                style={{
                  top: '38%',
                  left: '47%',
                  width: '15px',
                  height: '30px',
                  transform: 'rotateY(20deg) rotateX(-3deg) translateZ(1px)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Americas shadow */}
              <div 
                className="absolute bg-white/10 rounded-lg"
                style={{
                  top: '28%',
                  left: '15%',
                  width: '25px',
                  height: '40px',
                  transform: 'rotateY(-35deg) rotateX(0deg) translateZ(1px)',
                  filter: 'blur(1px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location Markers - Positioned like x.ai */}
      <div className="markers-xai absolute inset-0 pointer-events-none">
        {/* San Francisco • Palo Alto */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '15%',
            top: '22%',
            transform: 'translate(-0.5rem, -100%)',
            display: 'block'
          }}
          data-testid="marker-sf"
        >
          <div className="flex flex-col">
            <div 
              className="w-4 h-4 order-2" 
              style={{ background: 'rgb(255, 99, 8)' }}
            ></div>
            <div className="pl-6 font-mono text-sm uppercase text-white order-1">
              <span className="text-balance">San Francisco • Palo Alto</span> <br/>
              <span className="opacity-75">37.6145°N, <br/>122.3945°W</span>
            </div>
          </div>
        </div>

        {/* London */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '75%',
            top: '15%',
            transform: 'translate(-0.5rem, -0.5rem)',
            display: 'block'
          }}
          data-testid="marker-london"
        >
          <div className="flex flex-col">
            <div 
              className="w-4 h-4 order-1" 
              style={{ background: 'rgb(255, 99, 8)' }}
            ></div>
            <div className="pl-6 font-mono text-sm uppercase text-white order-2">
              <span className="text-balance">London</span> <br/>
              <span className="opacity-75">51.5053°N, <br/>0.121°W</span>
            </div>
          </div>
        </div>

        {/* Jakarta */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '55%',
            top: '55%',
            transform: 'translate(-0.5rem, -0.5rem)',
            display: 'block'
          }}
          data-testid="marker-jakarta"
        >
          <div className="flex flex-col">
            <div 
              className="w-4 h-4 order-1" 
              style={{ background: 'rgb(255, 99, 8)' }}
            ></div>
            <div className="pl-6 font-mono text-sm uppercase text-white order-2">
              <span className="text-balance">Jakarta</span> <br/>
              <span className="opacity-75">6.2088°S, <br/>106.8456°E</span>
            </div>
          </div>
        </div>

        {/* Singapore */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '85%',
            top: '48%',
            transform: 'translate(-0.5rem, -0.5rem)',
            display: 'block'
          }}
          data-testid="marker-singapore"
        >
          <div className="flex flex-col">
            <div 
              className="w-4 h-4 order-1" 
              style={{ background: 'rgb(255, 99, 8)' }}
            ></div>
            <div className="pl-6 font-mono text-sm uppercase text-white order-2">
              <span className="text-balance">Singapore</span> <br/>
              <span className="opacity-75">1.3521°N, <br/>103.8198°E</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}