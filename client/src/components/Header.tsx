import { useState } from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a href="#" className="text-xl font-bold text-white" data-testid="logo-link">
          TALOS168
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <a 
                href="#games" 
                className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono font-medium"
                data-testid="nav-games"
              >
                GAMES
              </a>
            </li>
            <li>
              <a 
                href="#rtp" 
                className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono font-medium"
                data-testid="nav-rtp"
              >
                RTP
              </a>
            </li>
            <li>
              <a 
                href="#guide" 
                className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono font-medium"
                data-testid="nav-guide"
              >
                GUIDE
              </a>
            </li>
            <li>
              <a 
                href="#support" 
                className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono font-medium"
                data-testid="nav-support"
              >
                SUPPORT
              </a>
            </li>
          </ul>
        </nav>
        
        <a 
          href="#try" 
          className="bg-transparent border border-zinc-800 text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider font-mono font-semibold hover:bg-white/10 hover:border-white transition-all"
          data-testid="cta-button"
        >
          TRY NOW
        </a>
      </div>
    </header>
  );
}
