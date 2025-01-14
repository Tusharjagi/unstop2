/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        grey: "var(--grey)",
        primary: "var(--primary)",
        offWhite: "var(--offWhite)",
        cream: "var(--cream)",
        darkBlack: "var(--darkBlack)",
      },
    },
  },
  plugins: [],
};
