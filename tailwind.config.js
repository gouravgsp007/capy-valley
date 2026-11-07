/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2B2320',
        cream: '#FFF9ED',
        snow: '#FFFFFF',
        sand: '#FDECC4',
        capy: {
          light: '#BA8C63',
          DEFAULT: '#9A6B43',
          dark: '#684323',
        },
        yuzu: {
          light: '#FFEAA7',
          DEFAULT: '#FDCB6E',
          gold: '#FFA502',
        },
        matcha: {
          light: '#E8F5E9',
          DEFAULT: '#6B8E23',
          dark: '#4A6B1A',
        },
        onsen: {
          light: '#E1F5FE',
          DEFAULT: '#4EA8DE',
          deep: '#0077B6',
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0px #2B2320',
        'brutal-lg': '6px 6px 0px #2B2320',
        'brutal-sm': '2px 2px 0px #2B2320',
        'brutal-pressed': '1px 1px 0px #2B2320',
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive', 'sans-serif'],
        cozy: ['"Nunito"', 'sans-serif'],
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatCitrus: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(8deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0px) scale(0.9)', opacity: '0.3' },
          '50%': { transform: 'translateY(-14px) scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-28px) scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        bob: 'bob 3s ease-in-out infinite',
        floatCitrus: 'floatCitrus 4s ease-in-out infinite',
        steam: 'steam 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}
