module.exports = {
    pkg:  require('./../package.json'),
    src:  './src',
    dist: './lib',
    examples: {
        src:        './examples/src',
        dist:       './examples/dist',
        scripts:    ['Examples.jsx'],
        scriptName: 'examples.js',
        stylesFile: 'examples.styl',
        files:      ['index.html', 'examples.css', 'github-icon.png']
    }
};
