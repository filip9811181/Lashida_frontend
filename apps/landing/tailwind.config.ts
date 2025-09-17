import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange: 'var(--orange)',
        green: 'var(--green)',
      },
      fontFamily: {
        flick: ['var(--font-gluten)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        britti: ['var(--font-britti-sans-trial)', 'sans-serif'],
        patrick: ['var(--font-patrick-hand)', 'cursive'],
        nerko: ['var(--font-nerko-one)', 'cursive'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        baskervville: ['var(--font-baskervville)', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #E1F885, #78A16D)',
        dust:'linear-gradient(180deg, #FBEDCE 0%, #958D7A 100%)',
        blueGrad:'linear-gradient(0deg, #010D24 0%, #000C21 96.01%)'
      },
      keyframes: {
        'image-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'image-scroll': 'image-scroll 40s linear infinite',
      },
    },
  },
  plugins: [
    require('@designbycode/tailwindcss-text-stroke'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-bold': {
          '-webkit-text-stroke': '2px black',
          'paint-order': 'stroke fill',
          // position: 'relative',
          // 'z-index': '1',
        },
        '.text-stroke': {
          '-webkit-text-stroke': '2px black',
          'paint-order': 'stroke',
          position: 'relative',
          'z-index': '1',
        },
        '.gradient-text': {
          backgroundImage: 'linear-gradient(to bottom right, #E1F885, #78A16D)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
         '.gradient-text2': {
          backgroundImage: 'linear-gradient(140deg, #E1F885 5.54%, #78A16D 138.74%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.text-stroke-2-black': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-3-black': {
          '-webkit-text-stroke': '3px black',
        },
        '.text-stroke-1-black': {
          '-webkit-text-stroke': '1px black',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
