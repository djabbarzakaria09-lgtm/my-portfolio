/** @type {import('tailwindcss').Config} */
export default {
    // تفعيل تبديل الوضع المظلم بناءً على الكلاس الموجود في عنصر الـ html
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            // يمكنك إضافة تخصيصات هنا مستقبلاً مثل ألوانك الخاصة
            colors: {
                brand: {
                    dark: "#05020a",
                    light: "#ffffff",
                    accent: "#9333ea"
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },

    plugins: [],
}