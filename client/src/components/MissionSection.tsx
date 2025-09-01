export function MissionSection() {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {/* Mission statement - x.ai style */}
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] opacity-70">
            [ MISSION ]
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-foreground" data-testid="text-mission-title">
              To advance our collective understanding of the gaming universe 
              <span className="text-muted-foreground">through transparent, verifiable systems.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl" data-testid="text-mission-description">
              We believe that transparency in gaming mechanics and fair play algorithms 
              are fundamental to building trust in the digital entertainment ecosystem.
            </p>
          </div>
          
          {/* Simple stats - minimal design */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2" data-testid="stat-games">
              <div className="text-3xl font-light text-foreground">1000+</div>
              <div className="text-muted-foreground text-sm">Verified Games</div>
            </div>
            <div className="space-y-2" data-testid="stat-transparency">
              <div className="text-3xl font-light text-foreground">100%</div>
              <div className="text-muted-foreground text-sm">RTP Transparency</div>
            </div>
            <div className="space-y-2" data-testid="stat-uptime">
              <div className="text-3xl font-light text-foreground">99.9%</div>
              <div className="text-muted-foreground text-sm">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}