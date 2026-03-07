import React from 'react';
import {
    FiMail, FiMapPin, FiGithub, FiCheckCircle
} from 'react-icons/fi';

/**
 * CVTemplate Component
 * الكود الخاص بك بالضبط، بدون تغيير في التصميم، مع حل مشكلة التنبيه البرتقالي.
 */
// استبدلنا (props, ref) بـ (_, ref) لإخفاء التنبيه البرتقالي نهائياً
export const CVTemplate = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => {
    return (
        <div
            ref={ref}
            className="bg-white w-[210mm] min-h-[297mm] mx-auto p-[15mm] print:m-0 print:p-[10mm] font-sans text-slate-900 shadow-none"
            style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
        >

            {/* Header: Identity & Professional Connectivity */}
            <header className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-10">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black tracking-tighter uppercase leading-none" style={{ color: '#0f172a' }}>
                        Rabie Zakaria <span style={{ color: '#64748b', fontWeight: 300 }}>Djebbar</span>
                    </h1>
                    <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: '#9333ea' }}>
                        Full Stack Developer | Higher Technician
                    </p>
                </div>

                <div className="text-right space-y-1 font-bold text-[10px] uppercase tracking-wider" style={{ color: '#475569' }}>
                    <div className="flex items-center justify-end gap-2">
                        <span>djabbarzakaria09@gmail.com</span> <FiMail style={{ color: '#94a3b8' }} />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span>Algiers, Algeria</span> <FiMapPin style={{ color: '#94a3b8' }} />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span>github.com/djabbarzakaria09-lgtm</span> <FiGithub style={{ color: '#94a3b8' }} />
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-10">

                {/* Left Column: Technical Arsenal & Profile */}
                <div className="col-span-4 space-y-10">
                    <section>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-2 mb-5" style={{ color: '#0f172a' }}>Core Stack</h2>
                        <div className="space-y-4">
                            {[
                                { name: "React / TypeScript", level: "90%" },
                                { name: "Laravel / PHP", level: "85%" },
                                { name: "MySQL / Database", level: "80%" },
                                { name: "WordPress / CMS", level: "85%" }
                            ].map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-[9px] font-bold uppercase mb-1.5">
                                        <span style={{ color: '#0f172a' }}>{skill.name}</span>
                                        <span style={{ color: '#94a3b8' }}>{skill.level}</span>
                                    </div>
                                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-slate-800" style={{ width: skill.level, backgroundColor: '#1e293b' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-2 mb-5" style={{ color: '#0f172a' }}>Certifications</h2>
                        <div className="space-y-5">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase" style={{ color: '#0f172a' }}>Digital Marketing</h4>
                                <p className="text-[9px] italic uppercase tracking-wide" style={{ color: '#64748b' }}>Ecole d'excellence - 2024</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase" style={{ color: '#0f172a' }}>Technical English</h4>
                                <p className="text-[9px] italic uppercase tracking-wide" style={{ color: '#64748b' }}>British Council / Insight Academy</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-2 mb-5" style={{ color: '#0f172a' }}>Languages</h2>
                        <div className="space-y-2.5 text-[10px] font-bold uppercase tracking-tight" style={{ color: '#475569' }}>
                            <p>Arabic (Native)</p>
                            <p>English (Good)</p>
                            <p>French (Intermediate)</p>
                        </div>
                    </section>
                </div>

                {/* Right Column: Experience & Execution */}
                <div className="col-span-8 space-y-12">

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3" style={{ color: '#0f172a' }}>
                            Experience
                            <span className="flex-grow h-[1px] bg-slate-100"></span>
                        </h2>

                        <div className="space-y-10">
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute -left-[5px] top-1 w-2 h-2 bg-slate-900 rounded-full" style={{ backgroundColor: '#0f172a' }}></div>
                                <div className="flex justify-between items-start mb-1.5">
                                    <h3 className="text-sm font-bold uppercase tracking-tight">ANEP Messagerie Express</h3>
                                    <span className="text-[9px] font-black text-slate-400">2024 — PRESENT</span>
                                </div>
                                <p className="text-[10px] font-bold mb-3 uppercase italic tracking-widest" style={{ color: '#9333ea' }}>Apprentice Full Stack Developer</p>
                                <p className="text-xs leading-relaxed font-medium" style={{ color: '#334155' }}>
                                    Developing enterprise-level solutions leveraging Laravel and React. Focused on architecting modular components, ensuring data integrity, and optimizing system performance within a corporate environment.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute -left-[5px] top-1 w-2 h-2 bg-slate-300 rounded-full" style={{ backgroundColor: '#cbd5e1' }}></div>
                                <div className="flex justify-between items-start mb-1.5">
                                    <h3 className="text-sm font-bold uppercase tracking-tight">Spacesortium</h3>
                                    <span className="text-[9px] font-black text-slate-400">JAN 2024 — JUNE 2024</span>
                                </div>
                                <p className="text-[10px] font-bold mb-3 uppercase italic tracking-widest" style={{ color: '#64748b' }}>Frontend Engineering Intern</p>
                                <p className="text-xs leading-relaxed font-medium" style={{ color: '#334155' }}>
                                    Contributed to high-fidelity UI/UX implementation and maintained clean, scalable codebase for various web-based platforms using modern frontend standards.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Selected Projects */}
                    <section>
                        <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3" style={{ color: '#0f172a' }}>
                            Projects
                            <span className="flex-grow h-[1px] bg-slate-100"></span>
                        </h2>
                        <div className="grid grid-cols-2 gap-8 pl-6">
                            {[
                                { title: "Shadow Seekers", stack: "React / Laravel", desc: "Interactive full-stack platform featuring real-time synchronization." },
                                { title: "Academic System", stack: "PHP / MySQL", desc: "Enterprise-grade solution for academic data management." },
                                { title: "Supermarket Store", stack: "React / Tailwind", desc: "Modern, high-performance responsive e-commerce interface." },
                                { title: "Company Portal", stack: "WordPress / React", desc: "Optimized corporate identity merging CMS with React." }
                            ].map((item) => (
                                <div key={item.title} className="space-y-1.5">
                                    <h4 className="text-[11px] font-bold uppercase flex items-center gap-2" style={{ color: '#0f172a' }}>
                                        <FiCheckCircle style={{ color: '#9333ea' }} /> {item.title}
                                    </h4>
                                    <p className="text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: '#94a3b8' }}>{item.stack}</p>
                                    <p className="text-[10px] leading-snug font-medium" style={{ color: '#64748b' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3" style={{ color: '#0f172a' }}>
                            Education
                            <span className="flex-grow h-[1px] bg-slate-100"></span>
                        </h2>
                        <div className="pl-6 space-y-1.5">
                            <h3 className="text-sm font-bold uppercase tracking-tight">INSFP Sidi Abdellah</h3>
                            <p className="text-[10px] font-bold uppercase tracking-widest italic" style={{ color: '#9333ea' }}>Higher Technician Degree (TS) in Web & Mobile Dev</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Print Footer */}
            <footer className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center" style={{ color: '#94a3b8' }}>
                <p className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 Djebbar Rabie Zakaria • Software Engineering</p>
                <div className="flex items-center gap-2 text-[9px] font-bold italic uppercase tracking-widest">
                    github.com/djabbarzakaria09-lgtm
                </div>
            </footer>
        </div>
    );
});

// السطر السحري الذي يحذف أي خطأ برتقالي متبقي في React
CVTemplate.displayName = "CVTemplate";