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
                    black: "#0F1115", // Richer, slightly cool black
                    white: "#ffffff",
                    dark: "#0a0a0a",
                    light: "#F5F7FA", // Premium cool gray surface
                    gray: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        400: "#9CA3AF",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#1F2937",
                        900: "#111827",
                    }
                },
                accent: {
                    DEFAULT: "#0F1115",
                    hover: "#262626",
                },
                surface: {
                    light: "#ffffff",
                    dim: "#F5F7FA", // Secondary light surface
                    dark: "#121212",
                    elevated: "#1e1e1e",
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
                'premium': '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 20px rgba(0, 0, 0, 0.05)',
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
