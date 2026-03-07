import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as MdIcons from 'react-icons/md';
import { SiGooglemarketingplatform, SiWordpress } from 'react-icons/si';

/**
 * Experience Component
 * Refined for institutional presentation with active links for all certifications.
 */
export const Experience = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const RESUME_DATA = [
        {
            id: 1,
            icon: <MdIcons.MdBusinessCenter />,
            period: "2024 - Present",
            title: "ANEP Messagerie Express",
            sub: "Full Stack Developer (Apprenticeship)",
            desc: isRtl
                ? "المساهمة في تطوير وصيانة الأنظمة البرمجية الداخلية، وبناء حلول متكاملة باستخدام Laravel و React ضمن بيئة عمل مؤسساتية."
                : "Contributing to the development and maintenance of internal enterprise systems, building full-stack solutions with Laravel & React in a corporate environment.",
            url: "https://www.anepme.dz/"
        },
        {
            id: 2,
            icon: <MdIcons.MdCode />,
            period: "2024",
            title: "Spacesortium",
            sub: "Frontend Engineering Intern",
            desc: isRtl
                ? "التركيز على تحسين واجهات المستخدم (UI/UX) وكتابة كود نظيف وقابل للصيانة، مع ضمان توافق المواقع مع مختلف الشاشات."
                : "Focused on UI/UX optimization and writing clean, maintainable code, ensuring responsive design across all platforms.",
            url: "https://www.spacesortium.com"
        },
        {
            id: 3,
            icon: <MdIcons.MdSchool />,
            period: "2024 - Present",
            title: "INSFP Sidi Abdellah",
            sub: "Higher Technician Degree (Web & Mobile Dev)",
            desc: isRtl
                ? "دراسة متخصصة في هندسة الويب، إدارة قواعد البيانات، وتطوير تطبيقات الجوال باستخدام أحدث التقنيات."
                : "Academic focus on web engineering, database management, and mobile application development using modern frameworks.",
            url: "https://www.facebook.com/profile.php?id=100089009375724"
        },
        {
            id: 5,
            icon: <MdIcons.MdGTranslate />,
            period: "2024",
            title: "Technical English",
            sub: "British Council & Insight Academy",
            desc: isRtl
                ? "تعزيز مهارات التواصل باللغة الإنجليزية التقنية لضمان القدرة على العمل ضمن فرق دولية وفهم الوثائق البرمجية."
                : "Enhancing technical English communication skills to work effectively within international teams and understand complex documentation.",
            url: "https://www.britishcouncil.dz"
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-transparent">
            {/* Section Header */}
            <div className={`flex flex-col md:flex-row justify-between items-end mb-24 gap-8 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl text-slate-900 dark:text-white"
                >
                    <div className={`flex items-center gap-3 text-purple-600 dark:text-purple-500 font-black text-[10px] uppercase tracking-[0.4em] mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-[1.5px] bg-purple-600/30" />
                        {isRtl ? "المسار المهني" : "Professional Path"}
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        PRO <span className="text-slate-400 dark:text-gray-700 font-light italic">RESUME.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`text-slate-500 dark:text-gray-500 font-medium text-xs md:text-sm max-w-xs ${isRtl ? 'text-right border-r-2 pr-6' : 'text-left border-l-2 pl-6'} border-purple-500/20`}
                >
                    <p className="leading-relaxed">
                        {isRtl
                            ? "توثيق للتجارب المهنية والمسار الأكاديمي الذي يجمع بين تطوير البرمجيات والحلول الرقمية المتكاملة."
                            : "A refined chronicle of professional engagements and academic milestones in software engineering and digital solutions."}
                    </p>
                </motion.div>
            </div>

            {/* Experience Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            className="group block relative p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-sm hover:shadow-xl h-full"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-4 rounded-2xl text-2xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest px-4 py-1.5 bg-slate-50 dark:bg-white/5 rounded-full border border-slate-100 dark:border-white/5">
                                    {item.period}
                                </span>
                            </div>

                            <div className={`space-y-3 ${isRtl ? 'text-right' : 'text-left'}`}>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-purple-600 dark:text-purple-500 font-black text-[9px] uppercase tracking-[0.2em] italic">
                                    {item.sub}
                                </p>
                                <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Complementary Competencies with Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Marketing & CMS Strategy Link */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <a
                        href="https://www.facebook.com/Formation.Professionnelle.UE?locale=ar_AR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-10 rounded-[2.5rem] bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row items-center gap-8 h-full transition-all hover:bg-white dark:hover:bg-white/[0.02] shadow-sm group block"
                    >
                        <div className="flex -space-x-4">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl text-emerald-600 border border-emerald-500/20 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all"><SiGooglemarketingplatform /></div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl text-blue-600 border border-blue-500/20 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all"><SiWordpress /></div>
                        </div>
                        <div className={isRtl ? 'text-right' : 'text-left'}>
                            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-gray-600 mb-2">Ecosystem Mastery</h4>
                            <p className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-purple-600 transition-colors">Marketing & CMS Strategy</p>
                            <p className="text-[10px] text-purple-500 font-bold uppercase italic mb-3">Ecole d'excellence Certified</p>
                            <p className="text-xs text-slate-600 dark:text-gray-500 leading-relaxed font-medium">
                                {isRtl ? "تكامل استراتيجيات SEO وWordPress لتطوير منصات رقمية تتسم بالكفاءة والانتشار." : "Integrating SEO and WordPress frameworks to develop scalable, high-conversion digital ecosystems."}
                            </p>
                        </div>
                    </a>
                </motion.div>

                {/* Pastry Precision Link */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <a
                        href="https://www.facebook.com/atelierpro18?locale=ar_AR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-10 rounded-[2.5rem] bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row items-center gap-8 h-full transition-all hover:bg-white dark:hover:bg-white/[0.02] shadow-sm group block"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl text-orange-600 border border-orange-500/20 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all"><MdIcons.MdRestaurant /></div>
                        <div className={isRtl ? 'text-right' : 'text-left'}>
                            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-gray-600 mb-2">Technical Precision</h4>
                            <p className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-purple-600 transition-colors">Professional CAP Mastery</p>
                            <p className="text-[10px] text-purple-500 font-bold uppercase italic mb-3">Analytical Methodology</p>
                            <p className="text-xs text-slate-600 dark:text-gray-500 leading-relaxed font-medium">
                                {isRtl ? "توظيف منهجية الدقة والتنظيم المكتسبة أكاديمياً في تحسين جودة وهيكلة الأكواد البرمجية." : "Applying meticulous organizational methodologies from professional certification to optimize code structure and quality."}
                            </p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};