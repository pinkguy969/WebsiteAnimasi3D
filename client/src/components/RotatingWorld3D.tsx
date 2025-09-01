import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export function RotatingWorld3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Globe.gl
    const globe = new Globe(mountRef.current)
      .width(400)
      .height(400)
      .backgroundColor('rgba(0,0,0,0)')
      .showGlobe(true)
      .showAtmosphere(false);

    globeRef.current = globe;

    // Location data for Thailand and Jakarta
    const locations = [
      {
        name: 'Thailand',
        lat: 13.7563,
        lng: 100.5018,
        color: '#ff6308'
      },
      {
        name: 'Jakarta',
        lat: -6.2088,
        lng: 106.8456,
        color: '#ff6308'
      }
    ];

    // Add location points
    globe
      .pointsData(locations)
      .pointColor('color')
      .pointAltitude(0.05)
      .pointRadius(0.3)
      .pointResolution(6);

    // Add arc connection between Thailand and Jakarta
    const arcData = [
      {
        startLat: 13.7563,
        startLng: 100.5018,
        endLat: -6.2088,
        endLng: 106.8456,
        color: '#ff6308'
      }
    ];

    globe
      .arcsData(arcData)
      .arcColor('color')
      .arcDashLength(0.2)
      .arcDashGap(0.1)
      .arcDashAnimateTime(3000)
      .arcStroke(0.3)
      .arcAltitude(0.15);

    // Set initial camera position and controls
    globe
      .pointOfView({
        lat: 0,
        lng: 0,
        altitude: 2.5
      })
      .enablePointerInteraction(false); // Disable user interaction to match x.ai

    // Auto-rotate the globe
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = false;
    globe.controls().enablePan = false;

    // Add country polygons for better visibility
    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then(res => res.json())
      .then(countries => {
        globe.polygonsData(countries.features)
          .polygonCapColor(() => 'rgba(100, 100, 100, 0.15)')
          .polygonSideColor(() => 'rgba(100, 100, 100, 0.05)')
          .polygonStrokeColor(() => '#666666')
          .polygonAltitude(0.005);
      })
      .catch(() => {
        // Fallback if countries data fails to load
        console.log('Countries data not available');
      });

    // Cleanup function
    return () => {
      if (globeRef.current) {
        globeRef.current._destructor();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 max-w-lg mx-auto" data-testid="rotating-world">
      {/* Globe.gl Container */}
      <div 
        ref={mountRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(255, 99, 8, 0.1))'
        }}
      />

      {/* x.ai Style Location Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Thailand */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '58%',
            top: '35%',
            transform: 'translate(-0.5rem, -100%)',
            display: 'block'
          }}
          data-testid="marker-thailand"
        >
          <div className="flex flex-col">
            <div 
              className="w-4 h-4 order-2" 
              style={{ background: 'rgb(255, 99, 8)' }}
            ></div>
            <div className="pl-6 font-mono text-sm uppercase text-white order-1">
              <span className="text-balance">Thailand</span> <br/>
              <span className="opacity-75">13.7563°N, <br/>100.5018°E</span>
            </div>
          </div>
        </div>

        {/* Jakarta */}
        <div 
          className="absolute w-40 whitespace-nowrap"
          style={{
            left: '55%',
            top: '52%',
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
      </div>
    </div>
  );
}