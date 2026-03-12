import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTerminal } from 'react-icons/fi';

export const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative mt-32 pb-12 px-6 bg-transparent border-t border-slate-200 dark:border-white/5 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Upper Section: CTA */}
                <div className={`flex flex-col md:flex-row justify-between items-center py-20 gap-10 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                    <div className={isRtl ? 'text-right' : 'text-left'}>
                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4"
                        >
                            {isRtl ? "لنتعاون في مشروعك القادم" : "PARTNER FOR EXCELLENCE."}
                        </motion.h3>
                        <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10B981]" />
                            <p className="text-slate-500 dark:text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                                {isRtl ? "متاح للمناقشات التقنية الرسمية" : "AVAILABLE FOR PROFESSIONAL INQUIRIES"}
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="p-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl shadow-xl transition-all border border-white/10"
                    >
                        <FiArrowUp size={24} />
                    </motion.button>
                </div>

                {/* Main Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16 border-t border-slate-200 dark:border-white/5">

                    {/* Brand Identity */}
                    <div className={`flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                        <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase">
                            <FiTerminal className="text-cyan-500" />
                            ZAKARIA<span className="text-slate-400 dark:text-gray-600 font-light">.DJEBBAR</span>
                        </div>
                        <p className={`text-slate-500 dark:text-gray-500 text-sm leading-relaxed max-w-xs font-medium ${isRtl ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-cyan-500/20`}>
                            {isRtl
                                ? "تقني سامٍ متخصص في تطوير البرمجيات، أركز على تقديم حلول تقنية متكاملة تتسم بالدقة والأداء العالي."
                                : "Higher Technician specialized in software development, delivering robust technical solutions with precision and high performance."}
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-500 dark:text-gray-500 dark:hover:text-white transition-all"
                                >
                                    {t(item) || item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Socials */}
                    <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'} justify-center gap-6`}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-gray-600">Global Connectivity</p>
                        <div className="flex gap-3">
                            {[
                                {
                                    icon: <FiGithub />, link: "https://github.com/djabbarzakaria09-lgtm"
                                },
                                { icon: <FiLinkedin />, link: "#" },
                                { icon: <FiMail />, link: "mailto:djabbarzakaria09@gmail.com" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legal & Status Footer */}
                <div className={`py-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                    <div className="text-[10px] font-bold tracking-[0.3em] text-slate-400 dark:text-gray-600 uppercase">
                        © 2026 ZAKARIA DJEBBAR • ALGIERS
                    </div>

                    <div className="flex items-center gap-6 text-[9px] font-bold tracking-[0.4em] text-slate-400 dark:text-gray-700 uppercase">
                        <span>Full-Stack Engineering</span>
                        <div className="w-1.5 h-1.5 bg-cyan-500/20 rounded-full" />
                        <span>Apprentice @ ANEP Messagerie</span>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Signature */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-24 bg-gradient-to-t from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
        </footer>
    );
};