/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite entry file
    "./src/**/*.{js,jsx,ts,tsx}", // React components
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"], // Custom Geist font
      },
      colors: {
        primary: "#0978fd", // Custom button/text color
      },
    },
  },
  plugins: [],
};
