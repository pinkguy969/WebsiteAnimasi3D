import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function RotatingWorld3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const globeGroupRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - positioned like x.ai
    const camera = new THREE.PerspectiveCamera(
      45,
      1, // aspect ratio will be updated
      0.1,
      1000
    );
    camera.position.set(0, 0, 4);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Globe Group for rotation
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Main sphere wireframe
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: false,
      transparent: true,
      opacity: 0.1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphere);

    // Wireframe lines for latitude
    for (let i = 0; i < 8; i++) {
      const lat = (i / 7 - 0.5) * Math.PI;
      const radius = Math.cos(lat) * 1.5;
      const y = Math.sin(lat) * 1.5;
      
      const geometry = new THREE.RingGeometry(radius - 0.005, radius + 0.005, 64);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.position.y = y;
      ring.rotation.x = Math.PI / 2;
      globeGroup.add(ring);
    }

    // Wireframe lines for longitude
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const curve = new THREE.EllipseCurve(0, 0, 1.5, 1.5, 0, Math.PI * 2, false, 0);
      const points = curve.getPoints(64);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      line.rotation.y = angle;
      line.rotation.z = Math.PI / 2;
      globeGroup.add(line);
    }

    // Continent outlines (simplified)
    const continentMaterial = new THREE.MeshBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.4
    });

    // Asia outline
    const asiaGeometry = new THREE.RingGeometry(0.02, 0.04, 8);
    const asia = new THREE.Mesh(asiaGeometry, continentMaterial);
    asia.position.set(0.8, 0.6, 1.2);
    asia.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(asia);

    // Europe outline
    const europeGeometry = new THREE.RingGeometry(0.015, 0.03, 8);
    const europe = new THREE.Mesh(europeGeometry, continentMaterial);
    europe.position.set(0.3, 0.8, 1.3);
    europe.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(europe);

    // Africa outline
    const africaGeometry = new THREE.RingGeometry(0.018, 0.035, 8);
    const africa = new THREE.Mesh(africaGeometry, continentMaterial);
    africa.position.set(0.2, -0.3, 1.4);
    africa.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(africa);

    // Americas outline
    const americasGeometry = new THREE.RingGeometry(0.025, 0.045, 8);
    const americas = new THREE.Mesh(americasGeometry, continentMaterial);
    americas.position.set(-1.2, 0.2, 0.8);
    americas.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(americas);

    // Thailand marker on globe
    const thailandGeometry = new THREE.RingGeometry(0.015, 0.025, 6);
    const thailandMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6308, // Orange color like markers
      transparent: true,
      opacity: 0.8
    });
    const thailand = new THREE.Mesh(thailandGeometry, thailandMaterial);
    thailand.position.set(0.65, 0.3, 1.35); // Thailand coordinates on sphere
    thailand.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(thailand);

    // Jakarta marker on globe
    const jakartaGeometry = new THREE.RingGeometry(0.015, 0.025, 6);
    const jakartaMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6308, // Orange color like markers
      transparent: true,
      opacity: 0.8
    });
    const jakartaMarker = new THREE.Mesh(jakartaGeometry, jakartaMaterial);
    jakartaMarker.position.set(0.75, -0.15, 1.25); // Jakarta coordinates on sphere
    jakartaMarker.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(jakartaMarker);

    // Connection line from Thailand to Jakarta
    const connectionPoints = [
      new THREE.Vector3(0.65, 0.3, 1.35), // Thailand position
      new THREE.Vector3(0.75, -0.15, 1.25) // Jakarta position
    ];
    const connectionGeometry = new THREE.BufferGeometry().setFromPoints(connectionPoints);
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0xff6308, // Orange color
      transparent: true,
      opacity: 0.7,
      linewidth: 2
    });
    const connectionLine = new THREE.Line(connectionGeometry, connectionMaterial);
    globeGroup.add(connectionLine);

    // Second connection line (Thailand to Jakarta - curved path)
    const curvePoints = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const x = 0.65 + (0.75 - 0.65) * t;
      const y = 0.3 + ((-0.15) - 0.3) * t + Math.sin(t * Math.PI) * 0.2; // Curved path
      const z = 1.35 + (1.25 - 1.35) * t;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }
    const curvedGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const curvedMaterial = new THREE.LineBasicMaterial({
      color: 0xff6308,
      transparent: true,
      opacity: 0.5,
      linewidth: 1
    });
    const curvedLine = new THREE.Line(curvedGeometry, curvedMaterial);
    globeGroup.add(curvedLine);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y += 0.002; // Slow rotation like x.ai
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-96 max-w-lg mx-auto" data-testid="rotating-world">
      {/* Three.js Globe Container */}
      <div 
        ref={mountRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(255, 99, 8, 0.1))'
        }}
      />

      {/* x.ai Style Location Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* San Francisco • Palo Alto */}
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

        {/* London */}
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

        {/* Jakarta */}
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

        {/* Singapore */}
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