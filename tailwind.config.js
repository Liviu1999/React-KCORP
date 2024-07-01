/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-cat": "url('/cat.jpg')",
      },
    },
  },
  plugins: [],
};
