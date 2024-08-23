const { colors } = require("@mui/material");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust as needed
  ],
  theme: {
    extend: {
      colors:{
        'custom-color': '#433F3E',
        'custom-gray':'#62595A'
      }
    },
  },
  plugins: [],
};
