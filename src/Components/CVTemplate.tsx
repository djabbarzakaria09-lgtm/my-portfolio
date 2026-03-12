import React from 'react';
import {
    FiMail, FiMapPin, FiGithub, FiGlobe, FiBriefcase, FiBookOpen, FiAward, FiUser, FiCode
} from 'react-icons/fi';

export const CVTemplate = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => {
    return (
        <div
            ref={ref}
            className="bg-white w-[210mm] min-h-[297mm] mx-auto p-[15mm] print:m-0 print:p-[15mm] font-sans text-slate-800 shadow-none border-[12px] border-slate-50 print:border-none"
            style={{ color: '#1e293b', backgroundColor: '#ffffff', boxSizing: 'border-box' }}
        >
            {/* Header: Clean & Professional */}
            <header className="border-b-[3px] border-slate-800 pb-6 mb-8 flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-5xl font-extrabold tracking-tight uppercase text-slate-900">
                        Rabie Zakaria <span className="text-cyan-600">Djebbar</span>
                    </h1>
                    <p className="text-lg font-semibold uppercase tracking-widest text-slate-500">
                        Full Stack Developer
                    </p>
                </div>

                <div className="text-right space-y-1.5 font-medium text-[11px] text-slate-600">
                    <div className="flex items-center justify-end gap-2">
                        <span>djabbarzakaria09@gmail.com</span> <FiMail className="text-slate-400" />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span>Algiers, Algeria</span> <FiMapPin className="text-slate-400" />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span>github.com/djabbarzakaria09-lgtm</span> <FiGithub className="text-slate-400" />
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-10 border-b border-slate-200 pb-8 mb-8">
                {/* Right/Main Column (8 spans) */}
                <div className="col-span-8 space-y-10">
                    {/* Profile Summary */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiUser className="text-cyan-600" size={20} />
                            <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Professional Profile</h2>
                        </div>
                        <p className="text-[12px] leading-relaxed text-slate-600 font-medium text-justify">
                            Passionate Full Stack Developer with expertise in crafting robust, scalable web applications. Bringing a strong foundation in both front-end and back-end architectures, leveraging modern frameworks like React and Laravel. Dedicated to transforming complex problems into intuitive, high-performance solutions while upholding the highest standards of code quality, structural integrity, and exceptional user experience.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiBriefcase className="text-cyan-600" size={20} />
                            <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Work Experience</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-[14px] font-bold text-slate-900">ANEP Messagerie Express</h3>
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Mar 2024 — Present</span>
                                </div>
                                <p className="text-[12px] font-semibold text-cyan-600 mb-2">Full Stack Developer (Apprenticeship)</p>
                                <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                                    Developing enterprise-level solutions leveraging Laravel and React. Focused on architecting modular components, ensuring comprehensive data integrity, and significantly optimizing overall system performance to meet corporate standards.
                                </p>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-[14px] font-bold text-slate-900">Spacesortium</h3>
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Oct 2024 —  Fev 2025</span>
                                </div>
                                <p className="text-[12px] font-semibold text-cyan-600 mb-2">Frontend Engineering Intern</p>
                                <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                                    Contributed to high-fidelity UI/UX implementation and maintained a clean, scalable codebase using modern frontend structural standards and responsive design practices.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiCode className="text-cyan-600" size={20} />
                            <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Selected Projects</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { title: "Shadow Seekers", stack: "React, Laravel, WebSockets", desc: "Interactive full-stack platform with real-time features." },
                                { title: "Academic System", stack: "PHP, Laravel, MySQL", desc: "Enterprise-grade academic management architecture." },
                                { title: "Supermarket Store", stack: "React, Tailwind CSS", desc: "Responsive, high-performance e-commerce interface." },
                                { title: "Company Website", stack: "React, WordPress API", desc: "Optimized corporate identity and digital ecosystem." }
                            ].map((item) => (
                                <div key={item.title} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                                    <h4 className="text-[12px] font-bold text-slate-900 mb-0.5">{item.title}</h4>
                                    <p className="text-[9px] font-semibold text-cyan-600 mb-1.5">{item.stack}</p>
                                    <p className="text-[10px] leading-snug text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Left/Sidebar Column (4 spans) */}
                <div className="col-span-4 space-y-10">
                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiBookOpen className="text-cyan-600" size={18} />
                            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Education</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-[11px] font-bold text-slate-900">Higher Technician Degree</h4>
                                <p className="text-[10px] text-cyan-600 font-medium mt-0.5">INSFP Sidi Abdellah</p>
                                <p className="text-[9px] text-slate-500 mt-1">Web & Mobile Development</p>
                                <p className="text-[9px] text-slate-400 mt-0.5">2024 - Present</p>
                            </div>
                        </div>
                    </section>

                    {/* Core Stack */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiAward className="text-cyan-600" size={18} />
                            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Technical Skills</h2>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-800 mb-1 uppercase">Frontend</h4>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-medium">React.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-800 mb-1 uppercase">Backend</h4>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-medium">Laravel, PHP, MySQL, Java, C++</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-800 mb-1 uppercase">Tools & Workflow</h4>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-medium">Git / GitHub, Docker, Postman, WordPress</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiAward className="text-cyan-600" size={18} />
                            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Certifications</h2>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-[11px] font-bold text-slate-900">Digital Marketing</h4>
                                <p className="text-[9px] font-medium text-slate-600 mt-0.5">Ecole d'excellence - 2023</p>
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-slate-900">Technical English</h4>
                                <p className="text-[9px] font-medium text-slate-600 mt-0.5">Insight English Academy/ British council</p>
                            </div>
                        </div>
                    </section>

                    {/* Languages */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FiGlobe className="text-cyan-600" size={18} />
                            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 w-full pb-1">Languages</h2>
                        </div>
                        <ul className="space-y-2">
                            {["Arabic (Native)", "English (Good)", "French (Intermediate)"].map(lang => (
                                <li key={lang} className="text-[10px] font-medium text-slate-600 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            <footer className="mt-auto pt-2 flex justify-between items-center text-slate-400">
                <p className="text-[8px] font-bold uppercase tracking-widest">© 2026 Djebbar Rabie Zakaria</p>
                <div className="text-[8px] font-medium">References available upon request</div>
            </footer>
        </div>
    );
});

CVTemplate.displayName = "CVTemplate";