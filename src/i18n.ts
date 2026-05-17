import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // ── Navigation ──
            'About': 'About',
            'Experience': 'Journey',
            'Skills': 'Expertise',
            'Projects': 'Projects',   // ← كان مفقوداً
            'Contact': 'Contact',

            // ── Links & Labels ──
            'LiveDemo': 'Live Preview',
            'Source': 'Repository',
            'Arsenal': 'Arsenal',      // ← كان مفقوداً
            'Technical': 'Technical',   // ← كان مفقوداً

            // ── Hero ──
            'HERO_NAME_FIRST': 'Rabie Zakaria',
            'HERO_NAME_LAST': 'Djebbar',
            'HERO_SUBTITLE': 'Full Stack Web & Mobile Developer',
            'HERO_DESC': 'Architecting high-performance digital solutions with technical precision and professional execution.',
            'view_projects': 'View Portfolio',
            'contact_me': 'Initiate Contact',

            // ── Experience ──
            'ExperienceTitle': 'Professional Trajectory',
            'EducationTitle': 'INSFP Sidi Abdellah',
            'EducationDesc': 'Higher Technician in Web & Mobile Development - Current Apprenticeship.',
            'Exp1Desc': 'Frontend Engineering and UI optimization internship at Spacesortium.',
            'Exp2Desc': 'Full-stack development and system maintenance at ANEP Messagerie Express.',
            'MarketingCMS': 'Marketing & CMS Strategy',
            'ProfessionalPrecision': 'Professional Precision (CAP)',

            // ── Skills ──
            'Frontend': 'Frontend Architecture',
            'Backend': 'Backend & Systems',
            'Tools': 'Ecosystem & Workflow',

            // ── Projects Descriptions ──  ← كانت كلها مفقودة
            'ProjectDesc1': 'Interactive full-stack platform with real-time multiplayer features built with React, Laravel and WebSockets.',
            'ProjectDesc2': 'Enterprise-grade academic management system with role-based access control and reporting dashboards.',
            'ProjectDesc3': 'Responsive, high-performance e-commerce interface with product filtering and cart management.',
            'ProjectDesc4': 'Optimized corporate identity website integrating the WordPress REST API with a React frontend.',
        },
    },

    ar: {
        translation: {
            // ── Navigation ──
            'About': 'عنّي',
            'Experience': 'المسار',
            'Skills': 'الخبرات',
            'Projects': 'المشاريع',   // ← كان مفقوداً
            'Contact': 'تواصل معي',

            // ── Links & Labels ──
            'LiveDemo': 'عرض حي',
            'Source': 'المستودع',
            'Arsenal': 'الترسانة',    // ← كان مفقوداً
            'Technical': 'تقني',        // ← كان مفقوداً

            // ── Hero ──
            'HERO_NAME_FIRST': 'رابيع زكريا',
            'HERO_NAME_LAST': 'جبار',
            'HERO_SUBTITLE': 'مطور ويب وجوال متكامل • تقني سامٍ',
            'HERO_DESC': 'أقوم ببناء تطبيقات ويب عالية الكفاءة وأنظمة رقمية متطورة تركز على الأداء النظيف والمعايير الاحترافية.',
            'view_projects': 'استعراض الأعمال',
            'contact_me': 'تواصل الآن',

            // ── Experience ──
            'ExperienceTitle': 'المسار المهني والأكاديمي',
            'EducationTitle': 'معهد INSFP سيدي عبد الله',
            'EducationDesc': 'شهادة تقني سامٍ في تطوير الويب والجوال - نمط التمهين.',
            'Exp1Desc': 'تدريب عملي في هندسة الواجهات وتحسين تجربة المستخدم في Spacesortium.',
            'Exp2Desc': 'تطوير وصيانة الحلول البرمجية المتكاملة في مؤسسة ANEP Messagerie Express.',
            'MarketingCMS': 'استراتيجيات التسويق وإدارة المحتوى',
            'ProfessionalPrecision': 'الدقة المهنية (شهادة CAP)',

            // ── Skills ──
            'Frontend': 'تطوير الواجهات',
            'Backend': 'الأنظمة والأساس',
            'Tools': 'الأدوات والبيئة',

            // ── Projects Descriptions ──
            'ProjectDesc1': 'منصة تفاعلية متعددة اللاعبين في الوقت الفعلي، مبنية بـ React و Laravel و WebSockets.',
            'ProjectDesc2': 'نظام إدارة أكاديمية متكامل بصلاحيات متعددة ولوحات تقارير احترافية.',
            'ProjectDesc3': 'واجهة متجر إلكتروني متجاوبة وعالية الأداء مع تصفية المنتجات وإدارة السلة.',
            'ProjectDesc4': 'موقع هوية مؤسسية محسّن يدمج WordPress REST API مع واجهة React.',
        },
    },

    fr: {
        translation: {
            // ── Navigation ──
            'About': 'À Propos',
            'Experience': 'Parcours',
            'Skills': 'Expertise',
            'Projects': 'Projets',    // ← كان مفقوداً
            'Contact': 'Contact',

            // ── Links & Labels ──
            'LiveDemo': 'Démo Live',
            'Source': 'Dépôt Code',
            'Arsenal': 'Arsenal',     // ← كان مفقوداً
            'Technical': 'Technique',   // ← كان مفقوداً

            // ── Hero ──
            'HERO_NAME_FIRST': 'Rabie Zakaria',
            'HERO_NAME_LAST': 'Djebbar',
            'HERO_SUBTITLE': 'Développeur Full Stack Web & Mobile • TS',
            'HERO_DESC': 'Conception de solutions numériques haute performance avec une précision technique et une exécution rigoureuse.',
            'view_projects': 'Voir Projets',
            'contact_me': 'Me Contacter',

            // ── Experience ──
            'ExperienceTitle': 'Trajectoire Professionnelle',
            'EducationTitle': 'INSFP Sidi Abdellah',
            'EducationDesc': 'Technicien Supérieur en Développement Web & Mobile - Mode Apprentissage.',
            'Exp1Desc': 'Stage en ingénierie Frontend et optimisation UI chez Spacesortium.',
            'Exp2Desc': 'Développement Full-stack et maintenance de systèmes chez ANEP Messagerie Express.',
            'MarketingCMS': 'Stratégie Marketing & CMS',
            'ProfessionalPrecision': 'Précision Professionnelle (CAP)',

            // ── Skills ──
            'Frontend': 'Architecture Frontend',
            'Backend': 'Backend & Systèmes',
            'Tools': 'Écosystème & Workflow',

            // ── Projects Descriptions ──
            'ProjectDesc1': 'Plateforme interactive multijoueur en temps réel, construite avec React, Laravel et WebSockets.',
            'ProjectDesc2': 'Système de gestion académique enterprise avec contrôle d\'accès par rôles et tableaux de bord.',
            'ProjectDesc3': 'Interface e-commerce performante et responsive avec filtrage produits et gestion du panier.',
            'ProjectDesc4': 'Site d\'identité corporate optimisé intégrant l\'API REST WordPress avec un frontend React.',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n;
