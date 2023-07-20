/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      transitionDuration: {
        4000: '4000ms',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.8)',
          },
          '66%': {
            transform: 'translate(-40px, 40px) scale(1.1)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
          plugins: [],
        },
      },
    },
  },
}
