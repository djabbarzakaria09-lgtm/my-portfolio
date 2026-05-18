import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTerminal } from 'react-icons/fi';

export const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

    const socials = [
        { icon: <FiGithub />, link: 'https://github.com/djabbarzakaria09-lgtm', label: 'GitHub' },
        { icon: <FiLinkedin />, link: '#', label: 'LinkedIn' },
        { icon: <FiMail />, link: 'mailto:djabbarzakaria09@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative mt-16 md:mt-32 pb-10 px-4 sm:px-6
            bg-transparent border-t border-slate-200 dark:border-white/5 overflow-hidden">

            {/* شبكة الخلفية */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0
                    [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]
                    [background-size:60px_60px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── CTA العلوي ── */}
                <div className={`flex flex-col sm:flex-row justify-between items-center
                    py-12 md:py-20 gap-6 md:gap-10 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>

                    <div className={`${isRtl ? 'text-right' : 'text-left'} flex-1`}>
                        <motion.h3
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                font-black uppercase tracking-tight
                                text-slate-900 dark:text-white mb-3"
                        >
                            {isRtl ? 'لنتعاون في مشروعك القادم' : 'PARTNER FOR EXCELLENCE.'}
                        </motion.h3>
                        <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10B981] flex-shrink-0" />
                            <p className="text-slate-500 dark:text-gray-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                                {isRtl ? 'متاح للمناقشات التقنية الرسمية' : 'AVAILABLE FOR PROFESSIONAL INQUIRIES'}
                            </p>
                        </div>
                    </div>

                    {/* زر العودة للأعلى */}
                    <motion.button
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="p-4 md:p-5 bg-slate-900 dark:bg-white
                            text-white dark:text-black rounded-2xl shadow-xl
                            transition-all border border-white/10 flex-shrink-0"
                    >
                        <FiArrowUp size={20} />
                    </motion.button>
                </div>

                {/* ── الشبكة الرئيسية ── */}
                {/* هاتف: عمود واحد مرتب — تابلت+: 3 أعمدة */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                    gap-10 md:gap-16 py-10 md:py-16
                    border-t border-slate-200 dark:border-white/5">

                    {/* الهوية */}
                    <div className={`flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                        <div className="flex items-center gap-2 text-lg font-black tracking-tighter
                            text-slate-900 dark:text-white mb-4 uppercase">
                            <FiTerminal className="text-cyan-500" />
                            ZAKARIA<span className="text-slate-400 dark:text-gray-600 font-light">.DJEBBAR</span>
                        </div>
                        <p className={`text-slate-500 dark:text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs font-medium
                            ${isRtl ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-cyan-500/20`}>
                            {isRtl
                                ? 'تقني سامٍ متخصص في تطوير البرمجيات، أركز على تقديم حلول تقنية متكاملة تتسم بالدقة والأداء العالي.'
                                : 'Higher Technician specialized in software development, delivering robust technical solutions with precision and high performance.'}
                        </p>
                    </div>

                    {/* روابط التنقل — مخفية في الهاتف الصغير جداً، ظاهرة من sm+ */}
                    <div className="hidden sm:flex flex-col items-center justify-center">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-[11px] font-bold uppercase tracking-widest
                                        text-slate-500 dark:text-gray-500
                                        hover:text-cyan-500 dark:hover:text-white transition-all"
                                >
                                    {t(item) || item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* روابط التواصل */}
                    <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'} justify-center gap-4`}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-gray-600">
                            Global Connectivity
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 md:p-4
                                        bg-slate-50 dark:bg-white/[0.03]
                                        border border-slate-200 dark:border-white/10 rounded-xl
                                        text-slate-600 dark:text-gray-400
                                        hover:text-cyan-500 dark:hover:text-white
                                        hover:border-cyan-500/30 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── الشريط السفلي ── */}
                <div className={`py-8 border-t border-slate-200 dark:border-white/5
                    flex flex-col sm:flex-row justify-between items-center gap-4
                    ${isRtl ? 'sm:flex-row-reverse' : ''}`}>

                    <div className="text-[10px] font-bold tracking-[0.25em] text-slate-400 dark:text-gray-600 uppercase text-center sm:text-left">
                        © 2026 ZAKARIA DJEBBAR • ALGIERS
                    </div>

                    <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.3em]
                        text-slate-400 dark:text-gray-700 uppercase text-center">
                        <span>Full-Stack Engineering</span>
                        <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                        <span className="hidden sm:inline">Apprentice @ ANEP Messagerie</span>
                    </div>
                </div>
            </div>

            {/* توهج سفلي */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                w-full max-w-[600px] h-20 bg-gradient-to-t from-cyan-500/5 to-transparent
                blur-3xl pointer-events-none" />
        </footer>
    );
};
