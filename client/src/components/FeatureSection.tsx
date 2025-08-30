import { FileText, CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "RTP Real-time",
    description: "Data RTP yang diperbarui secara real-time untuk semua game."
  },
  {
    icon: CheckCircle,
    title: "Verified Games",
    description: "Semua permainan telah diverifikasi dan diaudit secara independen."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Dukungan pelanggan 24/7 untuk membantu semua kebutuhan Anda."
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 bg-zinc-950 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white" data-testid="text-features-title">
            Transparansi RTP
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto" data-testid="text-features-description">
            Informasi RTP real-time untuk semua permainan dengan data yang akurat dan transparan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-zinc-400" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
