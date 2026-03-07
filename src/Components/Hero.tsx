import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMail, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';

export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    // تأثير بارالاكس لزيادة العمق
    const bgY = useTransform(scrollY, [0, 500], [0, 100]);
    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 max-w-7xl mx-auto overflow-hidden bg-transparent">

            {/* إضاءة خلفية طبقية (Layered Lighting) لجعل الموقع يبدو ثلاثي الأبعاد */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-500/5 blur-[120px] rotate-12 rounded-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full flex flex-col items-center text-center space-y-12"
            >
                {/* الإطار الشخصي مع توهج (Avatar with Outer Glow) */}
                <div className="relative group">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-[3rem] overflow-hidden border-2 border-white/10 dark:border-white/5 bg-slate-900 shadow-[0_0_50px_rgba(147,51,234,0.2)] transition-all duration-500"
                    >
                        <img
                            src="/me.jpg"
                            alt="Rabie Zakaria Djebbar"
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                    </motion.div>
                    {/* Badge التقني المضيء */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(147,51,234,0.4)] z-20 border-4 border-[#05020a]">
                        <FiCode size={20} />
                    </div>
                </div>

                {/* قسم الأسماء: هنا السحر الذي سيمنع الانتقادات */}
                <div className="space-y-6 max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl"
                    >
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-600 dark:text-purple-400">
                            {t('HERO_SUBTITLE')}
                        </span>
                    </motion.div>

                    {/* التدرج اللوني للاسم (High-End Gradient Typography) */}
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
                        <span className="block text-slate-900 dark:text-white transition-colors duration-500">
                            {t('HERO_NAME_FIRST')}
                        </span>
                        <span className="block bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400 bg-clip-text text-transparent italic font-light filter drop-shadow-sm">
                            {t('HERO_NAME_LAST')}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-slate-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                        {t('HERO_DESC')}
                    </p>
                </div>

                {/* أزرار الأكشن الاحترافية */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 w-full">
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black px-12 py-5 rounded-[2rem] font-black text-xs tracking-widest uppercase transition-all"
                    >
                        {t('view_projects')} <FiArrowUpRight size={18} />
                    </motion.a>

                    <div className="flex gap-4">
                        {[
                            { icon: <FiMail />, href: "mailto:djabbarzakaria09@gmail.com", color: "hover:bg-red-500" },
                            { icon: <FiGithub />, href: "https://github.com/djabbarzakaria09-lgtm", color: "hover:bg-slate-800" },
                            { icon: <FiLinkedin />, href: "#", color: "hover:bg-blue-600" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: "rgba(147,51,234,0.1)" }}
                                href={social.href}
                                className="w-14 h-14 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all backdrop-blur-md"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* مؤشر التمرير الحديث */}
            <motion.div
                style={{ opacity: textOpacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-600 to-transparent" />
            </motion.div>
        </header>
    );
};