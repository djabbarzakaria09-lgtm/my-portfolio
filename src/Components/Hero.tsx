import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// استيراد الأيقونات المستخدمة فقط (لحل تحذير FiCode)
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import './Hero.css';

// تعريف الـ Props ليدعم الثيم الممرر من App.tsx (لحل الخطأ الأحمر)
interface HeroProps {
    onPrintCV?: () => void;
    theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV, theme }) => {
    const { t } = useTranslation(); // حذفنا i18n غير المستخدم هنا
    const { scrollY } = useScroll();

    // تأثير البارالاكس للخلفية
    const rawY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useSpring(rawY, { stiffness: 100, damping: 30 });

    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm" },
        { icon: <FiLinkedin />, href: "#" }
    ], []);

    return (
        <header
            className={`hero-container relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700
            ${theme === 'light' ? 'bg-[#f8fafc] text-slate-900' : 'bg-[#05020a] text-white'}`}
            style={{ backgroundColor: theme === 'light' ? '#f8fafc' : '#05020a' }}
        >

            {/* 1. نظام الخلفية (نيازك + إضاءة) متفاعل مع الثيم */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
                <div className={`absolute top-[-10%] left-[-10%] w-[70%] h-[70%] blur-[140px] rounded-full animate-pulse
                    ${theme === 'light' ? 'bg-cyan-200/40' : 'bg-cyan-500/10'}`} />

                {/* النيازك البرمجية المتحركة */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-[1px] h-[100px] ${theme === 'light' ? 'bg-cyan-600/20' : 'bg-cyan-400/40'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * -100}%`,
                        }}
                        animate={{
                            y: ['0vh', '150vh'],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 4,
                            repeat: Infinity,
                            delay: Math.random() * 7,
                            ease: "linear"
                        }}
                    />
                ))}

                <div className={`hero-grid-pattern ${theme === 'light' ? 'opacity-10' : 'opacity-25'}`} />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* 2. شعار DJ الاحترافي المتوهج */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative mb-12 group"
                    >
                        <div className={`relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-2xl transition-all duration-500
                            ${theme === 'light' ? 'shadow-cyan-200/50' : 'shadow-cyan-500/20'}`}>
                            <div className={`w-full h-full rounded-full flex items-center justify-center border-4 border-transparent overflow-hidden transition-colors duration-700
                                ${theme === 'light' ? 'bg-white' : 'bg-[#05020a]'}`}>
                                <span className={`text-4xl sm:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b
                                    ${theme === 'light' ? 'from-slate-800 to-cyan-600' : 'from-white to-cyan-500'}`}>
                                    DJ
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. الاسم المتحرك (Shine Flow) */}
                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase"
                        >
                            <span className={`hero-name-gradient block mb-2 ${theme === 'light' ? 'light-mode-name' : ''}`}>
                                {t('HERO_NAME_FIRST')}
                            </span>
                            <span className={`hero-hollow-blue block mt-4 ${theme === 'light' ? 'light-mode-hollow' : ''}`}>
                                {t('HERO_NAME_LAST')}
                            </span>
                        </motion.h1>
                    </div>

                    {/* 4. الوصف والأزرار */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <p className={`text-sm md:text-lg leading-relaxed mb-10 font-medium px-4 transition-colors
                            ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                            {t('HERO_DESC')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                className={`w-full sm:w-auto px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl
                                    ${theme === 'light' ? 'bg-slate-900 text-white shadow-slate-200' : 'bg-white text-black shadow-cyan-500/10'}`}
                            >
                                {t('view_projects')} <FiArrowUpRight size={18} />
                            </motion.a>

                            <motion.button
                                onClick={onPrintCV}
                                whileHover={{ scale: 1.05 }}
                                className={`w-full sm:w-auto px-12 py-5 border-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all
                                    ${theme === 'light' ? 'border-cyan-600 text-cyan-700 bg-white' : 'border-cyan-500/30 text-cyan-400 backdrop-blur-md'}`}
                            >
                                <FiFileText size={18} /> CV
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* روابط التواصل */}
                    <div className="flex items-center gap-10 mt-16 pb-12">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                whileHover={{ y: -5, color: '#22d3ee' }}
                                className={`text-xl transition-all ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'}`}
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