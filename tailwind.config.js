/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00bcf9",
                "background-light": "#ffffff",
                "background-dark": "#050810",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                sans: ["Poppins", "sans-serif"], // Setting as default sans font
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
