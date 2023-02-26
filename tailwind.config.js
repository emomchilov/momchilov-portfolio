/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        black: '#000',
        text: {
          DEFAULT: '#000',
          light: '#8F8A85',
        },
        blue: {
          DEFAULT: '#748A9E',
          light: '#8897A0'
        },
        cream: {
          DEFAULT: '#C7C7C7',
          accent: '#F4EBD7'
        }
      },
        spacing: {
          0: 'Opx',
          1: '4px',
          'extra-small': '8px', 
          3: '12px',
          4: '16px',
          small: '16px',
          5: '20px',
          6: '24px',
          7: '28px',
          8: '32px',
          medium: '32px',
          10: '40px',
          12: '48px',
          large: '50px',
          16: '64px',
          larger: '64px',
          20: '66px',
          'extra-large': '90px'
      },
    },
  },
  plugins: [],
}
