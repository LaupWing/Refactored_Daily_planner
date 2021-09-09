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
               font: '#63626B',
               task:{
                  pink: '#E485A9',
                  purple: '#b6b4fb',
                  blue: '#a1d8fc',
                  yellow: '#fdf0b5'
               }
            }
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
