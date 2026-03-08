import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

export const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { scrollY } = useScroll();
    const isRtl = i18n.language === 'ar';

    // تحسين حركة البارالاكس لتكون أكثر سلاسة باستخدام useSpring
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
        <header className="hero-container relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">

            {/* 1. نظام الإضاءة المحيطة المطور (Meteor Background) */}
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
                {/* 2. الإطار الشخصي (Avatar) بتصميم هندسي */}
                <div className="relative mb-10 group hero-avatar-frame">
                    <motion.div
                        whileHover={{ rotate: isRtl ? -3 : 3, scale: 1.02 }}
                        className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-[3rem] overflow-hidden border border-white/10 p-1.5 bg-slate-900/50 backdrop-blur-3xl shadow-2xl transition-all duration-500"
                    >
                        <div className="w-full h-full rounded-[2.6rem] overflow-hidden">
                            <img
                                src="/me.jpg"
                                alt="Zakaria Djebbar"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                        </div>
                    </motion.div>

                    {/* Badge الحالة الذكي */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="absolute -bottom-2 -right-2 z-20 flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-200 dark:border-white/5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                            Available for hire
                        </span>
                    </motion.div>
                </div>

                {/* 3. العناوين والنصوص (Adaptive Typography) */}
                <div className="space-y-6 max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-2xl"
                    >
                        <FiCode className="text-cyan-400" size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                            {t('HERO_SUBTITLE')}
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
                        <span className="block text-slate-900 dark:text-white transition-colors duration-500">
                            {t('HERO_NAME_FIRST')}
                        </span>
                        <span className="hero-name-gradient block italic font-light pb-2">
                            {t('HERO_NAME_LAST')}
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto text-slate-500 dark:text-gray-400 text-sm md:text-lg leading-relaxed font-medium">
                        {t('HERO_DESC')}
                    </p>
                </div>

                {/* 4. أزرار الأكشن (CTAs) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 w-full px-4">
                    <motion.a
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
                        whileTap={{ scale: 0.98 }}
                        href="#projects"
                        className="w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-black px-12 py-5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all"
                    >
                        {t('view_projects')} <FiArrowUpRight size={20} />
                    </motion.a>

                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: "rgba(34,211,238,0.05)", borderColor: "rgba(34,211,238,0.2)" }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-all backdrop-blur-md"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 5. مؤشر التمرير */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
                <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-500 rotate-90 translate-y-8">Scroll</span>
            </div>
        </header>
    );
};