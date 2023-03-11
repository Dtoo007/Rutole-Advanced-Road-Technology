/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    
    container: {
      center: (true),
      padding: {
        md:'6rem',
      sm: '0rem',
      lg: '4rem',
      xl: '5rem',
    },
 },
    extend: {
      colors: {
        off_white: '#F2F2F2',
        off_black: '#110F0F',
        off_arch: '#6B6A6A',
        arch:'#6B6A6A'
      },

      fontFamily: {
        'sans': ['Bubblegum Sans'],
        'hind': ['hind']
      },
    },

    plugins: [
      require('@tailwindcss/typography'),
    ]
  },
  
  plugins: [function({addBase, theme}) {
    addBase({
      '@import': [
        'url("https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap")',
        'url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500&display=swap")',
      ]
    })
  }],
}
