module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './contents/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
    },
  },
};
