import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiArrowUpRight, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import './Contact.css'; // تأكد من وجود هذا السطر

export const Contact = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="contact-container relative bg-white dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-[3.5rem] p-12 md:p-24 overflow-hidden shadow-2xl backdrop-blur-3xl"
            >
                {/* تم تغيير اللون هنا من أرجواني إلى سيان */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className={`${isRtl ? 'text-right' : 'text-left'} space-y-10`}>
                        <motion.div
                            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            /* تم تغيير text-purple إلى text-cyan */
                            className={`flex items-center gap-4 text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em] ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                            <div className="w-10 h-[1.5px] bg-cyan-600/30" />
                            {isRtl ? "تواصل رسمي" : "Professional Inquiry"}
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 dark:text-white">
                            LET'S <br />
                            <span className="text-slate-400 dark:text-gray-600 font-light italic">CONNECT.</span>
                        </h2>

                        <div className="space-y-8">
                            <p className="text-slate-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed font-medium max-w-md">
                                {isRtl
                                    ? "متاح حالياً للمشاريع الاستراتيجية والتعاون التقني المتطور. أهتم بتحويل المتطلبات المعقدة إلى حلول برمجية عالية الأداء."
                                    : "Currently available for strategic projects and advanced technical collaborations. Focused on architecting high-performance solutions for complex requirements."}
                            </p>

                            <div className={`flex flex-col gap-4 ${isRtl ? 'items-end' : 'items-start'}`}>
                                <div className={`flex items-center gap-3 text-slate-500 dark:text-gray-500 font-bold text-[9px] uppercase tracking-widest ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <FiMapPin className="text-cyan-500" /> Algiers, Algeria
                                </div>
                                <div className={`flex items-center gap-3 text-emerald-600 dark:text-emerald-500 font-bold text-[9px] uppercase tracking-widest ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    {isRtl ? "متاح للتعاقد" : "Open for engagements"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full lg:max-w-[380px] ml-auto">
                        <motion.a
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            href="mailto:djabbarzakaria09@gmail.com"
                            /* تم تغيير hover:bg-purple إلى hover:bg-cyan */
                            className="flex items-center justify-between group bg-slate-900 dark:bg-white text-white dark:text-black p-8 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl hover:bg-cyan-600 dark:hover:bg-cyan-600 dark:hover:text-white"
                        >
                            <span className="flex items-center gap-4">
                                <FiSend size={18} />
                                <span>{isRtl ? "بدء المراسلة" : "INITIATE EMAIL"}</span>
                            </span>
                            <FiArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <FiGithub />, label: "GitHub", link: "https://github.com/djabbarzakaria09-lgtm" },
                                { icon: <FiLinkedin />, label: "LinkedIn", link: "#" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ y: -4, backgroundColor: "rgba(34, 211, 238, 0.05)" }}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    /* تم تغيير hover:text-purple إلى hover:text-cyan */
                                    className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-500 transition-all hover:text-cyan-500 dark:hover:text-white"
                                >
                                    <div className="text-2xl">{social.icon}</div>
                                    <span className="text-[9px] font-black uppercase tracking-widest">{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};