import { useEffect, useRef, useState } from 'react';

export function RotatingWorld3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    let script: HTMLScriptElement | null = null;
    let isDestroyed = false;

    // Check if Globe is already loaded
    if ((window as any).Globe) {
      initializeGlobe();
    } else {
      loadGlobeScript();
    }

    function loadGlobeScript() {
      script = document.createElement('script');
      script.src = 'https://unpkg.com/globe.gl@2.43.0/dist/globe.gl.min.js';
      script.onload = () => {
        if (!isDestroyed) {
          setTimeout(initializeGlobe, 100); // Small delay to ensure proper loading
        }
      };
      script.onerror = () => {
        console.error('Failed to load Globe.gl script');
      };
      document.head.appendChild(script);
    }

    function initializeGlobe() {
      if (!mountRef.current || isDestroyed || !(window as any).Globe) return;

      try {
        console.log('Initializing Globe...');
        
        // Initialize Globe.gl with reliable settings
        const globe = (window as any).Globe()(mountRef.current)
          .width(400)
          .height(400)
          .backgroundColor('rgba(0,0,0,0)')
          .showGlobe(true)
          .showAtmosphere(true)
          .atmosphereColor('#ff6308')
          .atmosphereAltitude(0.15)
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg');

        globeRef.current = globe;
        setIsLoaded(true);

        // Set camera position
        globe.pointOfView({ 
          lat: 30, 
          lng: 0, 
          altitude: 2.2 
        });

        // Auto-rotation
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.4;
        globe.controls().enableZoom = false;
        globe.controls().enablePan = false;

        // Load countries with better visibility
        loadCountriesData(globe);

      } catch (error) {
        console.error('Globe initialization error:', error);
      }
    }

    function loadCountriesData(globe: any) {
      // First try external sources, then use inline data as final fallback
      const urls = [
        'https://unpkg.com/world-atlas@2.0.2/countries-50m.json',
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
      ];
      
      function tryUrl(urlIndex: number) {
        if (urlIndex >= urls.length) {
          // All external sources failed, use inline backup data
          console.log('Using inline backup countries data');
          useInlineData();
          return;
        }
        
        fetch(urls[urlIndex])
          .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
          })
          .then(countries => {
            if (isDestroyed) return;
            
            console.log('Countries data loaded from:', urls[urlIndex]);
            console.log('Features count:', countries.features?.length);
            
            if (countries && countries.features && Array.isArray(countries.features)) {
              globe
                .polygonsData(countries.features)
                .polygonCapColor(() => 'rgba(120, 120, 120, 0.8)')
                .polygonSideColor(() => 'rgba(100, 100, 100, 0.5)')
                .polygonStrokeColor('#aaaaaa')
                .polygonAltitude(0.02);
              
              console.log('Countries successfully applied to globe');
            } else {
              console.error('Invalid data structure:', countries);
              tryUrl(urlIndex + 1);
            }
          })
          .catch(err => {
            console.error(`Failed to load from ${urls[urlIndex]}:`, err);
            // Try next URL
            tryUrl(urlIndex + 1);
          });
      }
      
      // Inline backup data for essential countries
      function useInlineData() {
        const inlineCountries = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: { name: "Indonesia" },
              geometry: {
                type: "Polygon",
                coordinates: [[[95,-11],[141,-11],[141,6],[95,6],[95,-11]]]
              }
            },
            {
              type: "Feature", 
              properties: { name: "United States" },
              geometry: {
                type: "Polygon",
                coordinates: [[[-180,20],[-50,20],[-50,72],[-180,72],[-180,20]]]
              }
            },
            {
              type: "Feature",
              properties: { name: "Europe" },
              geometry: {
                type: "Polygon", 
                coordinates: [[[-25,35],[45,35],[45,72],[-25,72],[-25,35]]]
              }
            }
          ]
        };
        
        if (!isDestroyed) {
          globe
            .polygonsData(inlineCountries.features)
            .polygonCapColor(() => 'rgba(120, 120, 120, 0.8)')
            .polygonSideColor(() => 'rgba(100, 100, 100, 0.5)')
            .polygonStrokeColor('#aaaaaa')
            .polygonAltitude(0.02);
          
          console.log('Inline countries data applied successfully');
        }
      }
      
      // Start with first URL
      tryUrl(0);
    }

    // Cleanup
    return () => {
      isDestroyed = true;
      if (globeRef.current && globeRef.current._destructor) {
        try {
          globeRef.current._destructor();
        } catch (e) {
          console.log('Globe cleanup completed');
        }
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 max-w-lg mx-auto border-2 border-orange-400 rounded-lg bg-black/40" data-testid="rotating-world">
      {/* Title overlay */}
      <div className="absolute -top-8 left-0 right-0 text-center">
        <span className="text-orange-400 text-xs font-mono uppercase tracking-wider">
          🌍 3D GLOBE VISUALIZATION
        </span>
      </div>
      
      {/* Globe.gl Container */}
      <div 
        ref={mountRef}
        className="w-full h-full rounded-lg"
        style={{ 
          filter: 'drop-shadow(0 0 40px rgba(255, 99, 8, 0.5))',
          background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-orange-400 text-lg font-mono">Loading 3D Globe...</span>
        </div>
      )}
      
      {/* Success indicator when loaded */}
      {isLoaded && (
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-mono">GLOBE ACTIVE</span>
        </div>
      )}
    </div>
  );
}