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
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          {/* Mission tag */}
          <div className="hero-tag font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-12 opacity-70">
            [ MISI KAMI ]
          </div>
          
          {/* Main heading - ultra clean x.ai style */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 tracking-[-0.02em]">
            <span className="text-foreground block">
              Memahami
            </span>
            <span className="text-muted-foreground block">
              Dunia Gaming
            </span>
          </h1>
          
          {/* No subtitle needed - x.ai keeps it very minimal */}
          
          {/* Single minimal CTA */}
          <div className="mt-16">
            <a 
              href="#games"
              className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors text-lg font-light"
              data-testid="button-explore"
            >
              <span>Jelajahi dunia gaming kami</span>
              <ArrowRight size={20} className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
