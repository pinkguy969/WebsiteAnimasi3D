export function RotatingWorld3D() {
  return (
    <div className="relative w-80 h-80 mx-auto" data-testid="rotating-world">
      {/* Flat Wireframe World Map - Rotating like a photo/disk */}
      <div 
        className="world-wireframe absolute inset-0"
        style={{
          animation: 'flatWorldRotate 25s linear infinite'
        }}
      >
        {/* Main World Circle with Wireframe */}
        <svg 
          viewBox="0 0 320 320" 
          className="w-full h-full"
        >
          {/* Outer Circle Border */}
          <circle 
            cx="160" 
            cy="160" 
            r="155" 
            fill="none" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1"
          />
          
          {/* Grid Lines - Concentric Circles */}
          <circle cx="160" cy="160" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="110" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          
          {/* Grid Lines - Cross Lines */}
          <line x1="160" y1="5" x2="160" y2="315" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line x1="5" y1="160" x2="315" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line x1="47" y1="47" x2="273" y2="273" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line x1="273" y1="47" x2="47" y2="273" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          
          {/* Continent Wireframes - Simplified and Realistic */}
          {/* Asia */}
          <path 
            d="M195,85 Q210,75 240,80 Q265,85 280,105 Q275,130 265,145 Q245,155 225,150 Q205,145 195,130 Q190,110 195,95 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* Europe */}
          <path 
            d="M140,80 Q155,70 175,80 Q185,90 180,105 Q170,115 155,110 Q145,105 140,95 Q135,85 140,80 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* Africa */}
          <path 
            d="M155,125 Q170,120 180,140 Q185,165 175,190 Q165,210 155,215 Q145,210 135,190 Q130,165 135,140 Q145,120 155,125 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* North America */}
          <path 
            d="M70,90 Q85,80 100,95 Q105,115 100,135 Q95,155 85,165 Q75,170 65,165 Q55,155 50,135 Q45,115 50,95 Q60,80 70,90 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* South America */}
          <path 
            d="M85,180 Q95,175 100,190 Q105,210 100,230 Q95,245 85,250 Q75,245 70,230 Q65,210 70,190 Q75,175 85,180 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* Australia */}
          <path 
            d="M240,205 Q255,200 265,215 Q260,230 245,235 Q230,230 225,215 Q230,200 240,205 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.6)" 
            strokeWidth="1"
          />
          
          {/* Connection Lines Between Locations */}
          <path 
            d="M175,80 Q200,60 225,75" 
            fill="none" 
            stroke="rgba(255,165,0,0.7)" 
            strokeWidth="1.5"
            className="connection-arc"
          />
          
          <path 
            d="M225,75 Q250,100 270,140" 
            fill="none" 
            stroke="rgba(255,165,0,0.7)" 
            strokeWidth="1.5"
            className="connection-arc"
          />
        </svg>

        {/* Location Markers - Fixed position on rotating map */}
        {/* London Marker */}
        <div className="absolute top-[25%] left-[55%]" data-testid="marker-london">
          <div className="w-3 h-3 bg-orange-400 rounded-full relative">
            <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-xs text-white/90 font-mono whitespace-nowrap text-center">
            <div className="font-semibold">LONDON</div>
            <div className="text-white/70">51.5053°N,</div>
            <div className="text-white/70">0.1212°W</div>
          </div>
        </div>

        {/* Jakarta Marker */}
        <div className="absolute top-[45%] right-[15%]" data-testid="marker-jakarta">
          <div className="w-3 h-3 bg-cyan-400 rounded-full relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-xs text-white/90 font-mono whitespace-nowrap text-center">
            <div className="font-semibold">JAKARTA</div>
            <div className="text-white/70">6.2088°S,</div>
            <div className="text-white/70">106.8456°E</div>
          </div>
        </div>

        {/* Singapore Marker */}
        <div className="absolute top-[42%] right-[18%]" data-testid="marker-singapore">
          <div className="w-2 h-2 bg-green-400 rounded-full relative">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap text-center">
            <div className="text-[10px]">SG</div>
          </div>
        </div>

        {/* Outer Orbital Ring */}
        <div 
          className="absolute inset-0 border border-orange-400/50 rounded-full"
          style={{ 
            transform: 'scale(1.15)',
            animation: 'orbitRingFlat 12s linear infinite reverse'
          }} 
        />

      </div>
    </div>
  );
}