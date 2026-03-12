import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDown, FiMail, FiCode, FiGithub, FiLinkedin, FiFileText, FiChevronRight } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
    onPrintCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
    const { t, i18n } = useTranslation();
    const { scrollY } = useScroll();
    const isRtl = i18n.language === 'ar';

    // حركة بارالاكس ناعمة جداً
    const yRange = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useSpring(yRange, { stiffness: 100, damping: 30 });

    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm" },
        { icon: <FiLinkedin />, href: "#" }
    ], []);

    return (
        <header className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* 1. نظام الإضاءة السينمائي (Cinematic Background) */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[70%] bg-cyan-500/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[70%] bg-blue-600/5 blur-[150px] rounded-full" />
                <div className="hero-grid-overlay" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center">

                    {/* 2. Badge علوي أنيق */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative h-2 w-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                            {t('AVAILABLE_FOR_PROJECTS')}
                        </span>
                    </motion.div>

                    {/* 3. كتلة الاسم بتصميم Typography عصري */}
                    <div className="relative mb-12 text-center">
                        <motion.h1
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1 }}
                            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase"
                        >
                            <span className="block text-white opacity-90">{t('HERO_NAME_FIRST')}</span>
                            <span className="hero-outline-text block mt-2">{t('HERO_NAME_LAST')}</span>
                        </motion.h1>

                        {/* وصف وظيفي عائم */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-4 md:-right-12 top-1/2 -rotate-90 hidden md:block"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/50">
                                {t('HERO_SUBTITLE')}
                            </span>
                        </motion.div>
                    </div>

                    {/* 4. الوصف والأزرار */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-10 max-w-2xl text-center"
                    >
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                            {t('HERO_DESC')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('EXPLORE_WORK')} <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>

                            <motion.button
                                onClick={onPrintCV}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 border border-white/10 hover:bg-white/5 rounded-full font-black text-xs uppercase tracking-widest transition-all text-white flex items-center gap-2"
                            >
                                <FiFileText /> {t('RESUME')}
                            </motion.button>
                        </div>

                        {/* روابط السوشيال ميديا بتصميم مدمج */}
                        <div className="flex items-center gap-8 pt-4">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    whileHover={{ y: -3, color: '#22d3ee' }}
                                    className="text-slate-500 text-xl transition-colors"
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 5. مؤشر التمرير العمودي (Vertical Scroll) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-600 [writing-mode:vertical-lr]">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"
                />
            </div>
        </header>
    );
};