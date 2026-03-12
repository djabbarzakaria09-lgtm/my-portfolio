import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
    onPrintCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    const rawY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useSpring(rawY, { stiffness: 100, damping: 30 });

    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm" },
        { icon: <FiLinkedin />, href: "#" }
    ], []);

    // إنشاء نيازك/خلفية متحركة برمجياً
    const meteors = useMemo(() => Array.from({ length: 15 }), []);

    return (
        <header className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05020a]">

            {/* 1. نظام الخلفية المتحركة (Animated Vortex Background) */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                {/* الأضواء الجانبية المتوهجة */}
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[140px] rounded-full" />

                {/* النيازك المتحركة (Animated Meteors) */}
                {meteors.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[100px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * -100}%`,
                        }}
                        animate={{
                            y: ['0vh', '200vh'],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                    />
                ))}

                <div className="hero-grid-pattern opacity-30" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Badge علوي متوهج */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative h-2 w-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">
                            Available for hire
                        </span>
                    </motion.div>

                    {/* الاسم مع توهج أزرق */}
                    <div className="relative mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase"
                        >
                            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                {t('HERO_NAME_FIRST')}
                            </span>
                            <span className="hero-hollow-blue block mt-4">
                                {t('HERO_NAME_LAST')}
                            </span>
                        </motion.h1>
                    </div>

                    {/* الوصف */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-12 font-medium px-4">
                            {t('HERO_DESC')}
                        </p>

                        {/* الأزرار الملونة */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
                                className="w-full sm:w-auto px-12 py-5 bg-cyan-500 text-black rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                            >
                                {t('view_projects')} <FiArrowUpRight size={18} />
                            </motion.a>

                            <motion.button
                                onClick={onPrintCV}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                                className="w-full sm:w-auto px-12 py-5 border-2 border-cyan-500/30 text-cyan-400 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 backdrop-blur-md"
                            >
                                <FiFileText size={18} /> CV
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* أيقونات التواصل */}
                    <div className="flex items-center gap-10 mt-16">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                whileHover={{ y: -8, color: '#22d3ee', filter: 'drop-shadow(0 0 8px #22d3ee)' }}
                                className="text-slate-500 text-2xl transition-all"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* سهم السكرول الأزرق */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[2px] h-14 bg-gradient-to-b from-cyan-500 to-transparent shadow-[0_0_10px_#22d3ee]"
                />
            </div>
        </header>
    );
};