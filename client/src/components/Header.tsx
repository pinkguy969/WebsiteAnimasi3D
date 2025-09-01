export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-6xl mx-auto">
        {/* Logo image - x.ai style */}
        <a href="#" className="flex items-center" data-testid="logo-link">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/talos-storage.appspot.com/o/LOGO-TALOS168.png?alt=media&token=bb85fb5d-bce3-46c1-a8a5-fc2a0ec9a393"
            alt="Talos168 Logo"
            className="h-6 sm:h-8 w-auto"
            data-testid="logo-image"
          />
        </a>
        
        {/* Minimal navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 xl:gap-12 list-none">
            <li>
              <a 
                href="#profil" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-profil"
              >
                PROFIL
              </a>
            </li>
            <li>
              <a 
                href="#panduan" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-panduan"
              >
                PANDUAN
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
                href="#faq" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-faq"
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#responsible-gaming" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide"
                data-testid="nav-responsible"
              >
                RESPONSIBLE GAMING
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Glowing CTA button */}
        <a 
          href="https://springtrap.xyz/talos"
          rel="sponsored"
          className="navbar-glow-btn bg-transparent border border-border text-foreground px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300"
          data-testid="cta-button"
        >
          <span className="hidden sm:inline">LOGIN / MAIN SEKARANG</span>
          <span className="sm:hidden">LOGIN</span>
        </a>
      </div>
    </header>
  );
}
