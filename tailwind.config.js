/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-100": "#FFFFFF",
        "light-200": "#FFFAF1",
        "light-300": "#E1E1E6",
        "light-400": "#C4C4CC",
        "light-500": "#7C7C8A",
        "light-600": "#76797B",
        "light-700": "#4D585E",
        "dark-100": "#000405",
        "dark-200": "#00070A",
        "dark-300": "#000204",
        "dark-400": "#000A0F",
        "dark-500": "#000C12",
        "dark-600": "#00111A",
        "dark-700": "#001119",
        "dark-800": "#0D161B",
        "dark-900": "#0D1D25",
        "dark-1000": "#192227",
        "from-gradient-100": "rgba(0, 10, 15, 0.27)",
        "to-gradient-100": "#000A0F",
        "from-gradient-200": "#091E26",
        "to-gradient-200": "#00131C",
        "tomato-100": "#750310",
        "tomato-200": "#92000E",
        "tomato-300": "#AB222E",
        "tomato-400": "#AB4D55",
        "mint-100": "#04D361",
        "cake-200": "#82F3FF",
        "cake-100": "#065E7C",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .5s linear",
      },
    },
  },
  plugins: [],
};
