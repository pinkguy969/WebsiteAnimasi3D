export function ProfileSection() {
  return (
    <section id="profil" className="py-32 bg-background border-t border-border relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-16">
          {/* Section header */}
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
              [ PROFIL KAMI ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-profile-title">
              Membangun kepercayaan melalui
              <span className="text-muted-foreground block">transparansi dan integritas</span>
            </h2>
          </div>

          {/* Brand description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-foreground" data-testid="text-about-title">
                Tentang Talos168
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-about-description">
                Talos168 adalah platform gaming yang berkomitmen pada transparansi penuh dan bermain bertanggung jawab. 
                Kami menyediakan informasi RTP (Return to Player) real-time untuk semua permainan, 
                memastikan pemain memiliki pemahaman yang jelas tentang setiap game yang mereka mainkan.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4" data-testid="value-transparency">
                <div className="w-8 h-8 bg-foreground rounded-full opacity-20"></div>
                <h4 className="text-xl font-light text-foreground">Transparansi Total</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Setiap data RTP dipublikasikan secara real-time dan dapat diverifikasi. 
                  Tidak ada informasi yang disembunyikan dari pemain.
                </p>
              </div>
              
              <div className="space-y-4" data-testid="value-responsibility">
                <div className="w-8 h-8 bg-foreground rounded-full opacity-20"></div>
                <h4 className="text-xl font-light text-foreground">Bermain Bertanggung Jawab</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Kami menyediakan tools dan panduan untuk membantu pemain menetapkan batas 
                  dan bermain dengan sehat dan bertanggung jawab.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h3 className="text-2xl font-light text-foreground" data-testid="text-compliance-title">
              Kepatuhan dan Keamanan
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-compliance-description">
                Platform kami beroperasi dengan standar keamanan tinggi dan mematuhi regulasi gaming internasional. 
                Setiap sistem telah diaudit secara independen untuk memastikan fairness dan keamanan data pemain.
              </p>
              <div className="text-sm text-muted-foreground opacity-70" data-testid="text-last-updated">
                Terakhir diperbarui: 31 Januari 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}