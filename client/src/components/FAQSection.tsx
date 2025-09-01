import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Apa itu RTP dan bagaimana cara kerjanya?",
    answer: "RTP (Return to Player) adalah persentase teoretis dari total taruhan yang dikembalikan kepada pemain dalam jangka panjang. RTP dihitung berdasarkan jutaan simulasi putaran dan menunjukkan house edge matematis. Penting untuk dipahami bahwa RTP bukan prediksi untuk session individual."
  },
  {
    question: "Bagaimana Talos168 memastikan keamanan data pemain?",
    answer: "Kami menggunakan enkripsi SSL 256-bit untuk semua transaksi dan data pribadi. Sistem keamanan kami diaudit secara berkala oleh pihak ketiga independen. Data pemain disimpan sesuai standar internasional dan tidak dibagikan kepada pihak ketiga tanpa persetujuan."
  },
  {
    question: "Apa saja tools untuk bermain bertanggung jawab yang tersedia?",
    answer: "Talos168 menyediakan berbagai tools seperti: batas deposit harian/mingguan, session time limit, self-exclusion, reality check, dan akses ke organisasi bantuan gaming addiction. Semua tools ini dapat diakses melalui pengaturan akun."
  },
  {
    question: "Bagaimana cara memverifikasi keaslian data RTP?",
    answer: "Semua data RTP kami diaudit oleh lembaga testing independen seperti eCOGRA dan iTech Labs. Sertifikat audit dipublikasikan dan dapat diakses publik. Kami juga menyediakan link ke laporan audit untuk setiap provider game."
  },
  {
    question: "Apa yang harus dilakukan jika merasa kecanduan gaming?",
    answer: "Segera gunakan fitur self-exclusion dan hubungi organisasi bantuan seperti BeGambleAware atau konselor profesional. Talos168 menyediakan link ke berbagai resources dan support group. Ingat, mencari bantuan adalah tanda kekuatan, bukan kelemahan."
  },
  {
    question: "Mengapa RTP berbeda-beda antar provider?",
    answer: "Setiap provider memiliki model bisnis dan target margin yang berbeda. RTP juga dipengaruhi oleh jenis permainan, volatilitas, dan fitur bonus. Provider dengan RTP lebih tinggi biasanya mengkompensasi dengan volatilitas yang berbeda atau feature lain."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-muted/30 border-t border-border relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-16">
          {/* Section header */}
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-70">
              [ FREQUENTLY ASKED QUESTIONS ]
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground mb-8" data-testid="text-faq-title">
              Pertanyaan yang
              <span className="text-muted-foreground block">sering ditanyakan</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden" data-testid={`faq-item-${index}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left bg-muted/10 hover:bg-muted/20 transition-colors flex justify-between items-center"
                  data-testid={`button-faq-${index}`}
                >
                  <h3 className="text-lg font-light text-foreground pr-4" data-testid={`text-faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-muted-foreground transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional resources */}
          <div className="bg-muted/10 border border-border rounded-lg p-8 space-y-4">
            <h4 className="text-lg font-light text-foreground" data-testid="text-additional-resources-title">
              Resources Tambahan
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Untuk pertanyaan lain, hubungi support 24/7 atau kunjungi pusat bantuan kami.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors text-sm underline" data-testid="link-support">
                  Support Center
                </a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors text-sm underline" data-testid="link-live-chat">
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}