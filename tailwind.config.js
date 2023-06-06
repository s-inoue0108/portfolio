/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {

    extend: {
      colors: {
        'navy-blue': '#000b29',
        'light-navy-blue': '#383c57',
      },
    },

    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
    },

  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#000b29',
          'secondary': '#383c57',
          'neutral': '#ffffff',
        },
      },
    ],
  },
}

