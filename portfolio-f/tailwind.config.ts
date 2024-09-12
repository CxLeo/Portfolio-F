import { Syne } from "next/font/google";
import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'layout-sm':'375px',
        'input-collapse-contact':'678px',
        'xs':'460px',
        'arrows-services':'780px',
        'service-image-left-right-calc':'1447px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xs':'340px',
        'list-r-calc':'344px',
        'text-r-calc':'510px'
      },
      fontFamily: {
        dmsans: ["DM Sans", 'sans'],
        neue:['Neue', 'sans-serif']
      },
    },
    screens: {
      'home-md': {'max': '768px'},
      'home-sm': {'max': '425px'},
      'service-detail':{'max':'680px'},
      'home-lg': '1268px',
      'home-4k': '1441px',
      'home-3k': { 'max': '1440px'},
      'pricing-lg': '1190px',
      'p-md': '1190px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'blur-r-hide':'1310px',
      '1130':'1130px'
    },
    keyframes: {
      breathe: {
        '0%': { backgroundColor: 'transparent', boxShadow: '0 0 10px rgba(0, 0, 255, 0)' },
        '75%': { backgroundColor: '#00C7A8', boxShadow: '0 0 20px #00C7A8' },
        '100%': { backgroundColor: 'transparent', boxShadow: '0 0 10px rgba(0, 0, 255, 0)' },
      },
    },
    animation: {
      breathe: 'breathe 1.5s ease-in-out infinite',
    },
    
  },
  plugins: [],
};
export default config;
