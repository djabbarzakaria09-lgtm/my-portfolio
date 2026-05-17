import React, { useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import './Hero.css';

interface HeroProps {
    onPrintCV?: () => void;
    theme?: 'dark' | 'light';
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Hook: تأثير الكتابة المتحركة (Typing Animation)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 45, pauseMs = 2000) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];

        if (!isDeleting && displayed === current) {
            // انتهى الكتابة → انتظر ثم ابدأ الحذف
            const pause = setTimeout(() => setIsDeleting(true), pauseMs);
            return () => clearTimeout(pause);
        }

        if (isDeleting && displayed === '') {
            // انتهى الحذف → انتقل للكلمة التالية
            setIsDeleting(false);
            setWordIndex(prev => (prev + 1) % words.length);
            return;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const next = isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1);

        const timer = setTimeout(() => setDisplayed(next), speed);
        return () => clearTimeout(timer);
    }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

    return displayed;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// المكوّن الرئيسي
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const Hero: React.FC<HeroProps> = ({ onPrintCV, theme }) => {
    const { t, i18n } = useTranslation();
    const { scrollY } = useScroll();

    // تأثير البارالاكس للخلفية
    const rawY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgY = useSpring(rawY, { stiffness: 100, damping: 30 });

    // ━━━ النيازك: useMemo يحسب المواقع مرة واحدة فقط ━━━
    const meteors = useMemo(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            left: `${(i * 8.3 + 3) % 100}%`,   // توزيع منتظم بدلاً من random
            topOffset: `${-(i * 15 + 10)}%`,     // بداية من خارج الشاشة
            duration: 4 + (i % 5),               // مدة متغيرة ثابتة
            delay: (i * 0.6) % 7,                // تأخير موزع
        }))
        , []);  // [] → يحسب مرة واحدة فقط طول عمر الـ component

    // ━━━ الكلمات للـ Typing Effect ━━━
    const typingWords = useMemo(() => {
        if (i18n.language === 'ar') {
            return ['مطور ويب متكامل', 'مطور تطبيقات جوال', 'مهندس واجهات', 'تقني سامٍ'];
        }
        if (i18n.language === 'fr') {
            return ['Full Stack Developer', 'Mobile Developer', 'UI Engineer', 'Tech Supérieur'];
        }
        return ['Full Stack Developer', 'Mobile Developer', 'UI/UX Engineer', 'Laravel & React'];
    }, [i18n.language]);

    const typedText = useTypingEffect(typingWords, 75, 40, 1800);

    // ━━━ روابط التواصل ━━━
    const socialLinks = useMemo(() => [
        { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com", label: "Email" },
        { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm", label: "GitHub" },
        { icon: <FiLinkedin />, href: "#", label: "LinkedIn" }
    ], []);

    return (
        <header
            className={`hero-container relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700
            ${theme === 'light' ? 'bg-[#f8fafc] text-slate-900' : 'bg-[#05020a] text-white'}`}
            style={{ backgroundColor: theme === 'light' ? '#f8fafc' : '#05020a' }}
        >
            {/* ━━━ 1. خلفية: إضاءة + نيازك ثابتة الحساب ━━━ */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">

                {/* إضاءة ambient */}
                <div className={`absolute top-[-10%] left-[-10%] w-[70%] h-[70%] blur-[140px] rounded-full animate-pulse
                    ${theme === 'light' ? 'bg-cyan-200/40' : 'bg-cyan-500/10'}`} />

                {/* النيازك — مواقعها محسوبة مرة واحدة بـ useMemo */}
                {meteors.map(m => (
                    <motion.div
                        key={m.id}
                        className={`absolute w-[1px] h-[100px] ${theme === 'light' ? 'bg-cyan-600/20' : 'bg-cyan-400/40'}`}
                        style={{ left: m.left, top: m.topOffset }}
                        animate={{ y: ['0vh', '150vh'], opacity: [0, 1, 0] }}
                        transition={{
                            duration: m.duration,
                            repeat: Infinity,
                            delay: m.delay,
                            ease: 'linear',
                        }}
                    />
                ))}

                {/* شبكة النقاط */}
                <div className={`hero-grid-pattern ${theme === 'light' ? 'opacity-10' : 'opacity-25'}`} />
            </motion.div>

            {/* ━━━ المحتوى الرئيسي ━━━ */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* 2. شعار DJ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

                    {/* 3. الاسم بتأثير Shine Flow */}
                    <div className="relative mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

                    {/* ━━━ 4. Typing Animation للـ Subtitle ━━━ */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-8 h-8 flex items-center justify-center gap-1"
                    >
                        <span className={`font-mono text-sm md:text-base font-bold tracking-widest uppercase
                            ${theme === 'light' ? 'text-cyan-700' : 'text-cyan-400'}`}>
                            {typedText}
                        </span>
                        {/* المؤشر الوامض */}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                            className={`inline-block w-0.5 h-5 ml-0.5 rounded-full
                                ${theme === 'light' ? 'bg-cyan-600' : 'bg-cyan-400'}`}
                        />
                    </motion.div>

                    {/* 5. الوصف والأزرار */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
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
                                whileTap={{ scale: 0.97 }}
                                className={`w-full sm:w-auto px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl
                                    ${theme === 'light' ? 'bg-slate-900 text-white shadow-slate-200' : 'bg-white text-black shadow-cyan-500/10'}`}
                            >
                                {t('view_projects')} <FiArrowUpRight size={18} />
                            </motion.a>

                            <motion.button
                                onClick={onPrintCV}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className={`w-full sm:w-auto px-12 py-5 border-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all
                                    ${theme === 'light' ? 'border-cyan-600 text-cyan-700 bg-white' : 'border-cyan-500/30 text-cyan-400 backdrop-blur-md'}`}
                            >
                                <FiFileText size={18} /> CV
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* 6. روابط التواصل */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center gap-10 mt-16 pb-12"
                    >
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                aria-label={link.label}
                                whileHover={{ y: -5, color: '#22d3ee' }}
                                className={`text-xl transition-all ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'}`}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </header>
    );
};
