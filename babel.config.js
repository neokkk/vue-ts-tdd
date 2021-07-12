module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
}
