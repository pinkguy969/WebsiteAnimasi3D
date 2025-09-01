export function RotatingWorld3D() {
  return (
    <div className="relative w-80 h-80 mx-auto" data-testid="rotating-world">
      {/* Flat 2D World Map - Rotating like a disk */}
      <div 
        className="world-disk absolute inset-0 rounded-full"
        style={{
          animation: 'worldDiskRotate 20s linear infinite'
        }}
      >
        {/* World Map Base Circle */}
        <div className="absolute inset-0 rounded-full border border-white/30 bg-gradient-radial from-transparent via-white/5 to-transparent">
          
          {/* Continent Wireframes */}
          <svg 
            viewBox="0 0 320 320" 
            className="absolute inset-0 w-full h-full"
            style={{ transform: 'scale(0.9)' }}
          >
            {/* Asia */}
            <path 
              d="M200,80 Q220,70 250,85 Q280,90 290,110 Q285,140 270,155 Q250,165 230,160 Q210,155 200,140 Q195,120 200,100 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1"
            />
            
            {/* Europe */}
            <path 
              d="M140,70 Q160,60 180,75 Q190,85 185,100 Q175,110 160,105 Q145,100 135,85 Q130,75 140,70 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1"
            />
            
            {/* Africa */}
            <path 
              d="M160,120 Q180,115 190,135 Q195,160 185,185 Q175,205 160,210 Q145,205 135,185 Q130,160 135,135 Q145,115 160,120 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1"
            />
            
            {/* Americas */}
            <path 
              d="M60,100 Q80,85 90,105 Q95,130 90,155 Q85,180 75,195 Q65,205 55,195 Q45,180 40,155 Q35,130 40,105 Q50,85 60,100 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1"
            />
            
            {/* Australia */}
            <path 
              d="M230,200 Q250,195 260,210 Q255,225 240,230 Q225,225 220,210 Q225,195 230,200 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="1"
            />
            
            {/* Grid Lines - Latitude */}
            <circle cx="160" cy="160" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            
            {/* Grid Lines - Longitude */}
            <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="113" y1="47" x2="207" y2="273" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="207" y1="47" x2="113" y2="273" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </svg>

          {/* Orbital Rings */}
          <div 
            className="absolute inset-0 border border-orange-400/60 rounded-full"
            style={{ 
              transform: 'scale(1.3)',
              animation: 'orbitRing1 15s linear infinite'
            }} 
          />
          
          <div 
            className="absolute inset-0 border border-orange-500/40 rounded-full"
            style={{ 
              transform: 'scale(1.5)',
              animation: 'orbitRing2 18s linear infinite reverse'
            }} 
          />

          {/* Location Markers */}
          {/* London */}
          <div className="absolute top-[22%] left-[58%] marker-point" data-testid="marker-london">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>LONDON</div>
              <div className="text-white/60">51.5053°N</div>
              <div className="text-white/60">0.1212°W</div>
            </div>
          </div>

          {/* Jakarta */}
          <div className="absolute top-[65%] right-[20%] marker-point" data-testid="marker-jakarta">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-mono whitespace-nowrap">
              <div>JAKARTA</div>
              <div className="text-white/60">6.2088°S</div>
              <div className="text-white/60">106.8456°E</div>
            </div>
          </div>

          {/* Data Connection Lines */}
          <svg 
            viewBox="0 0 320 320" 
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <path 
              d="M185,70 Q200,50 240,65 Q260,80 270,110" 
              fill="none" 
              stroke="rgba(255,165,0,0.6)" 
              strokeWidth="1"
              className="connection-line"
              style={{ animation: 'connectionPulse 3s ease-in-out infinite' }}
            />
            <path 
              d="M270,110 Q280,150 260,190 Q240,220 200,230" 
              fill="none" 
              stroke="rgba(255,165,0,0.6)" 
              strokeWidth="1"
              className="connection-line"
              style={{ animation: 'connectionPulse 3s ease-in-out infinite 1s' }}
            />
          </svg>

        </div>
      </div>
    </div>
  );
}