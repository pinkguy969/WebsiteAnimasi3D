export function RotatingWorld3D() {
  return (
    <div className="relative w-full h-96 max-w-lg mx-auto" data-testid="rotating-world">
      {/* x.ai Style 3D Globe Container */}
      <div className="relative w-full h-full perspective-1000">
        <div 
          className="globe-xai-style absolute inset-0 transform-preserve-3d"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'xaiGlobeRotate 40s linear infinite'
          }}
        >
          {/* Main Globe Wireframe */}
          <div className="absolute inset-0 rounded-full border border-white/30 bg-gradient-radial-xai shadow-2xl">
            
            {/* Wireframe Grid - More realistic like x.ai */}
            <div className="absolute inset-0 rounded-full">
              {/* Latitude lines */}
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={`lat-${i}`}
                  className="absolute left-0 right-0"
                  style={{
                    top: `${5 + i * 11}%`,
                    height: '1px',
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)`,
                    borderRadius: '50%',
                    transform: `rotateX(${(i - 4) * 18}deg)`
                  }}
                />
              ))}
              
              {/* Longitude lines */}
              {Array.from({ length: 16 }, (_, i) => (
                <div
                  key={`lng-${i}`}
                  className="absolute top-0 bottom-0 left-1/2 w-px"
                  style={{
                    background: `linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)`,
                    transform: `rotateY(${i * 22.5}deg)`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
            </div>

            {/* Subtle continent outlines */}
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-60">
              {/* Simplified continent wireframes */}
              <div className="absolute top-[20%] left-[45%] w-8 h-6">
                <div className="w-full h-full border border-white/40 rounded-sm transform rotate-12"></div>
              </div>
              <div className="absolute top-[35%] left-[42%] w-6 h-10">
                <div className="w-full h-full border border-white/40 rounded-sm transform rotate-3"></div>
              </div>
              <div className="absolute top-[25%] right-[20%] w-10 h-8">
                <div className="w-full h-full border border-white/40 rounded-sm transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* x.ai Style Location Markers */}
        <div className="absolute inset-0">
          {/* London Marker */}
          <div 
            className="absolute"
            style={{
              left: '60.8%',
              top: '14%',
              transform: 'translate(-0.5rem, -0.5rem)'
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
            className="absolute"
            style={{
              left: '18.7%',
              top: '26.2%',
              transform: 'translate(-0.5rem, -100%)'
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
            className="absolute"
            style={{
              left: '45.4%',
              top: '47%',
              transform: 'translate(-0.5rem, -0.5rem)'
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
            className="absolute"
            style={{
              left: '72%',
              top: '44%',
              transform: 'translate(-0.5rem, -0.5rem)'
            }}
            data-testid="marker-singapore"
          >
            <div className="flex flex-col">
              <div 
                className="w-3 h-3 order-1" 
                style={{ background: 'rgb(255, 99, 8)' }}
              ></div>
              <div className="pl-5 font-mono text-xs uppercase text-white order-2">
                <span className="text-balance">Singapore</span> <br/>
                <span className="opacity-75">1.3521°N, <br/>103.8198°E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle orbital glow effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 45%, rgba(255, 99, 8, 0.1) 70%, transparent 85%)',
            animation: 'xaiGlow 8s ease-in-out infinite'
          }}
        ></div>
      </div>
    </div>
  );
}