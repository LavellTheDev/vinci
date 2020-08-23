module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary:  '#FFFFFF',
        secondary: '#191919',
        neutral: '#6C6C6C',
        third: '#7C7C7C',
      },
      fontFamily: {
        'sans': ['Montserrat'],
        'serif': ['Spectral'],
        'mono': ['Montserrat'],
        'display': ['Montserrat'],
        'body': ['Spectral'],
      },
      spacing: {
        '64': '16rem',
        '72': '18rem',
        '78': '20rem',
        '84': '22rem',
      },
      screen: {
        sm: '320px',
      },
      video: {
        maxWidth: false,
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
