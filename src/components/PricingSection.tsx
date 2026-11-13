import { ShieldCheck, Check } from 'lucide-react';

export function PricingSection() {
    return (
        <section id="oferta" className="scroll-mt-4 md:scroll-mt-8 py-10 md:py-24 px-3 sm:px-4 md:px-6 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent"></div>
            
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[18px] sm:text-[22px] md:text-[29px] font-display font-bold mb-6 md:mb-12 max-w-2xl mx-auto leading-snug md:leading-relaxed text-[#f5efef]">
                    Tenha acesso a todo o <span className="text-[#f5efef] font-extrabold underline decoration-brand-yellow decoration-2 underline-offset-4">método, bônus e comunidade</span> pelo <span className="text-brand-yellow font-extrabold">maior desconto do ano na Black Friday</span>.
                </h2>
                
                <div id="card-oferta" className="scroll-mt-8 md:scroll-mt-16 bg-white text-brand-dark rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 shadow-2xl relative max-w-lg mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-brand-yellow border-2 border-brand-yellow font-black px-5 md:px-8 py-1.5 md:py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(247,201,72,0.4)] whitespace-nowrap flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
                        <span>🖤 OFERTA BLACK FRIDAY 🖤</span>
                    </div>
                    
                    <h3 className="text-xl md:text-3xl font-display font-bold mb-1 md:mb-2 mt-3 md:mt-6">Curso Completo<br/>Vício de Pipoca</h3>
                    <p className="text-gray-500 mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Acesso imediato com preço especial de Black Friday</p>
                    
                    <div className="inline-block bg-brand-pink text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-sm">
                        🔥 ECONOMIA DE R$ 350 NA BLACK FRIDAY
                    </div>

                    <div className="mb-4 md:mb-6 flex flex-col items-center justify-center">
                        <div className="text-gray-400 font-medium text-sm md:text-lg line-through mb-0.5 md:mb-1">
                            De R$ 497,00
                        </div>
                        <div className="text-xs md:text-base font-bold text-gray-500 uppercase tracking-widest mb-0.5 md:mb-1">
                            Por apenas 12x de
                        </div>
                        <div className="flex items-baseline justify-center text-brand-pink mb-2 md:mb-3">
                            <span className="text-xl md:text-3xl font-bold mr-1">R$</span>
                            <span className="text-4xl sm:text-5xl md:text-[60px] font-display font-black leading-none tracking-tight">15,20</span>
                        </div>
                        <div className="text-xs sm:text-base md:text-lg font-bold text-gray-700 bg-brand-pink/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-brand-pink/20">
                            ou <span className="text-brand-pink font-extrabold">R$ 147,00</span> à vista
                        </div>
                    </div>
                    
                    <div className="space-y-2.5 md:space-y-4 mb-6 md:mb-10 text-left bg-gray-50 p-3.5 sm:p-6 rounded-xl md:rounded-2xl">
                        {[
                            "Acesso imediato ao curso completo",
                            "Todos os bônus exclusivos de Black Friday",
                            "Suporte na Comunidade VIP de Alunas",
                            "Acesso às atualizações futuras do Curso Vivo"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 md:gap-3">
                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" strokeWidth={3} />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                    
                    <a href="https://chk.eduzz.com/2ur6fzic" className="block w-full text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-black py-4 md:py-6 px-4 md:px-8 rounded-xl md:rounded-2xl text-base sm:text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 cta-glow shadow-[0_0_30px_rgba(233,30,99,0.5)]">
                        SIM! QUERO GARANTIR MINHA VAGA NA BLACK FRIDAY
                    </a>
                    
                    <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-green-500" /> Plataforma 100% segura
                    </p>
                </div>
                
                <div className="mt-6 md:mt-12 bg-white/5 border border-white/10 rounded-xl md:rounded-3xl p-3.5 sm:p-6 md:p-8 flex flex-row items-start md:items-center gap-3 sm:gap-5 md:gap-6 max-w-2xl mx-auto text-left">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 mt-0.5 md:mt-0">
                        <ShieldCheck className="w-full h-full text-brand-yellow drop-shadow-xl" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-sm sm:text-lg md:text-xl font-display font-bold mb-1 md:mb-2">Garantia Incondicional de 7 Dias</h4>
                        <p className="text-[11px] sm:text-sm text-gray-400 font-medium leading-relaxed">
                            Seu risco é zero. Você pode se inscrever agora, acessar todo o material e, se dentro de 7 dias você achar que o curso não é para você, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
