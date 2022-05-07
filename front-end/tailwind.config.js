module.exports = {
  content: [
    "./src/**/*.{js,jsx}","./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [require('flowbite/plugin')],
}
