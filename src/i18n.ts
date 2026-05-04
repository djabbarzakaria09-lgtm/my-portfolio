import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * i18n Configuration
 * Full Translation Protocol: Ensures names and content are fully localized 
 * across Arabic, French, and English for a seamless user experience.
 */

const resources = {
    en: {
        translation: {
            // Navigation & General
            "About": "About",
            "Experience": "Journey",
            "Skills": "Expertise",
            "Contact": "Contact",
            "LiveDemo": "Live Preview",
            "Source": "Repository",

            // Hero Section (Full English)
            "HERO_NAME_FIRST": "Rabie Zakaria",
            "HERO_NAME_LAST": "Djebbar",
            "HERO_SUBTITLE": "Full Stack Web & Mobile Developer",
            "HERO_DESC": "Architecting high-performance digital solutions with technical precision and professional execution.",
            "view_projects": "View Portfolio",
            "contact_me": "Initiate Contact",

            // Experience Section
            "ExperienceTitle": "Professional Trajectory",
            "EducationTitle": "INSFP Sidi Abdellah",
            "EducationDesc": "Higher Technician in Web & Mobile Development - Current Apprenticeship.",
            "Exp1Desc": "Frontend Engineering and UI optimization internship at Spacesortium.",
            "Exp2Desc": "Full-stack development and system maintenance at ANEP Messagerie Express.",
            "MarketingCMS": "Marketing & CMS Strategy",
            "ProfessionalPrecision": "Professional Precision (CAP)",

            // Skill Categories
            "Frontend": "Frontend Architecture",
            "Backend": "Backend & Systems",
            "Tools": "Ecosystem & Workflow"
        }
    },
    ar: {
        translation: {
            // Navigation & General
            "About": "عنّي",
            "Experience": "المسار",
            "Skills": "الخبرات",
            "Contact": "تواصل معي",
            "LiveDemo": "عرض حي",
            "Source": "المستودع",

            // Hero Section (Full Arabic Localization)
            "HERO_NAME_FIRST": "رابيع زكريا",
            "HERO_NAME_LAST": "جبار",
            "HERO_SUBTITLE": "مطور ويب وجوال متكامل • تقني سامٍ",
            "HERO_DESC": "أقوم ببناء تطبيقات ويب عالية الكفاءة وأنظمة رقمية متطورة تركز على الأداء النظيف والمعايير الاحترافية.",
            "view_projects": "استعراض الأعمال",
            "contact_me": "تواصل الآن",

            // Experience Section
            "ExperienceTitle": "المسار المهني والأكاديمي",
            "EducationTitle": "معهد INSFP سيدي عبد الله",
            "EducationDesc": "شهادة تقني سامٍ في تطوير الويب والجوال - نمط التمهين.",
            "Exp1Desc": "تدريب عملي في هندسة الواجهات وتحسين تجربة المستخدم في Spacesortium.",
            "Exp2Desc": "تطوير وصيانة الحلول البرمجية المتكاملة في مؤسسة ANEP Messagerie Express.",
            "MarketingCMS": "استراتيجيات التسويق وإدارة المحتوى",
            "ProfessionalPrecision": "الدقة المهنية (شهادة CAP)",

            // Skill Categories
            "Frontend": "تطوير الواجهات",
            "Backend": "الأنظمة والأساس",
            "Tools": "الأدوات والبيئة"
        }
    },
    fr: {
        translation: {
            // Navigation & General
            "About": "À Propos",
            "Experience": "Parcours",
            "Skills": "Expertise",
            "Contact": "Contact",
            "LiveDemo": "Démo Live",
            "Source": "Dépôt Code",

            // Hero Section (Full French Localization)
            "HERO_NAME_FIRST": "Rabie Zakaria",
            "HERO_NAME_LAST": "Djebbar",
            "HERO_SUBTITLE": "Développeur Full Stack Web & Mobile • TS",
            "HERO_DESC": "Conception de solutions numériques haute performance avec une précision technique et une exécution rigoureuse.",
            "view_projects": "Voir Projets",
            "contact_me": "Me Contacter",

            // Experience Section
            "ExperienceTitle": "Trajectoire Professionnelle",
            "EducationTitle": "INSFP Sidi Abdellah",
            "EducationDesc": "Technicien Supérieur en Développement Web & Mobile - Mode Apprentissage.",
            "Exp1Desc": "Stage en ingénierie Frontend et optimisation UI chez Spacesortium.",
            "Exp2Desc": "Développement Full-stack et maintenance de systèmes chez ANEP Messagerie Express.",
            "MarketingCMS": "Stratégie Marketing & CMS",
            "ProfessionalPrecision": "Précision Professionnelle (CAP)",

            // Skill Categories
            "Frontend": "Architecture Frontend",
            "Backend": "Backend & Systèmes",
            "Tools": "Écosystème & Workflow"
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;