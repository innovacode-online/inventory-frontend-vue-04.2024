/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          default: '#415ef3',
          '50': '#eff3ff',
          '100': '#dce3fd',
          '200': '#c0cefd',
          '300': '#95affb',
          '400': '#6385f7',
          '500': '#415ef3',
          '600': '#283ae8',
          '700': '#2029d5',
          '800': '#2022ad',
          '900': '#202488',
          '950': '#181953',
        },
        'dark-soft': '#101010',
        'blue-dark': '#060a21',
        'gray-dark': '#2b2b2b'
      }
    },
  },
  plugins: [],
}