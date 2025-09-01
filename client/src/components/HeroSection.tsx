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
          
          {/* Globe feature highlight */}
          <div className="mt-12 p-6 bg-orange-400/10 border border-orange-400/30 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wide">
                🌍 FITUR TERBARU
              </span>
            </div>
            <h3 className="text-lg font-light text-foreground mb-2">
              Globe 3D Interaktif dengan Earth Visualization
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lihat data RTP global dengan teknologi 3D terdepan. Scroll ke bawah untuk melihat Globe berputar.
            </p>
          </div>

          {/* CTA buttons with 3D glitch effects */}
          <div className="mt-16 flex gap-6 hero-buttons">
            <a 
              href="#"
              rel="nofollow sponsored"
              className="glitch-btn-primary bg-foreground text-background px-8 py-3 rounded-lg font-light transition-all duration-300"
              data-testid="button-login"
            >
              <span className="btn-text">LOGIN</span>
            </a>
            <button 
              onClick={() => document.getElementById('rtp')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="glitch-btn-secondary border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-light transition-all duration-300 flex items-center gap-2"
              data-testid="button-globe"
            >
              <span className="btn-text">LIHAT GLOBE 3D</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
