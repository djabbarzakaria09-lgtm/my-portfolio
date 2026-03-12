import React from 'react';
import {
    FiMail, FiMapPin, FiGithub, FiCheckCircle, FiGlobe, FiBriefcase, FiBookOpen, FiAward, FiUser
} from 'react-icons/fi';

export const CVTemplate = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => {
    return (
        <div
            ref={ref}
            className="bg-white w-[210mm] min-h-[297mm] mx-auto p-[15mm] print:m-0 print:p-[10mm] font-sans text-slate-900 shadow-none border-[12px] border-slate-50"
            style={{ color: '#1e293b', backgroundColor: '#ffffff' }}
        >
            {/* Header: Blue Identity Frame */}
            <header className="flex justify-between items-center bg-slate-900 text-white p-10 rounded-3xl mb-12 relative overflow-hidden">
                {/* تأثير إضاءة أزرق خفيف في الهيدر */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="space-y-2 relative z-10">
                    <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
                        Rabie Zakaria <br />
                        <span className="text-cyan-400">Djebbar</span>
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-cyan-500"></div>
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                            Full Stack Developer
                        </p>
                    </div>
                </div>

                <div className="text-right space-y-2 relative z-10 font-medium text-[11px] tracking-wide text-slate-300 border-l border-slate-700 pl-8">
                    <div className="flex items-center justify-end gap-3">
                        <span>djabbarzakaria09@gmail.com</span> <FiMail className="text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <span>Algiers, Algeria</span> <FiMapPin className="text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <span>github.com/djabbarzakaria09-lgtm</span> <FiGithub className="text-cyan-400" />
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-12">
                {/* Left Column (Blue Accents) */}
                <div className="col-span-4 space-y-12">
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <FiAward className="text-cyan-600" size={18} />
                            <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-900">Core Stack</h2>
                        </div>
                        <div className="space-y-5">
                            {[
                                { name: "React / TypeScript", level: "90%" },
                                { name: "Laravel / PHP", level: "85%" },
                                { name: "MySQL / Database", level: "80%" },
                                { name: "WordPress / CMS", level: "85%" }
                            ].map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                                        <span className="text-slate-700">{skill.name}</span>
                                        <span className="text-cyan-600">{skill.level}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        {/* شريط تقدم أزرق متناسق */}
                                        <div className="h-full bg-cyan-500" style={{ width: skill.level }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <FiBookOpen className="text-cyan-600" size={18} />
                            <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-900">Certifications</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-cyan-500">
                                <h4 className="text-[10px] font-black uppercase text-slate-900">Digital Marketing</h4>
                                <p className="text-[9px] font-bold text-cyan-600 uppercase mt-1">Ecole d'excellence - 2024</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500">
                                <h4 className="text-[10px] font-black uppercase text-slate-900">Technical English</h4>
                                <p className="text-[9px] font-bold text-blue-600 uppercase mt-1">Insight Academy</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <FiGlobe className="text-cyan-600" size={18} />
                            <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-900">Languages</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {["Arabic (Native)", "English (Good)", "French (Intermediate)"].map(lang => (
                                <div key={lang} className="text-[10px] font-bold uppercase py-2 px-4 bg-slate-100 rounded-lg text-slate-700">
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="col-span-8 space-y-12">
                    {/* Profile Section Added */}
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <FiUser className="text-cyan-600" size={22} />
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Profile</h2>
                            <div className="flex-grow h-[2px] bg-slate-100"></div>
                        </div>
                        <p className="text-[12px] leading-relaxed text-slate-600 font-medium text-justify">
                            Passionate Full Stack Developer with expertise in crafting robust, scalable web applications. Bringing a strong foundation in both front-end and back-end architectures, leveraging modern frameworks like React and Laravel. Dedicated to transforming complex problems into intuitive, high-performance solutions while upholding the highest standards of code quality and user experience.
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <FiBriefcase className="text-cyan-600" size={22} />
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Work Experience</h2>
                            <div className="flex-grow h-[2px] bg-slate-100"></div>
                        </div>

                        <div className="space-y-12">
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100"></div>
                                <div className="absolute -left-[5px] top-2 w-3 h-3 bg-cyan-600 rounded-full border-4 border-white shadow-sm"></div>

                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-base font-black uppercase text-slate-900">ANEP Messagerie Express</h3>
                                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-[9px] font-black rounded-full">2024 — PRESENT</span>
                                </div>
                                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest mb-3">Apprentice Full Stack Developer</p>
                                <p className="text-xs leading-relaxed text-slate-500 font-medium">
                                    Developing enterprise-level solutions leveraging Laravel and React. Focused on architecting modular components, ensuring data integrity, and optimizing system performance.
                                </p>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100"></div>
                                <div className="absolute -left-[5px] top-2 w-3 h-3 bg-slate-300 rounded-full border-4 border-white shadow-sm"></div>

                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-base font-black uppercase text-slate-900">Spacesortium</h3>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-black rounded-full">JAN 2024 — JUNE 2024</span>
                                </div>
                                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Frontend Engineering Intern</p>
                                <p className="text-xs leading-relaxed text-slate-500 font-medium">
                                    Contributed to high-fidelity UI/UX implementation and maintained clean, scalable codebase using modern frontend standards.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <FiCheckCircle className="text-cyan-600" size={22} />
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Key Projects</h2>
                            <div className="flex-grow h-[2px] bg-slate-100"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Shadow Seekers", stack: "React / Laravel", desc: "Interactive full-stack platform." },
                                { title: "Academic System", stack: "PHP / MySQL", desc: "Enterprise academic management." },
                                { title: "Supermarket Store", stack: "React / Tailwind", desc: "Responsive e-commerce interface." },
                                { title: "Company Portal", stack: "WordPress / React", desc: "Optimized corporate identity." }
                            ].map((item) => (
                                <div key={item.title} className="p-5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <h4 className="text-[12px] font-black uppercase text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-[8px] font-black uppercase text-cyan-600 tracking-widest mb-2">{item.stack}</p>
                                    <p className="text-[10px] leading-snug text-slate-500 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center text-slate-400">
                <p className="text-[9px] font-black uppercase tracking-[0.4em]">© 2026 Djebbar Rabie Zakaria • Software Engineering</p>
                <div className="flex items-center gap-2 text-[9px] font-bold italic uppercase">
                    github.com/djabbarzakaria09-lgtm
                </div>
            </footer>
        </div>
    );
});

CVTemplate.displayName = "CVTemplate";