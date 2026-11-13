import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ModulesSection } from './components/ModulesSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const scrollAnimationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.75, ease: [0.215, 0.610, 0.355, 1.000] } // smooth outCubic easing
};

export default function App() {
  const handleScrollToOffer = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#oferta');
    }
  };

  return (
    <main className="min-h-screen bg-brand-cream overflow-x-hidden">
      {/* Black Friday Fixed Urgency Banner - Acompanha a rolagem da tela com itens nas extremidades */}
      <aside aria-label="Aviso de Black Friday" className="fixed top-0 inset-x-0 w-full bg-black/95 text-white py-2.5 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 text-xs sm:text-xs md:text-sm font-semibold tracking-wide flex items-center justify-between border-b border-brand-yellow/30 z-50 shadow-xl backdrop-blur-md">
        <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-dark px-2.5 py-1 md:px-3 md:py-1 rounded-full font-black text-[10px] sm:text-[11px] md:text-xs uppercase tracking-wider shrink-0 shadow-sm">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-pink animate-ping shrink-0" />
          BLACK FRIDAY
        </span>

        <span className="text-gray-200 hidden sm:inline text-center mx-auto truncate px-3 font-medium">
          Maior condição do ano com mais de R$ 350 de economia!
        </span>

        <a 
          href="#oferta" 
          onClick={handleScrollToOffer}
          className="bg-brand-pink hover:bg-brand-pink-dark text-white font-black px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-xs md:text-sm shadow-[0_0_14px_rgba(233,30,99,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1"
        >
          <span>Aproveitar</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </aside>

      {/* Espaçador para compensar o banner fixo no topo */}
      <div className="h-11 sm:h-11 md:h-12" aria-hidden="true" />

      {/* Hero section animates immediately on mount */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <AboutSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <BenefitsSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <ModulesSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <BonusesSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <TestimonialsSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <PricingSection />
      </motion.div>

      <motion.div {...scrollAnimationProps}>
        <FAQSection />
      </motion.div>

      <Footer />
    </main>
  );
}

