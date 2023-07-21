module.exports = {
  purge: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#ffffff",
      black: "#000000",
      purple: "#8b31ff",
      red: "#cf0000",
      green: "#00ac56",
      indigo: {
        light: "#9f55ff",
        dark: "#7000ff",
      },
      primary: {
        graydark: "#736B8E",
        graydark50: "#9D98B0",
        purple: "#6E2DFA",
        purple50: "#C3AFED",
        purple10: "#F1EAFE"
      },
      secondary: {
        graylight: "#E0DBED",
        greendark: "#00B493"
      },
    },
    fontFamily: {
      sans: ["Calibre", "sans-serif"],
      mono: ['"JetBrains Mono"', "monospace"],
      sysui: ['system-ui'],
      revert: ['revert'],
    },
    backgroundImage: {
      none: "none",
      linear: "var(--gradient-accent, linear-gradient(90deg, #5F72BD 0%, #9B23EA 100%))",
      gradientblack: "var(--gradient-accent, linear-gradient(0deg, #000000   0%, #00000000 100%))",
      reason: "public/reason/Rectangle 94.png"
    },
  },
  plugins: []
};