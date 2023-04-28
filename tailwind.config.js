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
        error: "#e73318",
        success: "#3dc518",
        inprogress: "#f3880A",
        footer: "#F1F1F1",
        primary: "#E5397B",
        "primary-text": "#121212",
        "info-badge": "#D12D17",
        'gray-card': "#F3F3F8",
      },

      fontFamily: {
        sans: ["Inter, sans-serif"],
      },

      spacing: {
        '50' : '50rem',
        '35' : '35rem',
      },

      screens: {
        'xs': '428px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'tab': '952px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

