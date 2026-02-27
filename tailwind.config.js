/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        logo: ["Orbitron", "sans-serif"],
        tech: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
}
