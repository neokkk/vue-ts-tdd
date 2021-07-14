module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
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
