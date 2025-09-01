import { ExternalLink, Shield, Clock, AlertCircle } from "lucide-react";

export function ResponsibleGamingSection() {
  const safetyTips = [
    "Tetapkan batas waktu dan budget sebelum bermain",
    "Jangan bermain saat sedang stress atau emosi tidak stabil", 
    "Gunakan fitur reality check untuk mengingatkan durasi bermain",
    "Ambil break reguler dan jangan bermain secara marathon",
    "Jangan pernah meminjam uang untuk bermain"
  ];

  const helpResources = [
    {
      name: "BeGambleAware",
      description: "Organisasi internasional untuk bantuan gaming addiction",
      link: "https://www.begambleaware.org"
    },
    {
      name: "GamCare", 
      description: "Support dan counseling untuk masalah gaming",
      link: "https://www.gamcare.org.uk"
    },
    {
      name: "Gambling Therapy",
      description: "Platform support global dengan berbagai bahasa",
      link: "https://www.gamblingtherapy.org"
    }
  ];

  return (
    <section id="responsible-gaming" className="py-32 bg-background border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-16">
          {/* Section header */}
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
              [ RESPONSIBLE GAMING ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-responsible-title">
              Bermain aman dan
              <span className="text-muted-foreground block">bertanggung jawab</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-responsible-description">
              Gaming harus menjadi hiburan yang sehat. Kami berkomitmen untuk mendukung pemain 
              dalam menjaga kontrol dan bermain dengan bertanggung jawab.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Safety tips */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-foreground opacity-60" />
                <h3 className="text-2xl font-light text-foreground" data-testid="text-safety-tips-title">
                  Tips Keamanan
                </h3>
              </div>
              <ul className="space-y-4" data-testid="list-safety-tips">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 opacity-60"></div>
                    <span className="text-muted-foreground leading-relaxed text-sm">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Age verification */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <AlertCircle size={24} className="text-foreground opacity-60" />
                <h3 className="text-2xl font-light text-foreground" data-testid="text-age-verification-title">
                  Verifikasi Usia
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-age-requirement">
                  <strong>Batas usia minimum 18 tahun.</strong> Semua pemain harus memverifikasi 
                  usia mereka sebelum dapat mengakses platform.
                </p>
                <p data-testid="text-age-verification">
                  Kami menggunakan sistem verifikasi identitas yang ketat untuk memastikan 
                  tidak ada akses dari minor. Dokumen identitas yang diperlukan akan diverifikasi 
                  dalam 24 jam.
                </p>
              </div>
            </div>
          </div>

          {/* Help resources */}
          <div className="space-y-8 pt-8 border-t border-border">
            <div className="flex items-center gap-3">
              <ExternalLink size={24} className="text-foreground opacity-60" />
              <h3 className="text-2xl font-light text-foreground" data-testid="text-help-resources-title">
                Bantuan Eksternal
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-help-intro">
              Jika Anda atau orang terdekat mengalami masalah dengan gaming, berikut adalah 
              organisasi profesional yang dapat membantu:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {helpResources.map((resource, index) => (
                <div key={index} className="bg-muted/20 border border-border rounded-lg p-6 space-y-3" data-testid={`card-help-resource-${index}`}>
                  <h4 className="text-lg font-light text-foreground" data-testid={`text-resource-name-${index}`}>
                    {resource.name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-resource-description-${index}`}>
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm"
                    data-testid={`link-resource-${index}`}
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency contact */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-destructive" />
              <h4 className="text-lg font-light text-foreground" data-testid="text-emergency-title">
                Bantuan Darurat 24/7
              </h4>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-emergency-description">
              Jika Anda membutuhkan bantuan segera terkait masalah gaming, hubungi layanan crisis hotline 
              atau kunjungi unit gawat darurat terdekat. Kesehatan mental Anda adalah prioritas utama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}