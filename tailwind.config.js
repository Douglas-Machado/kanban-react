module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      dropShadow: {
        'card': '-1px 2px 2px rgba(0, 0, 12, 0.25)',
        '3xl': '0 35px 35px rgba(100, 100, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}