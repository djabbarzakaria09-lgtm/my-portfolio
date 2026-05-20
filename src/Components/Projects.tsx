import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FiGithub, FiLayers, FiCode, FiPlay, FiX,
    FiChevronLeft, FiChevronRight, FiExternalLink
} from 'react-icons/fi';
import './Projects.css';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
    videoUrl?: string;
}

const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Shadow Seekers",
        image: "https://i.postimg.cc/x8NFyptN/Screenshot-2026-02-23-121033.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/shadow-seekers",
        tags: ["React", "Laravel", "WebSockets"],
        videoUrl: "/videos/game.mp4",
    },
    {
        id: 2,
        title: "Academic System",
        image: "https://i.postimg.cc/fb8vJ4Y3/Screenshot-2026-02-20-163533.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/academic-system",
        tags: ["PHP", "Laravel", "MySQL"],
        videoUrl: "/videos/academic.mp4",
    },
    {
        id: 3,
        title: "Supermarket Store",
        image: "https://i.postimg.cc/905wf1gY/Screenshot-2026-02-20-164149.png",
        link: "https://zakaria-supermarket.netlify.app",
        github: "https://github.com/djabbarzakaria09-lgtm/supermarket-frontend",
        tags: ["React", "Tailwind CSS"],
        videoUrl: "/videos/store.mp4",
    },
    {
        id: 4,
        title: "Company Website",
        image: "https://i.postimg.cc/JtwYT32N/Screenshot-2026-02-23-120043.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/company-website",
        tags: ["React", "WordPress API"],
        videoUrl: "/videos/company.mp4",
    },

    // ✅ أضف مشروعك الجديد هنا
    {
        id: 5,
        title: "Anep-docs",
        image: "https://i.postimg.cc/1zzBB9NV/anep-docs.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/Anep-docs",
        tags: ["React", "Laravel"],
        videoUrl: "/videos/Anep-docs.mp4",
    },

];

