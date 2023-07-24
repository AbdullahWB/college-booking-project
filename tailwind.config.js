/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#43d8b5",

          "secondary": "#de61e2",

          "accent": "#ed6a6c",

          "neutral": "#2d2834",

          "base-100": "#fcfcfd",

          "info": "#6789e0",

          "success": "#10935c",

          "warning": "#f8a50d",

          "error": "#f3537b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

