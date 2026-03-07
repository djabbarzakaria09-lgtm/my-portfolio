import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink, FiLayers, FiCode } from 'react-icons/fi';

interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
}

const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Shadow Seekers",
        image: "https://i.postimg.cc/x8NFyptN/Screenshot-2026-02-23-121033.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/shadow-seekers",
        tags: ["React", "Laravel", "WebSockets"]
    },
    {
        id: 2,
        title: "Academic System",
        image: "https://i.postimg.cc/fb8vJ4Y3/Screenshot-2026-02-20-163533.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/academic-system",
        tags: ["PHP", "Laravel", "MySQL"]
    },
    {
        id: 3,
        title: "Supermarket Store",
        image: "https://i.postimg.cc/905wf1gY/Screenshot-2026-02-20-164149.png",
        link: "https://zakaria-supermarket.netlify.app",
        github: "https://github.com/djabbarzakaria09-lgtm/supermarket-frontend",
        tags: ["React", "Tailwind CSS"]
    },
    {
        id: 4,
        title: "Company Website",
        image: "https://i.postimg.cc/JtwYT32N/Screenshot-2026-02-23-120043.png",
        link: "#",
        github: "https://github.com/djabbarzakaria09-lgtm/company-website",
        tags: ["React", "WordPress API"]
    }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={targetRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Project Preview Image Container */}
            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 shadow-2xl p-4 md:p-8">
                <motion.div style={{ y: imgY }} className="relative h-[300px] md:h-[450px] flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain rounded-xl shadow-lg transition-all duration-700 group-hover:scale-[1.02]"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            </div>

            {/* Project Details */}
            <div className={`w-full lg:w-2/5 space-y-6 ${isRtl ? "text-right" : "text-left"}`}>
                <div className={`flex items-center gap-3 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] ${isRtl ? "flex-row-reverse" : ""}`}>
                    <FiCode />
                    <span>{t('Technical')} {project.id < 10 ? `0${project.id}` : project.id}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                    {project.title}
                </h3>

                <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : "justify-start"}`}>
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    {t(`ProjectDesc${project.id}`)}
                </p>

                {/* Updated Buttons Section: Using optimized CSS classes */}
                <div className={`flex flex-wrap gap-4 pt-6 ${isRtl ? "justify-end" : "justify-start"}`}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-3 px-8 py-4 text-[10px] tracking-widest uppercase transition-all"
                    >
                        <FiExternalLink size={14} /> {t('LiveDemo')}
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github flex items-center gap-3 px-8 py-4 text-[10px] tracking-widest uppercase transition-all"
                    >
                        <FiGithub size={14} /> {t('Source')}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto bg-transparent">
            {/* Header Section */}
            <div className={`mb-32 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 text-blue-600 dark:text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <FiLayers /> <span>{t('Arsenal')}</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                    {isRtl ? "أعمال" : "SELECTED"} <span className="text-blue-500 dark:text-blue-600 font-light italic">{isRtl ? "مختارة." : "WORKS."}</span>
                </h2>
                <div className={`h-[1px] w-32 bg-blue-600/20 ${isRtl ? 'ml-auto' : ''}`} />
            </div>

            <div className="space-y-48 md:space-y-64">
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};