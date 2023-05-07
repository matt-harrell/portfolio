/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#FFFEF7',
      'tan':'#DFC5A4',
      'light-blue':'#627D9A',
      'dark-blue':'#2E3257',
      'grey':'#BABBBD',
      'black':'#000424'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation:{
        fadeInLeft: 'fadeInLeft 1s ease-in',
        fadeInRight: 'fadeInRight 1s ease-in',
        fadeInTop: 'fadeInTop 1s ease-in',
      },
      keyframes:{
        fadeInLeft:{
          '0%':{marginLeft:'-50%', opacity:0},
          '100%':{marginLeft:'0%',opacity:1}
        },
        fadeInRight:{
          '0%':{marginRight:'-50%', opacity:0},
          '100%':{marginRight:'0%',opacity:1}
        },
        fadeInTop:{
          '0%':{marginBottom:'-50%', opacity:0},
          '100%':{marginBottom:'0%',opacity:1}
        },
      }
    }
  },
  plugins: [],
}

