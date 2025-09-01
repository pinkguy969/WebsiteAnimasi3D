export function ArticleSection() {
  return (
    <section id="artikel" className="py-32 bg-muted/20 border-t border-border relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <article className="space-y-16">
          {/* Article header */}
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
              [ ARTIKEL EDUKATIF ]
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-article-title">
              Memahami RTP dan
              <span className="text-muted-foreground block">transparansi gaming</span>
            </h1>
          </div>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Section 1: Apa itu RTP */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-foreground border-b border-border pb-4" data-testid="text-section-what-is-rtp">
                Apa itu RTP?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-rtp-definition">
                  RTP (Return to Player) adalah persentase teoretis dari total taruhan yang dikembalikan kepada pemain 
                  dalam jangka panjang. Misalnya, game dengan RTP 96% berarti secara teoretis akan mengembalikan 
                  Rp96 dari setiap Rp100 yang dipertaruhkan dalam jutaan putaran.
                </p>
                <p data-testid="text-rtp-importance">
                  Penting untuk dipahami bahwa RTP bukanlah jaminan hasil dalam session singkat. 
                  Ini adalah perhitungan matematis berdasarkan simulasi jutaan putaran permainan.
                </p>
              </div>
            </div>

            {/* Section 2: Pentingnya Transparansi */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-foreground border-b border-border pb-4" data-testid="text-section-transparency">
                Pentingnya Transparansi dalam Gaming
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-transparency-importance">
                  Transparansi dalam industri gaming digital sangat penting untuk membangun kepercayaan antara 
                  platform dan pemain. Dengan menyediakan informasi RTP yang akurat dan real-time, 
                  pemain dapat membuat keputusan yang lebih informed.
                </p>
                <ul className="list-disc list-inside space-y-2" data-testid="list-transparency-benefits">
                  <li>Pemain memahami house edge setiap permainan</li>
                  <li>Tidak ada informasi yang disembunyikan</li>
                  <li>Membantu pemain mengelola ekspektasi</li>
                  <li>Mendorong bermain yang lebih bertanggung jawab</li>
                </ul>
              </div>
            </div>

            {/* Section 3: Tips Bermain */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-foreground border-b border-border pb-4" data-testid="text-section-tips">
                Tips Bermain Bertanggung Jawab
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ol className="list-decimal list-inside space-y-3" data-testid="list-responsible-tips">
                  <li>
                    <strong>Tetapkan Budget:</strong> Tentukan jumlah yang siap Anda hilangkan sebelum bermain. 
                    Jangan pernah bermain dengan uang yang dibutuhkan untuk kebutuhan sehari-hari.
                  </li>
                  <li>
                    <strong>Atur Waktu:</strong> Tetapkan durasi bermain dan gunakan alarm untuk mengingatkan 
                    kapan harus berhenti.
                  </li>
                  <li>
                    <strong>Pahami Odds:</strong> Pelajari RTP dan volatilitas game sebelum bermain. 
                    Game dengan RTP tinggi tidak menjamin kemenangan cepat.
                  </li>
                  <li>
                    <strong>Jangan Kejar Kekalahan:</strong> Jika mengalami kekalahan, jangan menambah taruhan 
                    untuk mencoba mengembalikan kerugian.
                  </li>
                  <li>
                    <strong>Istirahat Berkala:</strong> Ambil break reguler untuk menjaga fokus dan 
                    membuat keputusan yang jernih.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4: Kesimpulan */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-foreground border-b border-border pb-4" data-testid="text-section-conclusion">
                Kesimpulan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-conclusion">
                  Gaming online dapat menjadi hiburan yang menyenangkan ketika dilakukan dengan pemahaman yang benar 
                  dan sikap yang bertanggung jawab. Transparansi RTP, edukasi pemain, dan tools untuk kontrol diri 
                  adalah fondasi penting untuk industri gaming yang sehat.
                </p>
                <p data-testid="text-final-note">
                  Talos168 berkomitmen untuk terus menyediakan informasi yang akurat, transparan, dan edukatif 
                  untuk mendukung pengalaman gaming yang positif bagi semua pemain.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}