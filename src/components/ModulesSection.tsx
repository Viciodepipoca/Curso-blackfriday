import { useEffect, useRef } from 'react';
import { Crown, ChefHat, Truck, Instagram, HelpCircle } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "Pense Como Dona",
    icon: Crown,
    description: "Aprenda a mentalidade empreendedora para ter um negócio de sucesso."
  },
  {
    id: 2,
    title: "Segredos da Produção",
    icon: ChefHat,
    description: "Técnicas secretas para escalar sua produção mais rápido."
  },
  {
    id: 3,
    title: "Como Iniciar um Delivery, Ifood e Fazer Feiras",
    icon: Truck,
    description: "Todo o passo a passo, para iniciar suas vendas seja por ifood, delivery ou em eventos públicos."
  },
  {
    id: 4,
    title: "Como Vender na Rede Social?",
    icon: Instagram,
    description: "As técnicas que utilizo, para criar um conteúdo na rede social, que gera vendas."
  },
  {
    id: 5,
    title: "Dúvidas Frequentes",
    icon: HelpCircle,
    description: "Nesse módulo, irei postar uma nova aula semanalmente, respondendo as dúvidas de vocês."
  }
];

export function ModulesSection() {
  const repeatedModules = [...modules, ...modules, ...modules];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isInteracting = false;
    let pauseTimeout: NodeJS.Timeout;

    const startInteraction = () => {
      isInteracting = true;
      clearTimeout(pauseTimeout);
    };

    const stopInteraction = () => {
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2000);
    };

    const wrapScrollIfNeeded = () => {
      const oneThirdWidth = scrollContainer.scrollWidth / 3;
      if (oneThirdWidth > 0) {
        if (scrollContainer.scrollLeft >= oneThirdWidth * 2) {
          scrollContainer.scrollLeft -= oneThirdWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft += oneThirdWidth;
        }
      }
    };

    const step = () => {
      if (scrollContainer && !isInteracting) {
        scrollContainer.scrollLeft += 0.8;
        wrapScrollIfNeeded();
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const onScroll = () => {
      wrapScrollIfNeeded();
    };

    scrollContainer.addEventListener('pointerdown', startInteraction);
    scrollContainer.addEventListener('pointerup', stopInteraction);
    scrollContainer.addEventListener('pointercancel', stopInteraction);
    scrollContainer.addEventListener('touchstart', startInteraction, { passive: true });
    scrollContainer.addEventListener('touchend', stopInteraction);
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(pauseTimeout);
      scrollContainer.removeEventListener('pointerdown', startInteraction);
      scrollContainer.removeEventListener('pointerup', stopInteraction);
      scrollContainer.removeEventListener('pointercancel', stopInteraction);
      scrollContainer.removeEventListener('touchstart', startInteraction);
      scrollContainer.removeEventListener('touchend', stopInteraction);
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="py-14 md:py-24 bg-brand-dark text-white overflow-hidden flex flex-col items-center">
      <div className="text-center mb-8 md:mb-16 px-4 md:px-6 z-10 max-w-4xl">
        <h2 className="text-2xl md:text-5xl font-display font-bold mb-3 md:mb-6">A estrutura completa do curso</h2>
        <p className="text-xs sm:text-sm md:text-lg text-gray-400">5 módulos práticos em vídeo, estruturados do zero ao seu primeiro delivery lucrativo.</p>
      </div>

      <div className="w-full relative pb-4">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-3.5 md:gap-6 overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing px-4 md:px-12 py-3 md:py-4 select-none"
        >
          {repeatedModules.map((mod, index) => (
            <div 
              key={index} 
              className="w-[250px] sm:w-[280px] md:w-[320px] min-h-[220px] md:min-h-[270px] bg-brand-dark/50 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shrink-0 flex flex-col justify-between hover:border-brand-yellow/50 transition-colors shadow-lg"
            >
              <div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-yellow/20 flex items-center justify-center rounded-xl md:rounded-2xl mb-3 md:mb-6">
                  <mod.icon className="w-5 h-5 md:w-7 md:h-7 text-brand-yellow" />
                </div>
                <div className="text-brand-yellow font-bold text-[11px] md:text-sm tracking-wider mb-1 md:mb-2 uppercase">Módulo {mod.id}</div>
                <h3 className="text-base md:text-xl font-display font-bold mb-2 md:mb-3 leading-snug">{mod.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1 font-medium">
          <span>👈</span> Arraste para navegar entre os módulos <span>👉</span>
        </p>
      </div>
    </section>
  );
}

