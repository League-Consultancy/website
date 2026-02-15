/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    black: "#121212", // Softer black for dark mode background
                    white: "#ffffff",
                    dark: "#0a0a0a",
                    light: "#f5f5f5",
                    gray: {
                        50: "#f9fafb",
                        100: "#f3f4f6",
                        200: "#e5e7eb",
                        300: "#d1d5db",
                        400: "#9ca3af",
                        500: "#6b7280", // Darker gray for better contrast ( WCAG compliant)
                        600: "#4b5563",
                        700: "#374151",
                        800: "#1f2937",
                        900: "#111827",
                    }
                },
                accent: {
                    DEFAULT: "#000000",
                    hover: "#262626",
                },
                surface: {
                    light: "#ffffff",
                    dark: "#121212",
                    elevated: "#1e1e1e",
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                'super-widest': '0.3em',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
