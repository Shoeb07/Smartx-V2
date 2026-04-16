/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'system-ui', 'sans-serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#050508',
        surface: '#0d0d14',
        surface2: '#13131e',
        accent: '#6c63ff',
        accent2: '#00e5b0',
        accent3: '#ff5e62',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 5s ease-in-out infinite',
        scrollDrop: 'scrollDrop 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        scrollDrop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
