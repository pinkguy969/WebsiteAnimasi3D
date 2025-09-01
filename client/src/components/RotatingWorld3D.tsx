import { useEffect, useRef } from 'react';

declare const Globe: any;

export function RotatingWorld3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Load Globe.gl from CDN since npm import has issues
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/globe.gl/dist/globe.gl.min.js';
    script.onload = () => {
      if (!mountRef.current) return;

      try {
        // Initialize Globe.gl - airline routes style
        const globe = (window as any).Globe()(mountRef.current)
          .width(400)
          .height(400)
          .backgroundColor('rgba(0,0,0,0)')
          .showGlobe(true)
          .showAtmosphere(true)
          .atmosphereColor('#ff6308')
          .atmosphereAltitude(0.15);

        globeRef.current = globe;

        // Set camera for nice view
        globe.pointOfView({ 
          lat: 30, 
          lng: 0, 
          altitude: 2.2 
        });

        // Auto-rotation like airline routes
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.4;
        globe.controls().enableZoom = false;
        globe.controls().enablePan = false;

        // Load countries data
        fetch('https://unpkg.com/world-atlas/countries-50m.json')
          .then(res => res.json())
          .then(countries => {
            globe
              .polygonsData(countries.features)
              .polygonCapColor(() => 'rgba(150, 150, 150, 0.15)')
              .polygonSideColor(() => 'rgba(150, 150, 150, 0.05)')
              .polygonStrokeColor('#666666')
              .polygonAltitude(0.01);
          })
          .catch(err => {
            console.log('Countries data not available');
          });

      } catch (error) {
        console.error('Globe error:', error);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Globe.gl script');
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (globeRef.current && globeRef.current._destructor) {
        globeRef.current._destructor();
      }
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-96 max-w-lg mx-auto" data-testid="rotating-world">
      {/* Globe.gl Container */}
      <div 
        ref={mountRef}
        className="w-full h-full"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(255, 99, 8, 0.2))'
        }}
      />
    </div>
  );
}