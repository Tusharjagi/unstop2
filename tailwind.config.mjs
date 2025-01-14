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
        charlestonGreen: "var(--charlestonGreen)",
        white: "var(--white)",
        grey: "var(--grey)",
        primary: "var(--primary)",
        offWhite: "var(--offWhite)",
        cream: "var(--cream)",
        darkBlack: "var(--darkBlack)",
        metallicSeaweed: "var(--metallicSeaweed)",
        red: "var(--red)",
        mossGreen: "var(--mossGreen)",
      },
    },
  },
  plugins: [],
};
