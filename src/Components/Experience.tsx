import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as MdIcons from 'react-icons/md';
import { SiGooglemarketingplatform, SiWordpress } from 'react-icons/si';
import './Experience.css';

export const Experience = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const RESUME_DATA = [
        {
            id: 1,
            icon: <MdIcons.MdBusinessCenter />,
            period: '2024 - Present',
            title: 'ANEP Messagerie Express',
            sub: 'Full Stack Developer (Apprenticeship)',
            desc: isRtl
                ? 'المساهمة في تطوير وصيانة الأنظمة البرمجية الداخلية، وبناء حلول متكاملة باستخدام Laravel و React ضمن بيئة عمل مؤسساتية.'
                : 'Contributing to the development and maintenance of internal enterprise systems, building full-stack solutions with Laravel & React in a corporate environment.',
            url: 'https://www.anepme.dz/',
        },
        {
            id: 2,
            icon: <MdIcons.MdCode />,
            period: '2024',
            title: 'Spacesortium',
            sub: 'Frontend Engineering Intern',
            desc: isRtl
                ? 'التركيز على تحسين واجهات المستخدم (UI/UX) وكتابة كود نظيف وقابل للصيانة، مع ضمان توافق المواقع مع مختلف الشاشات.'
                : 'Focused on UI/UX optimization and writing clean, maintainable code, ensuring responsive design across all platforms.',
            url: 'https://www.spacesortium.com',
        },
        {
            id: 3,
            icon: <MdIcons.MdSchool />,
            period: '2024 - Present',
            title: 'INSFP Sidi Abdellah',
            sub: 'Higher Technician Degree (Web & Mobile Dev)',
            desc: isRtl
                ? 'دراسة متخصصة في هندسة الويب، إدارة قواعد البيانات، وتطوير تطبيقات الجوال باستخدام أحدث التقنيات.'
                : 'Academic focus on web engineering, database management, and mobile application development using modern frameworks.',
            url: 'https://www.facebook.com/profile.php?id=100089009375724',
        },
        {
            id: 4,
            icon: <MdIcons.MdGTranslate />,
            period: '2024',
            title: 'Technical English',
            sub: 'British Council & Insight Academy',
            desc: isRtl
                ? 'تعزيز مهارات التواصل باللغة الإنجليزية التقنية لضمان القدرة على العمل ضمن فرق دولية وفهم الوثائق البرمجية.'
                : 'Enhancing technical English communication skills to work effectively within international teams and understand complex documentation.',
            url: 'https://www.britishcouncil.dz',
        },
    ];

    return (
        <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden bg-transparent">

            {/* ── Header ── */}
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-24 gap-6
                ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-900 dark:text-white"
                >
                    <div className={`flex items-center gap-3 text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-8 h-[1.5px] bg-cyan-500/30" />
                        {isRtl ? 'المسار المهني' : 'Professional Path'}
                    </div>
                    {/* حجم العنوان أصغر في الهاتف */}
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                        PRO <span className="text-slate-400 dark:text-gray-700 font-light italic">RESUME.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`text-slate-500 dark:text-gray-500 font-medium text-xs md:text-sm max-w-xs
                        ${isRtl ? 'text-right border-r-2 pr-4' : 'text-left border-l-2 pl-4'}
                        border-cyan-500/20`}
                >
                    <p className="leading-relaxed">
                        {isRtl
                            ? 'توثيق للتجارب المهنية والمسار الأكاديمي الذي يجمع بين تطوير البرمجيات والحلول الرقمية المتكاملة.'
                            : 'A refined chronicle of professional engagements and academic milestones in software engineering and digital solutions.'}
                    </p>
                </motion.div>
            </div>

            {/* ── بطاقات الخبرة ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {RESUME_DATA.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-card group block relative
                                p-6 sm:p-8 md:p-10
                                rounded-[2rem] md:rounded-[2.5rem]
                                bg-white dark:bg-white/[0.01]
                                border border-slate-200 dark:border-white/5
                                hover:border-cyan-500/30
                                transition-all duration-500 shadow-sm hover:shadow-xl h-full"
                        >
                            {/* أيقونة + تاريخ */}
                            <div className="flex justify-between items-start mb-6 md:mb-10">
                                <div className="p-3 md:p-4 rounded-2xl text-xl md:text-2xl
                                    bg-slate-50 dark:bg-white/5
                                    text-slate-600 dark:text-slate-400
                                    group-hover:bg-cyan-600 group-hover:text-white
                                    transition-all duration-500 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-black text-slate-400 dark:text-gray-600
                                    uppercase tracking-widest px-3 py-1.5
                                    bg-slate-50 dark:bg-white/5 rounded-full
                                    border border-slate-100 dark:border-white/5">
                                    {item.period}
                                </span>
                            </div>

                            {/* المحتوى */}
                            <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold
                                    text-slate-900 dark:text-white uppercase tracking-tight
                                    group-hover:text-cyan-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-cyan-500 font-black text-[9px] uppercase tracking-[0.15em] italic">
                                    {item.sub}
                                </p>
                                <p className="text-slate-600 dark:text-gray-500 text-xs sm:text-sm leading-relaxed font-medium pt-1">
                                    {item.desc}
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* ── الكفاءات الإضافية ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">

                {/* Marketing & CMS */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <a
                        href="https://www.facebook.com/Formation.Professionnelle.UE?locale=ar_AR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]
                            bg-slate-50/50 dark:bg-white/[0.01]
                            border border-slate-200 dark:border-white/5
                            flex flex-row items-center gap-5 md:gap-8 h-full
                            transition-all hover:bg-white dark:hover:bg-white/[0.02]
                            shadow-sm group"
                    >
                        {/* أيقونتان جنباً لجنب */}
                        <div className="flex -space-x-3 flex-shrink-0">
                            <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10
                                flex items-center justify-center text-2xl md:text-3xl
                                text-emerald-600 border border-emerald-500/20
                                group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <SiGooglemarketingplatform />
                            </div>
                            <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-cyan-500/10
                                flex items-center justify-center text-2xl md:text-3xl
                                text-cyan-600 border border-cyan-500/20 shadow-xl
                                group-hover:bg-cyan-600 group-hover:text-white transition-all">
                                <SiWordpress />
                            </div>
                        </div>
                        <div className={isRtl ? 'text-right' : 'text-left'}>
                            <h4 className="font-black text-[9px] uppercase tracking-[0.15em] text-slate-400 dark:text-gray-600 mb-1">
                                Ecosystem Mastery
                            </h4>
                            <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base group-hover:text-cyan-500 transition-colors">
                                Marketing & CMS
                            </p>
                            <p className="text-[9px] text-cyan-500 font-bold uppercase italic mt-0.5">
                                Ecole d'excellence
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-gray-500 leading-relaxed font-medium mt-2 hidden sm:block">
                                {isRtl
                                    ? 'تكامل استراتيجيات SEO وWordPress لتطوير منصات رقمية.'
                                    : 'Integrating SEO and WordPress for high-conversion digital ecosystems.'}
                            </p>
                        </div>
                    </a>
                </motion.div>

                {/* CAP Mastery */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <a
                        href="https://www.facebook.com/atelierpro18?locale=ar_AR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]
                            bg-slate-50/50 dark:bg-white/[0.01]
                            border border-slate-200 dark:border-white/5
                            flex flex-row items-center gap-5 md:gap-8 h-full
                            transition-all hover:bg-white dark:hover:bg-white/[0.02]
                            shadow-sm group"
                    >
                        <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 rounded-2xl
                            bg-orange-500/10 flex items-center justify-center
                            text-2xl md:text-3xl text-orange-600 border border-orange-500/20
                            group-hover:bg-orange-600 group-hover:text-white transition-all">
                            <MdIcons.MdRestaurant />
                        </div>
                        <div className={isRtl ? 'text-right' : 'text-left'}>
                            <h4 className="font-black text-[9px] uppercase tracking-[0.15em] text-slate-400 dark:text-gray-600 mb-1">
                                Technical Precision
                            </h4>
                            <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base group-hover:text-cyan-500 transition-colors">
                                Professional CAP
                            </p>
                            <p className="text-[9px] text-cyan-500 font-bold uppercase italic mt-0.5">
                                Analytical Methodology
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-gray-500 leading-relaxed font-medium mt-2 hidden sm:block">
                                {isRtl
                                    ? 'توظيف منهجية الدقة في تحسين جودة وهيكلة الأكواد البرمجية.'
                                    : 'Applying meticulous methodologies to optimize code structure and quality.'}
                            </p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
