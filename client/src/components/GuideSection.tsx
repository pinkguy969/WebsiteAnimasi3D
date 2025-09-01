export function GuideSection() {
  const steps = [
    {
      title: "Registrasi Akun",
      description: "Daftar dengan informasi yang valid dan verifikasi identitas sesuai prosedur keamanan."
    },
    {
      title: "Tetapkan Batas",
      description: "Tentukan batas deposit harian/mingguan dan waktu bermain sebelum mulai."
    },
    {
      title: "Pelajari RTP",
      description: "Pahami persentase RTP setiap game untuk expectation yang realistis."
    },
    {
      title: "Bermain Bertanggung Jawab",
      description: "Ikuti batas yang telah ditetapkan dan gunakan fitur kontrol diri yang tersedia."
    }
  ];

  return (
    <section id="panduan" className="py-32 bg-muted/30 border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-16">
          {/* Section header */}
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
              [ PANDUAN PEMAIN ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-guide-title">
              Panduan lengkap untuk
              <span className="text-muted-foreground block">pemain baru</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-guide-description">
              Langkah-langkah penting untuk memulai pengalaman gaming yang aman dan bertanggung jawab.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4" data-testid={`step-${index}`}>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-light">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-light text-foreground" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-12" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Important notice */}
          <div className="bg-muted/20 border border-border rounded-lg p-8 space-y-4">
            <h4 className="text-lg font-light text-foreground" data-testid="text-notice-title">
              Catatan Penting
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-inside" data-testid="list-important-notes">
              <li>Pastikan Anda berusia minimal 18 tahun sebelum mendaftar</li>
              <li>Tetapkan budget yang tidak akan mengganggu keuangan pribadi</li>
              <li>Gunakan fitur self-exclusion jika diperlukan</li>
              <li>Hubungi support jika mengalami masalah dengan kontrol diri</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}