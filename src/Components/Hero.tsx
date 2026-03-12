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

    return (
        <header className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05020a]">

            {/* 1. نظام الخلفية النيزكية (Meteor System) */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[140px] rounded-full" />

                {/* النيازك البرمجية المتحركة */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[120px] bg-gradient-to-b from-transparent via-cyan-500/60 to-transparent"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * -100}%`,
                        }}
                        animate={{
                            y: ['0vh', '150vh'],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}

                <div className="hero-grid-pattern opacity-25" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* 2. الإطار الشخصي المتوهج (Avatar) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        className="relative mb-12 group"
                    >
                        <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_70px_rgba(34,211,238,0.5)]">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#05020a]">
                                <img
                                    src="/me.jpg"
                                    alt="Zakaria"
                                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-2 right-2 z-20 bg-[#05020a] border border-cyan-500/30 px-3 py-1 rounded-full flex items-center gap-2"
                        >
                            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                            <span className="text-[10px] font-black text-white uppercase tracking-tighter">Online</span>
                        </motion.div>
                    </motion.div>

                    {/* 3. الاسم المتحرك (Shine Flow) */}
                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase"
                        >
                            <span className="hero-name-gradient block mb-2">{t('HERO_NAME_FIRST')}</span>
                            <span className="hero-hollow-blue block mt-4">{t('HERO_NAME_LAST')}</span>
                        </motion.h1>
                    </div>

                    {/* 4. الوصف والأزرار */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl"
                    >
                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-12 font-medium px-4">
                            {t('HERO_DESC')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)" }}
                                className="w-full sm:w-auto px-12 py-5 bg-cyan-500 text-black rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
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

                    {/* السوشيال ميديا */}
                    <div className="flex items-center gap-10 mt-16 pb-10">
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
        </header>
    );
};