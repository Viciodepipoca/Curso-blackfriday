import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import type { MouseEvent } from 'react';

export function HeroSection() {
  const handleScrollToOffer = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#oferta');
    }
  };

  return (
    <section className="hero-gradient pt-8 md:pt-12 pb-20 md:pb-28 px-4 md:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <img 
          src="https://lh3.googleusercontent.com/d/1Hn2s-4QKnsXKeKgurl1YfUgYR8EFU5c4" 
          alt="Vício de Pipoca" 
          className="h-24 sm:h-24 md:h-28 w-auto object-contain mb-4 md:mb-6"
        />

        {/* Black Friday Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 shadow-xl border border-brand-yellow/40">
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping shrink-0" />
          <span className="text-brand-yellow">BLACK FRIDAY</span>
          <span className="text-gray-300 text-[11px]">• OFERTA EXCLUSIVA 🍿</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-[46px] font-display font-extrabold leading-[1.15] mb-4 md:mb-6 tracking-tight max-w-4xl">
          Aprenda a estratégia que me fez faturar mais de <span className="text-brand-pink">R$70 mil</span> no meu primeiro mês de delivery de Pipoca Gourmet.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl mb-8 md:mb-10">
          Você vai aprender a montar seu próprio delivery de pipoca gourmet, mesmo começando do zero, com o método usado para construir uma operação que faturou mais de R$ 70 mil no primeiro mês.
        </p>
        
        <div className="flex flex-col items-center gap-3 w-full max-w-md mx-auto mb-8 md:mb-12">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffer}
              className="block w-full text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-black py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all hover:scale-105 active:scale-95 animate-pulse-slow cta-glow cursor-pointer shadow-[0_0_25px_rgba(233,30,99,0.4)]"
            >
                QUERO COMEÇAR NA BLACK FRIDAY
            </a>
            <p className="text-xs sm:text-sm text-gray-700 font-medium flex items-center justify-center gap-2 mt-1">
                <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" /> Compra 100% Segura • Acesso Imediato
            </p>
        </div>
      </div>
      
      {/* Infinite Carousel */}
      <div className="absolute bottom-0 left-0 right-0 py-4 overflow-hidden flex whitespace-nowrap z-10">
        <motion.div
          className="flex gap-8 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, 
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 text-brand-pink font-display font-bold text-xl md:text-2xl uppercase tracking-widest opacity-90">
              <span>VICIO DE PIPOCA</span>
              <span className="bg-brand-dark text-brand-yellow px-2.5 py-0.5 rounded text-xs md:text-sm font-black tracking-normal">BLACK FRIDAY</span>
              <span className="w-2 h-2 rounded-full bg-brand-pink opacity-50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
