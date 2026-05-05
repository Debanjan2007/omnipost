/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 🟣 PRIMARY BRAND (Amethyst System)
                primary: {
                    DEFAULT: "#8467D7",   // Main brand color
                    light: "#9D8DF2",     // Electric lavender
                    dark: "#5D3FD3",      // Royal amethyst
                },

                // 🌫 BACKGROUND SYSTEM
                background: {
                    DEFAULT: "#F6F1F4",   // Mist lavender (main bg)
                    soft: "#F4F3F8",      // Soft cream gray
                    muted: "#E6E1F4",     // subtle panels / cards
                },

                // ⚪ UI BASE / NEUTRALS
                neutral: {
                    100: "#FFFFFF",
                    200: "#F4F3F8",
                    300: "#E6E1F4",
                    400: "#B0B0C3",
                    500: "#778899", // light slate gray
                },

                // 🧠 TEXT SYSTEM
                text: {
                    primary: "#4A5A6D",   // main readable text
                    secondary: "#778899", // muted text
                    heading: "#1F2937",   // strong headers
                    inverse: "#FFFFFF",
                },

                // ⚙️ FUNCTIONAL COLORS
                success: "#22C55E",
                error: "#EF4444",
                warning: "#F59E0B",
                info: "#3B82F6",

                // 📊 DATA VISUALIZATION (from your palette)
                data: {
                    blue: "#3F51B5",     // Indigo
                    magenta: "#D81B60",
                    orange: "#FB8C00",
                    purple: "#8E24AA",
                    teal: "#00897B",
                    violet: "#6A5ACD",
                },
            },

            // 🟣 OPTIONAL: gradients for your UI style
            backgroundImage: {
                "primary-gradient": "linear-gradient(135deg, #8467D7, #9D8DF2)",
            },

            // ✨ subtle shadows matching your soft UI
            boxShadow: {
                soft: "0 4px 20px rgba(0,0,0,0.05)",
                card: "0 2px 10px rgba(0,0,0,0.04)",
            },

            borderRadius: {
                xl: "14px",
                "2xl": "18px",
            },
        },
    },
    plugins: [],
}