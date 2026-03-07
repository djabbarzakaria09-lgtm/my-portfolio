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

/**
 * App Component
 * Orchestrates the portfolio's lifecycle, theme, and trilingual synchronization.
 * Optimized to remove unused imports and fix visual ID consistency.
 */
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();

  // --- CV Printing Logic ---
  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `CV_Rabie_Zakaria_Djebbar_${i18n.language.toUpperCase()}`,
  });

  // --- Navbar Scroll Controller ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
  });

  // --- Theme & Direction Sync ---
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

  // قائمة التنقل المترجمة لمنع إعادة الرندر
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
        className="fixed top-0 w-full z-[100] px-6 py-6 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Dynamic Brand Identity */}
          <motion.div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full shadow-[0_0_8px_#A855F7]" />
            <span className="text-sm font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              {t('HERO_NAME_FIRST')} <span className="text-slate-400 dark:text-gray-600 font-light">{t('HERO_NAME_LAST')}</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-white/80 dark:bg-[#05020a]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 p-1.5 rounded-2xl shadow-2xl">
            <div className={`flex items-center gap-1 px-2 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-purple-600 dark:hover:text-white transition-colors">
                  {t(item)}
                </a>
              ))}
            </div>

            <div className={`flex items-center gap-1 border-slate-200 dark:border-white/10 ${i18n.language === 'ar' ? 'border-r pr-1' : 'border-l pl-1'}`}>
              <button onClick={toggleLanguage} className="p-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400 font-black text-[10px] uppercase min-w-[45px]">
                {i18n.language}
              </button>
              <button onClick={toggleTheme} className="p-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-600 dark:text-gray-400 transition-all">
                {theme === 'dark' ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
              </button>
              <button onClick={() => handlePrint()} className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 dark:hover:bg-purple-600 dark:hover:text-white transition-all shadow-lg active:scale-95">
                <MdDownload size={16} /> CV
              </button>
            </div>
          </div>

          <button className="md:hidden p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white" onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`fixed inset-0 z-[200] p-10 flex flex-col items-center justify-center gap-8 backdrop-blur-3xl ${theme === 'dark' ? 'bg-[#05020a]/98' : 'bg-white/98'}`}>
            <button className="absolute top-10 right-10 p-4 text-slate-400" onClick={() => setIsOpen(false)}><HiX size={32} /></button>
            {[...navItems, 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors">
                {t(item)}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={toggleLanguage} className="text-xl font-black uppercase border-b-2 border-purple-600">{i18n.language}</button>
              <button onClick={toggleTheme} className="p-4 bg-slate-100 dark:bg-white/5 rounded-full">
                {theme === 'dark' ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
              </button>
            </div>
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

      <div className="hidden">
        <CVTemplate ref={cvRef} />
      </div>

    </div>
  );
}

export default App;