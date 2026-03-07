import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    FaReact, FaLaravel, FaPhp, FaGithub, FaDocker, FaJava, FaWordpress
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiMysql, SiPostman, SiJavascript,
    SiFramer, SiCplusplus, SiGoogleads
} from 'react-icons/si';

/**
 * Skills Component
 * * Optimized for professional technical presentation with vibrant, original technology colors.
 * Features a dynamic hover effect that intensifies the color and adds a subtle glow.
 */
export const Skills = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const SKILLS_DATA = [
        {
            category: "Frontend",
            label: isRtl ? "تطوير الواجهات" : "Frontend Architecture",
            items: [
                { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
                { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
                { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "Framer", icon: <SiFramer />, color: "#9333ea" },
            ]
        },
        {
            category: "Backend",
            label: isRtl ? "الأنظمة وقواعد البيانات" : "Backend & Systems",
            items: [
                { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
                { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
                { name: "Java", icon: <FaJava />, color: "#ED8B00" },
                { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
                { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
            ]
        },
        {
            category: "Workflow",
            label: isRtl ? "أدوات العمل والإدارة" : "Workflow & Ecosystem",
            items: [
                { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
                { name: "Marketing", icon: <SiGoogleads />, color: "#4285F4" },
                { name: "GitHub", icon: <FaGithub />, color: "#181717" },
                { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
                { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 max-w-7xl mx-auto bg-transparent">
            {/* Header القسم: تصميم هندسي دقيق */}
            <div className={`flex flex-col mb-20 ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 text-purple-600 dark:text-purple-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}
                >
                    <div className="w-10 h-[1.5px] bg-purple-600/30" />
                    {isRtl ? "القدرات التقنية" : "Technical Arsenal"}
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
                    CORE <span className="text-slate-400 dark:text-gray-600 font-light italic">STACK.</span>
                </h2>
            </div>

            {/* شبكة البطاقات: تصميم هندسي مدمج وملون */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS_DATA.map((group, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
                    >
                        <div className="relative z-10">
                            <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-gray-600 mb-12 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_#A855F7]" />
                                {group.label}
                            </h3>

                            <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                                {group.items.map((skill, j) => (
                                    <motion.div
                                        key={j}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex flex-col items-center justify-center gap-3 group/item cursor-default"
                                    >
                                        <div
                                            style={{ color: skill.color }}
                                            className="text-4xl md:text-5xl transition-all duration-500 group-hover/item:drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors text-center leading-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};