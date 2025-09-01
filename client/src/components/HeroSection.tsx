import { useState, useEffect } from "react";
import { LightBeam3D } from "./LightBeam3D";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = document.querySelector('.hero-container')?.getBoundingClientRect();
      if (rect) {
        const x = (mouseEvent.clientX - rect.left) / rect.width;
        const y = (mouseEvent.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroContainer = document.querySelector('.hero-container');
    if (heroContainer) {
      heroContainer.addEventListener('mousemove', handleMouseMove);
      return () => heroContainer.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="hero-container min-h-screen flex flex-col justify-center items-start relative overflow-hidden bg-background">
      {/* 3D Light Beam Background */}
      <LightBeam3D mousePosition={mousePosition} />
      
      {/* Hero Content - x.ai minimal style */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Mission tag */}
          <div className="hero-tag font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-12 opacity-70">
            [ MISI KAMI ]
          </div>
          
          {/* Main heading - ultra clean x.ai style */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] mb-6 sm:mb-8 tracking-[-0.02em]">
            <span className="text-foreground block">
              Memahami
            </span>
            <span className="text-muted-foreground block">
              Dunia Gaming
            </span>
          </h1>
          
          {/* No subtitle needed - x.ai keeps it very minimal */}
          
          {/* CTA buttons with 3D glitch effects */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 hero-buttons">
            <a 
              href="https://springtrap.xyz/talos"
              rel="sponsored"
              className="glitch-btn-primary bg-foreground text-background px-6 sm:px-8 py-3 rounded-lg font-light transition-all duration-300 text-center"
              data-testid="button-login"
            >
              <span className="btn-text">LOGIN</span>
            </a>
            <a 
              href="https://springtrap.xyz/talos"
              rel="sponsored"
              className="glitch-btn-secondary border border-border text-foreground px-6 sm:px-8 py-3 rounded-lg font-light transition-all duration-300 text-center"
              data-testid="button-register"
            >
              <span className="btn-text">DAFTAR</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
