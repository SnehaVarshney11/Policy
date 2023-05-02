/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary_btn_dark: "#11ABCD",
        secondary: "#69239B",
        tertiary: "#Fa1e82",
        primary_dark: "#28232C",
        secondary_dark: "#A1A1A1",
        dark_button: " #342F38",
        black: "#121212",
        medium_gray: "#585858",
        light_gray: "#f1f1f1",
        gray_50: '#f8fafc',
        grey: '#777777',
        error: "#e73318",
        success: "#3dc518",
        inprogress: "#f3880A",
        footer: "#F1F1F1",
        primary: "#E5397B",
        "primary-text": "#121212",
        "info-badge": "#D12D17",
        'gray-card': "#F3F3F8",
        'light': "#F4F4F4",
      },

      fontFamily: {
        sans: ["Inter, sans-serif"],
      },

      spacing: {
        '50' : '52rem',
        '35' : '35rem',
      },

      screens: {
        'desktop': '1075px',
        'tab': '721px',
        'big': '1145px',
      },
    },
  },
  plugins: [],
}

