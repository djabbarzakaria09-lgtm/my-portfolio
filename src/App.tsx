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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Hook: تتبع القسم النشط عبر IntersectionObserver
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // نستخدم rootMargin سالبة لكي يُعتبر القسم "نشطاً" عندما يكون
    // في الثلث العلوي من الشاشة، وليس مجرد دخوله للـ viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// App
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const cvRef = useRef<HTMLDivElement>(null);

  // قائمة الروابط الكاملة مع مفاتيح الترجمة
  // id = id الـ section في HTML، key = مفتاح الترجمة في i18n
  const navItems = useMemo(() => [
    { id: 'about', key: 'About' },
    { id: 'skills', key: 'Skills' },
    { id: 'experience', key: 'Experience' },
    { id: 'projects', key: 'Projects' },
    { id: 'contact', key: 'Contact' },
  ], []);

  // معرفات الأقسام لتتبع الـ active state
  const sectionIds = useMemo(() => navItems.map(n => n.id), [navItems]);
  const activeSection = useActiveSection(sectionIds);

  // ━━━ منطق الطباعة ━━━
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'CV_Zakaria_Djebbar',
  });

  // ━━━ إخفاء/إظهار الـ Navbar عند التمرير ━━━
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
  });

  // ━━━ مزامنة الثيم واتجاه الصفحة ━━━
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

  // ━━━ مساعد: هل هذا الرابط نشط؟ ━━━
  const isActive = (id: string) => activeSection === id;

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden selection:bg-cyan-500/30
      ${theme === 'dark' ? 'bg-[#05020a] text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* ── إضاءة الخلفية ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          الـ Navbar العائم
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-[100] px-3 sm:px-6 py-3 sm:py-5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">

          {/* ══════════════════════════════════════
              الحاسوب فقط (lg+)
          ══════════════════════════════════════ */}

          {/* Brand Logo — حاسوب فقط */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2.5
            bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
            <span className="text-sm font-black tracking-tighter uppercase leading-none">
              {t('HERO_NAME_FIRST')}{' '}
              <span className="text-gray-600 font-light">{t('HERO_NAME_LAST')}</span>
            </span>
          </div>

          {/* روابط + أزرار — حاسوب فقط */}
          <div className="hidden lg:flex items-center gap-1
            bg-white/80 dark:bg-[#05020a]/80 backdrop-blur-2xl
            border border-slate-200 dark:border-white/5
            p-1.5 rounded-2xl shadow-2xl">

            {/* روابط التنقل */}
            <div className={`flex items-center gap-0.5 px-1 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-2 text-[10px] font-black uppercase tracking-widest
                    transition-all duration-300 whitespace-nowrap rounded-xl
                    ${isActive(item.id)
                      ? 'text-cyan-500'
                      : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  {isActive(item.id) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t(item.key)}</span>
                </a>
              ))}
            </div>

            {/* فاصل */}
            <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 mx-1" />

            {/* زر اللغة */}
            <button onClick={toggleLanguage}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl
                text-slate-600 dark:text-gray-400 font-black text-[10px] uppercase
                min-w-[40px] transition-all">
              {i18n.language}
            </button>

            {/* زر الثيم */}
            <button onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all active:scale-90">
              {theme === 'dark'
                ? <MdLightMode size={20} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
                : <MdDarkMode size={20} className="text-slate-700" />}
            </button>

            {/* زر CV */}
            <button
              onClick={() => handlePrint()}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500
                text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest
                transition-all shadow-lg active:scale-95">
              <MdDownload size={16} />
              CV
            </button>
          </div>

          {/* ══════════════════════════════════════
              الهاتف فقط (< lg)
              شريط مضغوط: اللوجو + اللغة + الثيم + CV + هامبرغر
          ══════════════════════════════════════ */}
          <div className="flex lg:hidden items-center justify-between w-full gap-2
            bg-white/90 dark:bg-[#05020a]/90 backdrop-blur-2xl
            border border-slate-200 dark:border-white/5
            px-2 py-1.5 rounded-2xl shadow-xl">

            {/* اسم مختصر */}
            <div className="flex items-center gap-1.5 pl-1">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_6px_#22d3ee]" />
              <span className="text-[11px] font-black tracking-tight uppercase text-slate-900 dark:text-white">
                ZK<span className="text-slate-400 dark:text-gray-600 font-light">.DJ</span>
              </span>
            </div>

            {/* أزرار التحكم */}
            <div className="flex items-center gap-1">

              {/* زر اللغة */}
              <button onClick={toggleLanguage}
                className="h-9 px-3 rounded-xl bg-slate-100 dark:bg-white/5
                  text-slate-700 dark:text-gray-300 font-black text-[10px] uppercase
                  hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95">
                {i18n.language}
              </button>

              {/* زر الثيم */}
              <button onClick={toggleTheme}
                className="h-9 w-9 flex items-center justify-center rounded-xl
                  bg-slate-100 dark:bg-white/5
                  hover:bg-slate-200 dark:hover:bg-white/10
                  transition-all active:scale-90">
                {theme === 'dark'
                  ? <MdLightMode size={18} className="text-yellow-400" />
                  : <MdDarkMode size={18} className="text-slate-700" />}
              </button>

              {/* زر CV */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv-zakaria.pdf';
                  link.download = 'Zakaria_Djebbar_CV.pdf';
                  link.click();
                }}
                className="h-9 flex items-center gap-1.5 px-3 rounded-xl
                  bg-cyan-600 hover:bg-cyan-500 text-white
                  text-[10px] font-black uppercase tracking-wider
                  transition-all active:scale-95 shadow-md shadow-cyan-500/20">
                <MdDownload size={14} />
                CV
              </button>

              {/* زر الهامبرغر */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="h-9 w-9 flex items-center justify-center rounded-xl
                  bg-slate-900 dark:bg-white/10
                  text-white dark:text-white
                  hover:bg-slate-700 dark:hover:bg-white/20
                  transition-all active:scale-95">
                <HiMenuAlt3 size={18} />
              </button>
            </div>
          </div>

        </div>
      </motion.nav>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          قائمة الجوال — كاملة مع كل الأقسام
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-[200] p-10 flex flex-col items-center justify-center gap-6 backdrop-blur-3xl
              ${theme === 'dark' ? 'bg-[#05020a]/98' : 'bg-white/98'}`}
          >
            <button
              className="absolute top-10 right-10 p-4 text-slate-400 hover:text-cyan-500 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={40} />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black uppercase transition-all hover:tracking-widest
                  ${isActive(item.id)
                    ? 'text-cyan-500'
                    : 'hover:text-cyan-500'
                  }`}
              >
                {/* نقطة صغيرة تدل على القسم النشط في الجوال */}
                <span className="relative">
                  {isActive(item.id) && (
                    <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
                  )}
                  {t(item.key)}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          الأقسام الرئيسية
          ملاحظة: أضفنا id="about" على Hero لأن الـ
          IntersectionObserver يحتاجه كنقطة بداية
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <main className="relative z-10">
        <div id="about">
          <Hero onPrintCV={handlePrint} theme={theme} />
        </div>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* حاوية الطباعة السرية */}
      <div className="print-only-container">
        <div ref={cvRef}>
          <CVTemplate />
        </div>
      </div>

    </div>
  );
}

export default App;
