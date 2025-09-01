import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export function RotatingWorld3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Globe.gl with airline routes style
    const globe = new Globe(mountRef.current)
      .width(400)
      .height(400)
      .backgroundColor('rgba(0,0,0,0)')
      .showGlobe(true)
      .showAtmosphere(false);

    globeRef.current = globe;

    // Set initial camera position and controls for better view
    globe
      .pointOfView({
        lat: 20,
        lng: 50,
        altitude: 2.5
      })
      .enablePointerInteraction(false);

    // Auto-rotate the globe like airline routes example
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;
    globe.controls().enableZoom = false;
    globe.controls().enablePan = false;

    // Add country polygons like airline routes example
    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then(res => res.json())
      .then(countries => {
        globe.polygonsData(countries.features)
          .polygonCapColor(() => 'rgba(200, 200, 200, 0.1)')
          .polygonSideColor(() => 'rgba(200, 200, 200, 0.05)')
          .polygonStrokeColor(() => '#444444')
          .polygonAltitude(0.01);
      })
      .catch(() => {
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
      {/* Globe.gl Container - Airline Routes Style */}
      <div 
        ref={mountRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          filter: 'drop-shadow(0 0 30px rgba(100, 100, 100, 0.1))'
        }}
      />
    </div>
  );
}