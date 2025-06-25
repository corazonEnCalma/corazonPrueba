/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        corazon: {
          DEFAULT: '#D88C7A', // Un tono más suave de coral
          shadow: '#C17667', // Versión más oscura del coral
        },
        ocean: {
          dark: '#3C7975',    // Mantenemos este tono base
          medium: '#5B9894',  // Ajustado para mejor gradación
          light: '#A3C5C3',   // Un tono más vibrante
        },
        sky: {
          DEFAULT: '#DCE6E5', // Un tono más claro y fresco
        },
        sand: {
          light: '#F6F0E7',   // Mantenemos este tono base
          pale: '#F5E6E0',    // Más neutro y menos rosado
        },
        wave: {
          front: '#E8B4A4',   // Más cálido
          middle: '#D4958B',  // Ajustado para mejor combinación
        },
        neutral: {
          outline: '#6B5756',  // Un poco más oscuro para mejor contraste
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        decorative: ['Delius', 'cursive'],
      },
    },
  },
  plugins: [],
};