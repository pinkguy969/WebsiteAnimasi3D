export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Ultra minimal footer - x.ai style */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="text-2xl font-light text-foreground">TALOS168</div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Platform gaming terpercaya dengan transparansi RTP dan teknologi canggih untuk pemain Indonesia.
            </p>
          </div>
          
          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-foreground uppercase tracking-wider" data-testid="text-footer-platform">
              Platform
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-games">Games</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-rtp">RTP Data</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-guides">Panduan</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-foreground uppercase tracking-wider" data-testid="text-footer-company">
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-about">Tentang</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-careers">Karir</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-news">Berita</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-foreground uppercase tracking-wider" data-testid="text-footer-contact">
              Contact
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-support">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-privacy">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-terms">Terms</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs" data-testid="text-copyright">
            © 2025 TALOS168. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs" data-testid="link-twitter">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs" data-testid="link-github">GitHub</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs" data-testid="link-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}