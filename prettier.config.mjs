const config = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        useTabs: false,
        tabWidth: 4,
        bracketSameLine: true,
      },
    },
  ],
};

export default config;
