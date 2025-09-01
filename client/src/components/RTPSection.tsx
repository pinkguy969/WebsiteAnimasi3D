import { RotatingWorld3D } from "./RotatingWorld3D";

export function RTPSection() {
  const rtpData = [
    { provider: "Pragmatic Play", game: "Sweet Bonanza", rtp: "96.51%", category: "Slot" },
    { provider: "NetEnt", game: "Starburst", rtp: "96.09%", category: "Slot" },
    { provider: "Microgaming", game: "Mega Moolah", rtp: "88.12%", category: "Progressive" },
    { provider: "Play'n GO", game: "Book of Dead", rtp: "96.21%", category: "Slot" },
    { provider: "Evolution", game: "Lightning Roulette", rtp: "97.30%", category: "Live Casino" },
    { provider: "Ezugi", game: "Blackjack", rtp: "99.28%", category: "Live Casino" }
  ];

  return (
    <section id="rtp" className="py-32 bg-background border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-16">
          {/* Section header with 3D World */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
                [ RTP TRANSPARENCY ]
              </div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-rtp-title">
                Informasi RTP
                <span className="text-muted-foreground block">transparan dan real-time</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-rtp-description">
                Data Return to Player (RTP) yang akurat dan terupdate untuk membantu Anda membuat keputusan yang tepat.
              </p>
            </div>
            
            {/* 3D Rotating World */}
            <div className="flex justify-center lg:justify-end">
              <RotatingWorld3D />
            </div>
          </div>

          {/* RTP Table */}
          <div className="bg-muted/20 border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="table-rtp">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-light text-foreground uppercase tracking-wider">Provider</th>
                    <th className="text-left px-6 py-4 text-sm font-light text-foreground uppercase tracking-wider">Game</th>
                    <th className="text-left px-6 py-4 text-sm font-light text-foreground uppercase tracking-wider">RTP</th>
                    <th className="text-left px-6 py-4 text-sm font-light text-foreground uppercase tracking-wider">Kategori</th>
                  </tr>
                </thead>
                <tbody>
                  {rtpData.map((item, index) => (
                    <tr key={index} className="border-b border-border/50" data-testid={`row-rtp-${index}`}>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.provider}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-light">{item.game}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-mono">{item.rtp}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Educational note */}
          <div className="bg-muted/10 border-l-2 border-foreground/20 pl-6 py-4">
            <h4 className="text-lg font-light text-foreground mb-3" data-testid="text-rtp-note-title">
              Catatan Edukatif
            </h4>
            <div className="space-y-3 text-muted-foreground leading-relaxed" data-testid="text-rtp-educational-note">
              <p>
                <strong>RTP bukan prediksi hasil singkat.</strong> Persentase RTP menunjukkan tingkat pengembalian 
                teoretis dalam jangka panjang (jutaan putaran). Hasil individual dapat bervariasi signifikan.
              </p>
              <p>
                RTP yang lebih tinggi tidak menjamin kemenangan, tetapi memberikan gambaran matematis 
                tentang house edge dalam jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}