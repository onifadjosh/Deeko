/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    fontFamily: {
      'body' :['Lato',] 
    },
    extend: {
      colors: {
        'primcol':'#404040',
        'seccol': '#A6A6A6',
      },

      gridTemplateColumns: {
        
        '2': '1fr  2fr',
      },


      backgroundImage: {
        'hero': "url('./images/hero2.jpg')",
        'heroS': "url('./images/hero2.jpg')",
        'about': "url('./images/about.jpg')",
      }
    },
  },
  plugins: [],
}
