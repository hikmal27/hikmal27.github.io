module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '30%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        'custom': '90%'
      },
      fontFamily: {
        quicksand: ['Quicksand'],
        mrDafoe: ['Mr Dafoe'],
        poppins: ['Poppins']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        normal: '0',
        wider: '.05em',
        widest: '.25em',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom': '0 0 4px 3px rgba(88, 88, 88, 0.342)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
