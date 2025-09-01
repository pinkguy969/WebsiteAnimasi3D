export function FeatureSection() {
  return (
    <section className="py-32 bg-background relative z-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-8">
        {/* Ultra minimal section intro */}
        <div className="mb-24">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
            [ TRANSPARENCY ]
          </div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground max-w-2xl" data-testid="text-features-title">
            Building the future of
            <span className="text-muted-foreground block">transparent gaming</span>
          </h2>
        </div>
        
        {/* Minimal content blocks - x.ai style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4" data-testid="card-feature-0">
            <div className="w-8 h-8 bg-foreground rounded-full opacity-20"></div>
            <h3 className="text-xl font-light text-foreground" data-testid="text-feature-title-0">
              Real-time RTP
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-feature-description-0">
              Live transparency data for all gaming experiences with verified authenticity.
            </p>
          </div>
          
          <div className="space-y-4" data-testid="card-feature-1">
            <div className="w-8 h-8 bg-foreground rounded-full opacity-20"></div>
            <h3 className="text-xl font-light text-foreground" data-testid="text-feature-title-1">
              Verified Systems
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-feature-description-1">
              Independently audited algorithms ensuring fairness and reliability.
            </p>
          </div>
          
          <div className="space-y-4" data-testid="card-feature-2">
            <div className="w-8 h-8 bg-foreground rounded-full opacity-20"></div>
            <h3 className="text-xl font-light text-foreground" data-testid="text-feature-title-2">
              Global Standards
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-feature-description-2">
              Adherence to international responsible gaming protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
