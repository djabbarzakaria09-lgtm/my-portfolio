import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiCode, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
    onPrintCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
    const { t, i18n } = useTranslation();
    const { scrollY } = useScroll();
    const isRtl = i18n.language === 'ar';

    const rawY = useTransform(scrollY, [0, 500], [0, 100]);
    const bgY = useSpring(rawY, { stiffness: 100, damping: 30 });
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const textScale = useTransform(scrollY, [0, 300], [1, 0.95]);

    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com", label: "Email" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm", label: "GitHub" },
        { icon: <FiLinkedin />, href: "#", label: "LinkedIn" }
    ], []);

    return (
        <header className="hero-container relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">

            {/* 1. نظام الإضاءة (Meteor Background) */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[60%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-[-15deg]" />
            </motion.div>

            <motion.div
                style={{ opacity: textOpacity, scale: textScale }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full flex flex-col items-center text-center"
            >
                {/* 2. الإطار الشخصي (Avatar) */}
                <div className="relative mb-6 sm:mb-10 group hero-avatar-frame">
                    <motion.div
                        whileHover={{ rotate: isRtl ? -3 : 3, scale: 1.02 }}
                        className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 p-1.5 bg-slate-900/50 backdrop-blur-3xl shadow-2xl transition-all duration-500 mx-auto"
                    >
                        <div className="w-full h-full rounded-[2.1rem] sm:rounded-[2.6rem] overflow-hidden">
                            <img
                                src="/me.jpg"
                                alt="Zakaria Djebbar"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="absolute -bottom-2 right-[-5px] sm:-right-2 z-20 flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl shadow-xl border border-slate-200 dark:border-white/5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                            Available for hire
                        </span>
                    </motion.div>
                </div>

                {/* 3. العناوين (Adaptive Typography) */}
                <div className="space-y-4 sm:space-y-6 max-w-5xl px-2 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-2xl"
                    >
                        <FiCode className="text-cyan-400" size={12} />
                        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-slate-500 dark:text-slate-400">
                            {t('HERO_SUBTITLE')}
                        </span>
                    </motion.div>

                    {/* تعديل الاسم ليكون متجاوباً تماماً */}
                    <h1 className={`flex flex-col items-center font-black tracking-tighter leading-tight sm:leading-[0.85] uppercase w-full ${isRtl ? 'font-arabic' : ''}`}>
                        <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-slate-900 dark:text-white transition-colors duration-500">
                            {t('HERO_NAME_FIRST')}
                        </span>
                        <span className="hero-name-gradient text-4xl sm:text-6xl md:text-8xl lg:text-9xl italic font-light pb-2">
                            {t('HERO_NAME_LAST')}
                        </span>
                    </h1>

                    <p className="max-w-md sm:max-w-xl mx-auto text-slate-500 dark:text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed font-medium px-4">
                        {t('HERO_DESC')}
                    </p>
                </div>

                {/* 4. أزرار الأكشن (CTAs) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 w-full px-4 sm:px-0">
                    <motion.a
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        href="#projects"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 sm:py-5 rounded-2xl font-black text-xs tracking-widest uppercase"
                    >
                        {t('view_projects')} <FiArrowUpRight size={18} />
                    </motion.a>

                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => { e.preventDefault(); if (onPrintCV) onPrintCV(); }}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 sm:py-5 rounded-2xl font-black text-xs tracking-widest uppercase"
                    >
                        View CV <FiFileText size={18} />
                    </motion.button>

                    <div className="flex items-center justify-center gap-3 mt-4 sm:mt-0">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: "rgba(34,211,238,0.05)" }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-all backdrop-blur-md"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* مؤشر التمرير - يختفي في الجوال تماماً لمنع الزحام */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
                <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-500 rotate-90 translate-y-8">Scroll</span>
            </div>
        </header>
    );
};