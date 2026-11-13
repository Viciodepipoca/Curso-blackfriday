import type { MouseEvent } from 'react';
import { CheckCircle2, Star, Video, Users, BookOpen, Contact, Megaphone, TrendingUp, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export function BenefitsSection() {
  const handleScrollToOffer = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#oferta');
    }
  };

  const benefits = [
    { icon: Video, text: "Curso completo em vídeo, do zero ao primeiro delivery." },
    { icon: Users, text: "Comunidade VIP no WhatsApp para networking, suporte e troca de experiências." },
    { icon: RefreshCw, text: "Curso vivo: novas aulas serão adicionadas sempre que surgirem dúvidas frequentes." },
    { icon: Contact, text: "Como encontrar os melhores fornecedores." },
    { icon: BookOpen, text: "Contato da gráfica que produz os rótulos da marca com preços exclusivos." },
    { icon: Star, text: "Receitas e recheios mais vendidos da operação." },
    { icon: Megaphone, text: "Estratégias de divulgação para vender todos os finais de semana." },
    { icon: Truck, text: "Passo a passo para estruturar um delivery de pipoca." },
    { icon: TrendingUp, text: "Atualizações constantes conforme a operação evolui." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0E0E10] text-white border-y border-neutral-800/80 relative overflow-hidden">
      {/* Decorative Black Friday ambient glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 text-brand-yellow px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-4 border border-brand-yellow/30 shadow-[0_0_15px_rgba(247,201,72,0.15)]">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
            <span>✦ PACOTE EXCLUSIVO BLACK FRIDAY ✦</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black mb-4 md:mb-6 text-white tracking-tight">
            Tudo o que você leva na <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-200 to-brand-pink underline decoration-brand-pink decoration-4 underline-offset-8">Black Friday</span> do Método VP:
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-3xl mx-auto font-medium">
            Agora, na nossa maior condição do ano: produção, fornecedores, marketing, vendas, delivery e gestão para você faturar alto com o seu próprio negócio.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 w-full hidden lg:block">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] relative rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-neutral-700 bg-black">
              <img 
                src="https://lh3.googleusercontent.com/d/19SHtg-dmmqZ7uHf9X3yCc9AMXbJcPa47" 
                alt="Pipocas Vício de Pipoca" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-brand-yellow/30 z-10 flex items-center gap-2">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Hn2s-4QKnsXKeKgurl1YfUgYR8EFU5c4" 
                  alt="Vício de Pipoca Logo" 
                  className="h-8 md:h-10 w-auto object-contain drop-shadow"
                />
                <span className="bg-brand-pink text-white font-black text-[10px] md:text-xs px-2 py-0.5 rounded-md uppercase tracking-wider">
                  BLACK FRIDAY
                </span>
              </div>
              <div className="absolute bottom-4 inset-x-4 bg-black/85 backdrop-blur-md py-2 px-3 rounded-xl border border-white/10 text-center">
                <p className="text-[11px] md:text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  Curso Completo + Acesso aos Bônus
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-[1.5] w-full">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {benefits.map((item, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden bg-gradient-to-br from-[#18181B] via-[#141416] to-[#0F0F11] p-3.5 sm:p-5 md:p-6 rounded-2xl border border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-3 md:gap-4 hover:-translate-y-1 hover:border-brand-pink/50 hover:shadow-[0_10px_30px_rgba(233,30,99,0.25)] transition-all duration-300 group"
                >
                  {/* Glossy top-left highlight */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-md pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="bg-gradient-to-br from-brand-pink/20 via-brand-pink/10 to-brand-yellow/20 p-2.5 md:p-3.5 rounded-xl md:rounded-2xl shrink-0 shadow-[0_0_15px_rgba(233,30,99,0.2)] border border-brand-pink/30 relative z-10 group-hover:scale-110 group-hover:border-brand-yellow/50 transition-all duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow drop-shadow-[0_1px_4px_rgba(247,201,72,0.4)]" />
                  </div>
                  
                  <p className="font-semibold text-neutral-100 text-xs sm:text-sm md:text-base leading-snug md:leading-relaxed relative z-10">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão de chamada para ação direcionando para a oferta */}
        <div className="mt-10 md:mt-16 text-center flex flex-col items-center gap-3 max-w-md mx-auto">
          <a
            href="#oferta"
            onClick={handleScrollToOffer}
            className="block w-full text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-black py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all hover:scale-105 active:scale-95 animate-pulse-slow cta-glow cursor-pointer shadow-[0_0_30px_rgba(233,30,99,0.5)]"
          >
            QUERO GARANTIR A OFERTA DE BLACK FRIDAY
          </a>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" /> Desconto especial de Black Friday • Acesso Imediato
          </p>
        </div>
      </div>
    </section>
  );
}
