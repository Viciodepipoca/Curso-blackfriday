import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScrollToOffer = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.getElementById('oferta');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', '#oferta');
        }
    };

    const prints = [
        "1k4qiLc4Fx5SBYhNUYVhzi1SL3F66XWf1",
        "1L-gBfuF0_PJ2RHnGWflrsopfccWtHWvS",
        "1uhjDzf6u2vXP-7MWsaQ2mYfOim9IGehG",
        "1Vz4Cpmaxz4kM3yPfBYiRCA_Ca3YpQwC6",
        "1KFmZAeb-S8exXfRhTaXChHg7EklfDm4J",
        "15EKZUMnTPSMXHZYVx_HK0OZDqNwVoJlB",
        "1Xdk4wjlQgJn4-BW-5YJYcfvyHx-OV-R8",
        "1coT8Z514QzvH8vCwv1qj0osAe8CtlT1W",
        "1PtoATGXk5eJBAb-qsdomSICb1Ssh96eJ",
        "1YtADM5NAXV1yEbzlY59uQL7PACKp3fsS"
    ];

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -240 : 240;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-brand-cream">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-display font-bold mb-4">O que nossas alunas dizem</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Resultados reais de quem já aplicou o Método Vício de Pipoca e transformou a própria realidade.</p>
                </div>
                
                {/* Mobile Carousel (hidden on sm and up) */}
                <div className="block sm:hidden relative px-2">
                    <button 
                        onClick={() => handleScroll('left')}
                        aria-label="Depoimento Anterior"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm text-brand-pink p-2 rounded-full shadow-lg border border-brand-pink/20 hover:bg-white active:scale-95 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div 
                        ref={scrollRef} 
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 pt-2 px-8 -mx-4 scrollbar-none scroll-smooth"
                    >
                        {prints.map((id) => (
                            <div key={id} className="w-[220px] aspect-[9/16] shrink-0 snap-center relative bg-white rounded-2xl shadow-md border border-brand-yellow/20 overflow-hidden group">
                                {/* Privacy Blur Overlay */}
                                <div className="absolute top-0 inset-x-0 h-12 bg-white/40 backdrop-blur-md z-10 pointer-events-none border-b border-white/50 flex flex-col items-center justify-center">
                                    <span className="text-[9px] font-bold text-gray-800/60 uppercase tracking-widest">Informações Ocultadas</span>
                                </div>
                                
                                <img 
                                    src={`https://lh3.googleusercontent.com/d/${id}`} 
                                    alt="Depoimento de Aluna" 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => handleScroll('right')}
                        aria-label="Próximo Depoimento"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm text-brand-pink p-2 rounded-full shadow-lg border border-brand-pink/20 hover:bg-white active:scale-95 transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <p className="text-center text-xs text-gray-400 font-medium mt-1 animate-pulse">
                        ← Deslize ou use as setas para ver mais →
                    </p>
                </div>

                {/* Desktop Grid Layout (hidden on mobile, visible on sm and up) */}
                <div className="hidden sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {prints.map((id) => (
                        <div key={id} className="relative aspect-[9/16] break-inside-avoid bg-white rounded-3xl shadow-lg shadow-brand-yellow/5 border border-brand-yellow/20 overflow-hidden group">
                            {/* Privacy Blur Overlay - Cobre o topo do print para omitir nomes e números (LGPD) */}
                            <div className="absolute top-0 inset-x-0 h-16 sm:h-20 bg-white/40 backdrop-blur-md z-10 pointer-events-none border-b border-white/50 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-gray-800/60 uppercase tracking-widest">Informações Ocultadas</span>
                            </div>
                            
                            <img 
                                src={`https://lh3.googleusercontent.com/d/${id}`} 
                                alt="Depoimento de Aluna" 
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Botão de chamada para ação direcionando para a oferta */}
                <div className="mt-10 md:mt-16 text-center flex flex-col items-center gap-3 max-w-md mx-auto">
                    <a
                        href="#oferta"
                        onClick={handleScrollToOffer}
                        className="block w-full text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all hover:scale-105 active:scale-95 animate-pulse-slow cta-glow cursor-pointer shadow-lg"
                    >
                        QUERO TER ESSES RESULTADOS
                    </a>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" /> Faça como centenas de alunas de sucesso
                    </p>
                </div>
            </div>
        </section>
    );
}
