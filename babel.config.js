module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        //setando para react rodar automatic
        runtime: 'automatic'
      }
    ]
  ]
};
