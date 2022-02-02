module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        //set react run automatic
        runtime: 'automatic'
      }
    ]
  ]
};
