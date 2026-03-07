import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';

/**
 * Hero Component - Optimized for Light & Dark Mode
 * يضمن ظهور الأسماء بوضوح تام في جميع الأوضاع اللغوية والبصرية.
 */
export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    // تأثير بارالاكس ناعم للخلفية
    const bgY = useTransform(scrollY, [0, 500], [0, 50]);

    return (
        <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 max-w-7xl mx-auto overflow-hidden bg-transparent">

            {/* Ambient Background Lights */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] bg-blue-600/5 blur-[120px] rounded-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full flex flex-col items-center text-center space-y-12"
            >
                {/* Profile Identity Section */}
                <div className="relative group">
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-all duration-500">
                        <img
                            src="/me.jpg"
                            alt="Rabie Zakaria Djebbar"
                            className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.classList.add('bg-gradient-to-br', 'from-slate-100', 'to-slate-200', 'dark:from-slate-800', 'dark:to-slate-900');
                            }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-slate-300 dark:text-slate-800 uppercase tracking-tighter opacity-20">
                            RZ
                        </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-white/5">
                        <FiCode className="text-purple-600 dark:text-purple-400" size={18} />
                    </div>
                </div>

                {/* Typography & Names Section */}
                <div className="space-y-8 max-w-4xl px-4">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 backdrop-blur-md">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                            {t('HERO_SUBTITLE')}
                        </span>
                    </div>

                    {/* الحل النهائي: text-slate-900 يضمن الظهور في وضع النهار، dark:text-white يضمن الظهور في وضع الليل */}
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] uppercase flex flex-wrap justify-center gap-x-4">
                        <span className="transition-colors duration-500">{t('HERO_NAME_FIRST')}</span>
                        <span className="text-slate-400 dark:text-gray-700 font-light italic transition-colors duration-500">
                            {t('HERO_NAME_LAST')}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-slate-500 dark:text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                        {t('HERO_DESC')}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-black text-[10px] tracking-widest transition-all hover:bg-purple-600 dark:hover:bg-purple-600 dark:hover:text-white shadow-xl active:scale-95"
                    >
                        {t('view_projects')} <FiArrowUpRight size={14} />
                    </a>

                    <div className="flex gap-4">
                        {[
                            { icon: <FiMail size={18} />, href: "mailto:djabbarzakaria09@gmail.com", label: "Email" },
                            {
                                icon: <FiGithub size={18} />, href: "https://github.com/djabbarzakaria09-lgtm", label: "GitHub"
                            },
                            { icon: <FiLinkedin size={18} />, href: "#", label: "LinkedIn" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all shadow-sm active:scale-90"
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Static Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10">
                <div className="w-[1px] h-10 bg-slate-900 dark:bg-white" />
            </div>
        </header>
    );
};