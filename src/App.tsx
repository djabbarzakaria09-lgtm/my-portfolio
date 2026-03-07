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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();

  const cvRef = useRef<HTMLDivElement>(null);

  // وظيفة الطباعة المحسنة
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `CV_Zakaria_Djebbar_${i18n.language.toUpperCase()}`,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [theme, i18n.language]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const toggleLanguage = useCallback(() => {
    const langs = ['ar', 'en', 'fr'];
    const nextLang = langs[(langs.indexOf(i18n.language) + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  }, [i18n]);

  const navItems = useMemo(() => ['About', 'Skills', 'Experience', 'Projects'], []);

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden selection:bg-purple-500/30
      ${theme === 'dark' ? 'bg-[#05020a] text-white' : 'bg-white text-slate-900'}`}>

      {/* Background Ambient Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Floating Global Navigation */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-[100] px-3 sm:px-6 py-4 sm:py-6 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">

          {/* Dynamic Brand Identity */}
          <motion.div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shadow-[0_0_8px_#A855F7]" />
            <span className="text-sm font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              {t('HERO_NAME_FIRST')} <span className="text-slate-400 dark:text-gray-600 font-light">{t('HERO_NAME_LAST')}</span>
            </span>
          </motion.div>

          {/* Main Navigation Bar */}
          <div className="flex flex-1 lg:flex-none items-center justify-between lg:justify-end gap-1 sm:gap-2 bg-white/80 dark:bg-[#05020a]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 p-1 sm:p-1.5 rounded-2xl shadow-2xl">

            {/* Nav Links */}
            <div className={`flex items-center gap-0.5 sm:gap-1 px-1 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="px-2 sm:px-4 py-2 text-[9px] sm:text-[10px] font-black uppercase tracking-wider lg:tracking-[0.2em] text-slate-500 hover:text-purple-600 dark:hover:text-white transition-colors whitespace-nowrap">
                  {t(item)}
                </a>
              ))}
            </div>

            {/* Actions Area */}
            <div className={`flex items-center gap-1 border-slate-200 dark:border-white/10 ${i18n.language === 'ar' ? 'border-r pr-1' : 'border-l pl-1'}`}>
              <button onClick={toggleLanguage} className="p-2 sm:p-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400 font-black text-[9px] sm:text-[10px] uppercase min-w-[35px] sm:min-w-[45px]">
                {i18n.language}
              </button>

              <button onClick={toggleTheme} className="p-2 sm:p-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400">
                {theme === 'dark' ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
              </button>

              {/* زر الـ CV المعدل: يعمل كتحميل مباشر في الهاتف وكطباعة في الحاسوب */}
              <button
                onClick={() => {
                  // إذا كان هاتف، يفضل التحميل المباشر، إذا حاسوب يفتح الطباعة
                  if (window.innerWidth < 768) {
                    const link = document.createElement('a');
                    link.href = '/cv-zakaria.pdf'; // تأكد أن الملف بهذا الاسم في مجلد public
                    link.download = 'Zakaria_Djebbar_CV.pdf';
                    link.click();
                  } else {
                    handlePrint();
                  }
                }}
                className="flex items-center gap-2 bg-purple-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg active:scale-95"
              >
                <MdDownload size={16} className="animate-bounce" />
                <span className="hidden xs:inline">CV</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white" onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className={`fixed inset-0 z-[200] p-10 flex flex-col items-center justify-center gap-8 backdrop-blur-3xl ${theme === 'dark' ? 'bg-[#05020a]/98' : 'bg-white/98'}`}>
            <button className="absolute top-10 right-10 p-4 text-slate-400" onClick={() => setIsOpen(false)}><HiX size={32} /></button>
            {[...navItems, 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase hover:text-purple-600 transition-colors">
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

      {/* تحسين الحاوية المخفية: نستخدم opacity 0 بدلاً من الإزاحة الكبيرة */}
      <div style={{ display: 'none' }}>
        <div ref={cvRef}>
          <CVTemplate />
        </div>
      </div>

    </div>
  );
}

export default App;