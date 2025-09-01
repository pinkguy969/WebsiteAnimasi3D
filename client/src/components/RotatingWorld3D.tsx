export function RotatingWorld3D() {
  return (
    <div className="relative w-full h-96 max-w-lg mx-auto perspective-1000" data-testid="rotating-world">
      {/* 3D Globe Container with proper depth */}
      <div 
        className="globe-3d-container absolute inset-0 transform-preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'xaiGlobeRotate 40s linear infinite'
        }}
      >
        {/* Main 3D Globe Sphere */}
        <div className="globe-sphere-3d absolute inset-0 rounded-full bg-gradient-radial-xai transform-preserve-3d">
          
          {/* 3D Wireframe Grid System */}
          <div className="wireframe-grid absolute inset-0 rounded-full transform-preserve-3d">
            
            {/* Latitude Grid Rings - Curved to follow sphere */}
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={`lat-ring-${i}`}
                className="absolute border border-white/25 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${Math.cos((i - 3) * 0.5) * 100}%`,
                  height: `${Math.cos((i - 3) * 0.5) * 100}%`,
                  transform: `translate(-50%, -50%) rotateX(${(i - 3) * 30}deg)`,
                  transformOrigin: 'center center'
                }}
              />
            ))}
            
            {/* Longitude Grid Lines - Vertical meridians */}
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={`lng-meridian-${i}`}
                className="absolute border border-white/25 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '100%',
                  height: '100%',
                  transform: `translate(-50%, -50%) rotateY(${i * 30}deg)`,
                  transformOrigin: 'center center'
                }}
              />
            ))}
          </div>

          {/* Continent Wireframes on Sphere Surface */}
          <div className="continents-3d absolute inset-0 rounded-full transform-preserve-3d">
            {/* Asia - positioned on globe surface */}
            <div 
              className="continent-3d absolute"
              style={{
                top: '20%',
                right: '25%',
                width: '40px',
                height: '30px',
                transform: 'rotateY(60deg) rotateX(10deg) translateZ(80px)'
              }}
            >
              <svg viewBox="0 0 40 30" className="w-full h-full fill-none stroke-white/60 stroke-1">
                <path d="M8,12 Q18,8 28,10 Q35,12 38,18 Q35,25 28,27 Q18,25 8,22 Q5,18 8,12Z" />
              </svg>
            </div>
            
            {/* Europe - positioned on globe surface */}
            <div 
              className="continent-3d absolute"
              style={{
                top: '18%',
                left: '45%',
                width: '25px',
                height: '20px',
                transform: 'rotateY(20deg) rotateX(5deg) translateZ(80px)'
              }}
            >
              <svg viewBox="0 0 25 20" className="w-full h-full fill-none stroke-white/60 stroke-1">
                <path d="M3,10 Q8,6 15,8 Q20,9 22,12 Q20,16 15,17 Q8,16 3,14 Q1,12 3,10Z" />
              </svg>
            </div>
            
            {/* Africa - positioned on globe surface */}
            <div 
              className="continent-3d absolute"
              style={{
                top: '35%',
                left: '48%',
                width: '20px',
                height: '35px',
                transform: 'rotateY(25deg) rotateX(-5deg) translateZ(80px)'
              }}
            >
              <svg viewBox="0 0 20 35" className="w-full h-full fill-none stroke-white/60 stroke-1">
                <path d="M10,3 Q15,4 17,10 Q16,20 15,25 Q12,30 10,32 Q8,30 5,25 Q4,20 5,10 Q7,4 10,3Z" />
              </svg>
            </div>
            
            {/* Americas - positioned on globe surface */}
            <div 
              className="continent-3d absolute"
              style={{
                top: '25%',
                left: '15%',
                width: '30px',
                height: '45px',
                transform: 'rotateY(-30deg) rotateX(0deg) translateZ(80px)'
              }}
            >
              <svg viewBox="0 0 30 45" className="w-full h-full fill-none stroke-white/60 stroke-1">
                <path d="M12,5 Q18,3 22,8 Q20,15 18,25 Q20,35 18,40 Q15,43 12,43 Q9,43 6,40 Q4,35 6,25 Q4,15 6,8 Q9,3 12,5Z" />
                <path d="M22,8 Q26,6 28,12 Q26,18 22,20" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* x.ai Style Location Markers - Outside globe for proper visibility */}
      <div className="markers-overlay absolute inset-0 pointer-events-none">
        {/* London Marker */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '60.8%',
            top: '14%',
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

        {/* San Francisco • Palo Alto Marker */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '18.7%',
            top: '26.2%',
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

        {/* Jakarta Marker */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '45.4%',
            top: '47%',
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

        {/* Singapore Marker */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '72%',
            top: '44%',
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