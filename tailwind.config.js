/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transform: ['hover'],
      rotate: ['hover'],
    },
    variants: {
      extend: {
        transform: ['hover'],
        rotate: ['hover'],
      }
    }
  },
  plugins: [],
}

