export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        {/* Ultra minimal logo - x.ai style */}
        <a href="#" className="text-2xl font-light text-foreground tracking-tight" data-testid="logo-link">
          TALOS168
        </a>
        
        {/* Minimal navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-12 list-none">
            <li>
              <a 
                href="#games" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-games"
              >
                GAMES
              </a>
            </li>
            <li>
              <a 
                href="#rtp" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-rtp"
              >
                RTP
              </a>
            </li>
            <li>
              <a 
                href="#guide" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-guide"
              >
                PANDUAN
              </a>
            </li>
            <li>
              <a 
                href="#support" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-support"
              >
                TENTANG
              </a>
            </li>
            <li>
              <a 
                href="#careers" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-careers"
              >
                CAREERS
              </a>
            </li>
            <li>
              <a 
                href="#news" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-news"
              >
                NEWS
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Simple CTA button */}
        <a 
          href="#try" 
          className="bg-transparent border border-border text-foreground px-6 py-2 rounded-lg text-sm font-light tracking-wide hover:bg-muted hover:border-foreground transition-all"
          data-testid="cta-button"
        >
          MAIN SEKARANG
        </a>
      </div>
    </header>
  );
}
