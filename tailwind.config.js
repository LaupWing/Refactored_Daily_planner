module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily:{
         sans: ['Montserrat', 'sans-serif']
      },
      extend: {
         colors:{
            main:{
               highlight: {
                  primary: '#F5E361',
                  dark: '#e8d75d'
               },
               background: {
                  primary: '#F3F6E7',
                  secundair: '#AAC6FC'
               },
               font: '#63626B'
            }
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
