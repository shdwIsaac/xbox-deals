const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BEF264',
          foreground: '#000000'
        },
        focus: '#BEF264'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: '#BEF264',
            foreground: '#000000'
          },
          focus: '#BEF264'
        }
      },
      light: {
        colors: {
          primary: {
            DEFAULT: '#BEF264',
            foreground: '#000000'
          },
          focus: '#BEF264'
        }
      }
    }
  })]
}