const TOTAL = PROJECTS_DATA.length;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slide variants
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.96,
    }),
    center: (_dir: number) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: EASE },
    }),
    exit: (dir: number) => ({
        x: dir > 0 ? '-100%' : '100%',
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.45, ease: EASE },
    }),
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Main Component
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const Projects = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // ── Preload كل الصور فور فتح القسم ──
    useEffect(() => {
        PROJECTS_DATA.forEach(p => {
            const img = new Image();
            img.src = p.image;
        });
    }, []);


    // ── Swipe / drag tracking ──
    const dragX = useMotionValue(0);
    const dragProgress = useTransform(dragX, [-200, 200], [-1, 1]);

    const project = PROJECTS_DATA[index];

    // ── Navigate ──
    const go = useCallback((dir: 1 | -1) => {
        setDirection(dir);
        setIndex(prev => (prev + dir + TOTAL) % TOTAL);
    }, []);

    const goTo = useCallback((i: number) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    }, [index]);

    // ── Keyboard ──
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(isRtl ? -1 : 1);
            if (e.key === 'ArrowLeft') go(isRtl ? 1 : -1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [go, isRtl]);

    // ── Drag end → detect swipe ──
    const onDragEnd = useCallback(() => {
        const val = dragProgress.get();
        if (val < -0.25) go(isRtl ? -1 : 1);
        if (val > 0.25) go(isRtl ? 1 : -1);
        dragX.set(0);
    }, [dragProgress, dragX, go, isRtl]);

    return (
        <section id="projects" className="py-20 md:py-32 bg-transparent relative overflow-hidden">

            {/* ── Section Header ── */}
            <div className={`px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-16
                flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4
                ${isRtl ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={`flex items-center gap-3 text-cyan-500 font-bold
                        text-[10px] uppercase tracking-[0.4em] mb-4
                        ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-8 h-[1.5px] bg-cyan-500/30" />
                        <FiLayers size={12} />
                        <span>{t('Arsenal')}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black
                        text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                        {isRtl ? 'أعمال' : 'SELECTED'}{' '}
                        <span className="text-cyan-500 font-light italic">
                            {isRtl ? 'مختارة.' : 'WORKS.'}
                        </span>
                    </h2>
                </motion.div>

                {/* Counter */}
                <div className="flex items-center gap-3 pb-1">
                    <span className="text-5xl md:text-6xl font-black text-cyan-500 leading-none tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1">
                        <div className="w-16 h-[1px] bg-slate-300 dark:bg-white/10" />
                        <span className="text-[10px] font-bold text-slate-400 dark:text-gray-600 uppercase tracking-widest">
                            {String(TOTAL).padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Slider Stage
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="relative w-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.12}
                        style={{ x: dragX }}
                        onDragEnd={onDragEnd}
                        className="w-full cursor-grab active:cursor-grabbing select-none"
                    >
                        {/* ── Card Layout: حاسوب side-by-side / هاتف stack ── */}
                        <div className="px-4 sm:px-6 max-w-7xl mx-auto">
                            <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch
                                ${!isRtl && index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
                                ${isRtl && index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* ── صورة المشروع ── */}
                                <div className="w-full lg:w-[58%] relative group
                                    rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden
                                    bg-slate-100 dark:bg-slate-900/60
                                    border border-slate-200 dark:border-white/5
                                    shadow-2xl aspect-[16/10] md:aspect-[16/9]"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        className="w-full h-full object-cover transition-transform
                                            duration-700 group-hover:scale-[1.03]"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t
                                        from-black/40 via-transparent to-transparent" />

                                    {/* زر الفيديو فوق الصورة */}
                                    {project.videoUrl && (
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedVideo(project.videoUrl!)}
                                            className="absolute inset-0 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600/90
                                                backdrop-blur-sm rounded-full flex items-center justify-center
                                                shadow-2xl shadow-cyan-500/40">
                                                <FiPlay size={24} className="text-white ml-1" />
                                            </div>
                                        </motion.button>
                                    )}

                                    {/* رقم المشروع فوق الصورة */}
                                    <div className="absolute top-4 left-4 px-3 py-1.5
                                        bg-black/40 backdrop-blur-md rounded-full
                                        text-[9px] font-black text-white/80 uppercase tracking-widest">
                                        <FiCode className="inline mr-1.5 mb-0.5" size={9} />
                                        {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
                                    </div>
                                </div>

                                {/* ── معلومات المشروع ── */}
                                <div className={`w-full lg:w-[42%] flex flex-col justify-center
                                    gap-4 md:gap-6 py-2 md:py-4
                                    ${isRtl ? 'text-right' : 'text-left'}`}>

                                    {/* Tags */}
                                    <div className={`flex flex-wrap gap-2
                                        ${isRtl ? 'justify-end' : 'justify-start'}`}>
                                        {project.tags.map(tag => (
                                            <span key={tag}
                                                className="px-3 py-1 bg-cyan-500/10 dark:bg-cyan-500/10
                                                    border border-cyan-500/20 rounded-full
                                                    text-[9px] font-black text-cyan-600 dark:text-cyan-400
                                                    uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* العنوان */}
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl
                                        font-black text-slate-900 dark:text-white
                                        uppercase tracking-tight leading-none">
                                        {project.title}
                                    </h3>

                                    {/* الوصف */}
                                    <p className="text-slate-600 dark:text-gray-400
                                        text-sm md:text-base leading-relaxed font-medium">
                                        {t(`ProjectDesc${project.id}`)}
                                    </p>

                                    {/* الأزرار */}
                                    <div className={`flex flex-wrap gap-3 pt-2
                                        ${isRtl ? 'justify-end' : 'justify-start'}`}>

                                        {project.videoUrl && (
                                            <motion.button
                                                whileHover={{ scale: 1.03, y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                                onClick={() => setSelectedVideo(project.videoUrl!)}
                                                className="flex items-center gap-2 px-5 py-3
                                                    bg-cyan-600 hover:bg-cyan-500 text-white
                                                    rounded-full text-[10px] font-black uppercase tracking-widest
                                                    transition-all shadow-lg shadow-cyan-500/20"
                                            >
                                                <FiPlay size={12} />
                                                {isRtl ? 'عرض الفيديو' : 'Watch Demo'}
                                            </motion.button>
                                        )}

                                        <motion.a
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-3
                                                bg-slate-100 dark:bg-white/5
                                                hover:bg-slate-200 dark:hover:bg-white/10
                                                border border-slate-200 dark:border-white/10
                                                hover:border-cyan-500/30
                                                text-slate-700 dark:text-gray-300
                                                hover:text-cyan-600 dark:hover:text-cyan-400
                                                rounded-full text-[10px] font-black uppercase tracking-widest
                                                transition-all"
                                        >
                                            <FiGithub size={12} />
                                            {t('Source')}
                                        </motion.a>

                                        {project.link !== '#' && (
                                            <motion.a
                                                whileHover={{ scale: 1.03, y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-3
                                                    bg-slate-100 dark:bg-white/5
                                                    hover:bg-slate-200 dark:hover:bg-white/10
                                                    border border-slate-200 dark:border-white/10
                                                    hover:border-cyan-500/30
                                                    text-slate-700 dark:text-gray-300
                                                    hover:text-cyan-600 dark:hover:text-cyan-400
                                                    rounded-full text-[10px] font-black uppercase tracking-widest
                                                    transition-all"
                                            >
                                                <FiExternalLink size={12} />
                                                {t('LiveDemo')}
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Navigation Bar: Prev / Dots / Next
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="px-4 sm:px-6 max-w-7xl mx-auto mt-8 md:mt-12
                flex items-center justify-between gap-4">

                {/* زر السابق */}
                <motion.button
                    whileHover={{ scale: 1.08, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => go(isRtl ? 1 : -1)}
                    className="flex items-center gap-2 px-4 md:px-6 py-3
                        bg-white dark:bg-white/5
                        border border-slate-200 dark:border-white/10
                        hover:border-cyan-500/40 hover:text-cyan-500
                        text-slate-600 dark:text-gray-400
                        rounded-full text-[10px] font-black uppercase tracking-widest
                        transition-all shadow-sm"
                    aria-label="Previous project"
                >
                    <FiChevronLeft size={14} />
                    <span className="hidden sm:inline">{isRtl ? 'التالي' : 'Prev'}</span>
                </motion.button>

                {/* Dots */}
                <div className="flex items-center gap-2.5">
                    {PROJECTS_DATA.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to project ${i + 1}`}
                            className="relative flex items-center justify-center"
                        >
                            <motion.div
                                animate={{
                                    width: i === index ? 28 : 8,
                                    background: i === index
                                        ? 'rgb(6 182 212)' /* cyan-500 */
                                        : 'rgb(148 163 184 / 0.3)',
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                className="h-2 rounded-full"
                            />
                        </button>
                    ))}
                </div>

                {/* زر التالي */}
                <motion.button
                    whileHover={{ scale: 1.08, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => go(isRtl ? -1 : 1)}
                    className="flex items-center gap-2 px-4 md:px-6 py-3
                        bg-cyan-600 hover:bg-cyan-500 text-white
                        rounded-full text-[10px] font-black uppercase tracking-widest
                        transition-all shadow-lg shadow-cyan-500/20"
                    aria-label="Next project"
                >
                    <span className="hidden sm:inline">{isRtl ? 'السابق' : 'Next'}</span>
                    <FiChevronRight size={14} />
                </motion.button>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Video Modal
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl
                            flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-6 right-6 p-3 rounded-full
                                bg-white/10 border border-white/20
                                text-white hover:bg-white/20 transition-all"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <FiX size={20} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ ease: [0.22, 1, 0.36, 1] }}
                            className="w-full max-w-5xl aspect-video bg-black
                                rounded-2xl md:rounded-3xl overflow-hidden
                                shadow-2xl border border-white/10"
                            onClick={e => e.stopPropagation()}
                        >
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
