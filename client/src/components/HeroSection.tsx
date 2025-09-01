export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl mx-auto text-center">
          {/* Mission tag */}
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-12 opacity-70">
            [ MISI KAMI ]
          </div>
          
          {/* Main heading - clean minimal style */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] mb-6 sm:mb-8 tracking-[-0.02em]">
            <span className="text-foreground block">
              Memahami
            </span>
            <span className="text-muted-foreground block">
              Dunia Gaming
            </span>
          </h1>
          
          {/* CTA buttons - clean style */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a 
              href="https://springtrap.xyz/talos"
              rel="sponsored"
              className="bg-foreground text-background px-6 sm:px-8 py-3 rounded-lg font-light transition-all duration-300 text-center hover:bg-foreground/90"
              data-testid="button-login"
            >
              LOGIN
            </a>
            <a 
              href="https://springtrap.xyz/talos"
              rel="sponsored"
              className="border border-border text-foreground px-6 sm:px-8 py-3 rounded-lg font-light transition-all duration-300 text-center hover:bg-foreground/5"
              data-testid="button-register"
            >
              DAFTAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
