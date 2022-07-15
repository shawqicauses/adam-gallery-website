module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xl-2": "1536px"
    },
    maxWidth: {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content"
    },
    fontFamily: {
      "poppins": "poppins, sans-serif",
      "sans-serif": "sans-serif"
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "xl-2": "1.5rem",
      "xl-3": "2rem",
      "xl-4": "2.25rem",
      "xl-5": "3rem",
      "xl-6": "3.75rem"
    },
    fontWeight: {
      "thin": 100,
      "extra-light": 200,
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semi-bold": 600,
      "bold": 700,
      "extra-bold": 800,
      "black": 900
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "base": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "100rem"
    },
    blur: {
      "none": "0",
      "sm": "4px",
      "base": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "xl-2": "40px",
      "xl-3": "64px"
    },
    columns: {},
    boxShadow: {},
    dropShadow: {}
  },
  plugins: []
}
