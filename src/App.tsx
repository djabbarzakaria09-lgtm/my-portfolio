import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Experience } from './Components/Experience';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { CVTemplate } from './Components/CVTemplate';
import { useReactToPrint } from 'react-to-print';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode, MdDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // استعادة الثيم المفضل للمستخدم لضمان استمرارية التجربة
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();

  const cvRef = useRef<HTMLDivElement>(null);

  // حل مشكلة الطباعة: استخدام مكتبة react-to-print مع مرجع المحتوى الصحيح
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `CV_Zakaria_Djebbar_${i18n.language.toUpperCase()}`,
  });

  // مراقبة التمرير لإخفاء/إظهار النافبار (UX متطور)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // إخفاء النافبار عند التمرير للأسفل وإظهاره عند الصعود
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // مزامنة الثيم واتجاه اللغة مع الـ DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('theme', theme);
  }, [theme, i18n.language]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const toggleLanguage = useCallback(() => {
    const langs = ['ar', 'en', 'fr'];
    const nextLang = langs[(langs.indexOf(i18n.language) + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  }, [i18n]);

  // قائمة التنقل المحسنة
  const navItems = useMemo(() => ['About', 'Skills', 'Experience', 'Projects'], []);

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden selection:bg-cyan-500/30
      ${theme === 'dark' ? 'bg-[#05020a] text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* إضاءة خلفية ناعمة تتفاعل مع الثيم (Vortex Ambient Glow) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Floating Navigation (المحرك الأساسي للواجهة) */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-[100] px-3 sm:px-6 py-4 sm:py-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">

          {/* Brand Identity: يظهر اسمك بوضوح في الأعلى */}
          <motion.div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
            <span className="text-sm font-black tracking-tighter uppercase leading-none">
              {t('HERO_NAME_FIRST')} <span className="text-slate-400 dark:text-gray-600 font-light">{t('HERO_NAME_LAST')}</span>
            </span>
          </motion.div>

          {/* وحدة التحكم المركزية (Controls Overlay) */}
          <div className="flex flex-1 lg:flex-none items-center justify-between lg:justify-end gap-1 sm:gap-2 bg-white/80 dark:bg-[#05020a]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 p-1.5 rounded-2xl shadow-2xl">

            {/* روابط التنقل السريع */}
            <div className={`flex items-center gap-1 px-1 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="px-3 sm:px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-500 dark:hover:text-white transition-all whitespace-nowrap">
                  {t(item)}
                </a>
              ))}
            </div>

            {/* الأزرار الوظيفية (اللغة، الثيم، الـ CV) */}
            <div className="flex items-center gap-1 border-l border-slate-200 dark:border-white/10 pl-1">
              <button onClick={toggleLanguage} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400 font-black text-[10px] uppercase min-w-[40px]">
                {i18n.language}
              </button>

              <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400">
                {theme === 'dark' ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
              </button>

              {/* زر الـ CV الذكي: طباعة في الحاسوب وتحميل في الهاتف */}
              <button
                onClick={() => {
                  if (window.innerWidth < 768) {
                    const link = document.createElement('a');
                    link.href = '/cv-zakaria.pdf';
                    link.download = 'Zakaria_Djebbar_CV.pdf';
                    link.click();
                  } else {
                    handlePrint();
                  }
                }}
                className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-700 transition-all shadow-lg active:scale-95"
              >
                <MdDownload size={18} className="animate-bounce" />
                <span className="hidden xs:inline">CV</span>
              </button>
            </div>
          </div>

          {/* زر القائمة للهاتف */}
          <button className="lg:hidden p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white" onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </motion.nav>

      {/* قائمة الهاتف بملء الشاشة مع تأثير Clip-Path فخم */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            className={`fixed inset-0 z-[200] p-10 flex flex-col items-center justify-center gap-8 backdrop-blur-3xl ${theme === 'dark' ? 'bg-[#05020a]/98' : 'bg-white/98'}`}
          >
            <button className="absolute top-10 right-10 p-4 text-slate-400 hover:text-cyan-500 transition-colors" onClick={() => setIsOpen(false)}>
              <HiX size={40} />
            </button>
            {[...navItems, 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase hover:text-cyan-500 transition-all hover:tracking-widest">
                {t(item)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* الحاوية السحرية للطباعة: مخفية عن المستخدم ولكنها جاهزة للمتصفح */}
      <div className="print-cv-container" style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={cvRef}>
          <CVTemplate />
        </div>
      </div>

    </div>
  );
}

export default App;