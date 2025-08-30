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
    <section className="hero-container min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* 3D Light Beam Background */}
      <LightBeam3D mousePosition={mousePosition} />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="hero-tag font-mono text-sm text-zinc-400 uppercase tracking-wider mb-8">
          SITUS 168 TERPERCAYA
        </div>
        
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Understand
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            the Gaming
          </span>
        </h1>
        
        <p className="hero-subtitle text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Panduan lengkap Talos168 dengan informasi RTP transparan, 
          panduan bermain komprehensif, dan komitmen terhadap responsible gaming.
        </p>
        
        <div className="hero-buttons flex gap-4 flex-wrap justify-center items-center">
          <button 
            className="btn-primary bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm font-mono hover:bg-zinc-200 hover:-translate-y-0.5 hover:shadow-xl transition-all flex items-center gap-3"
            data-testid="button-start-playing"
          >
            <span>MULAI BERMAIN</span>
            <ArrowRight size={20} />
          </button>
          
          <button 
            className="btn-secondary bg-transparent border border-zinc-800 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm font-mono hover:bg-white/10 hover:border-white transition-all"
            data-testid="button-view-rtp"
          >
            <span>LIHAT RTP</span>
          </button>
        </div>
      </div>
    </section>
  );
}
