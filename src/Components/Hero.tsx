import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// قمت بحذف FiCode من هنا لأنه غير مستخدم
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
    onPrintCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
    // قمت بحذف i18n من هنا لأننا نستخدم t فقط
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    const rawY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useSpring(rawY, { stiffness: 100, damping: 30 });

    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm" },
        { icon: <FiLinkedin />, href: "#" }
    ], []);

    return (
        <header className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">

            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[60%] bg-cyan-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="hero-grid-pattern opacity-20" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-xl"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative h-2 w-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                            Available for hire
                        </span>
                    </motion.div>

                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase"
                        >
                            <span className="block text-white mb-2">{t('HERO_NAME_FIRST')}</span>
                            <span className="hero-hollow-text block">{t('HERO_NAME_LAST')}</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-10 font-medium px-4">
                            {t('HERO_DESC')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                            >
                                {t('view_projects')} <FiArrowUpRight size={18} />
                            </motion.a>

                            <motion.button
                                onClick={onPrintCV}
                                whileHover={{ scale: 1.05 }}
                                className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white/5 text-white rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                            >
                                <FiFileText size={18} /> CV
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="flex items-center gap-8 mt-12">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                whileHover={{ y: -5, color: '#22d3ee' }}
                                className="text-slate-500 text-xl transition-all"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[1px] h-10 bg-cyan-500"
                />
            </div>
        </header>
    );
};