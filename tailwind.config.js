/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('/src/img/bgimage.jpeg')",
       'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  plugins: [],
}

