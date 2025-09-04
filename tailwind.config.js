/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: 'oklch(0.6359 0.1 203)',
        },
      },
    },
  },
  plugins: [],
}

