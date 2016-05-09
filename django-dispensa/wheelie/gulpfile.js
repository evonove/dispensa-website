require('gulp');

// importing Wheelie instance and the base Wheelie recipe
var wheelie = require('wheelie');
var recipe = require('wheelie-recipe');

// adding the base recipe to Wheelie
wheelie.add(recipe);
wheelie.setDefault('watch');

// build customizations
var vendors = [
    'svg-injector/svg-injector.js'
];

var scripts = [
    'compatibility/modernizr-custom.js',
    'svg-injections.js',
    'nav.js',
    'map.js',
    'path.js',
    'share.js',
    'sticky.js',
    'tags.js'
];

wheelie.update('uglify', {
  scripts: scripts,
  vendors: vendors
});

// the production and the live building, output processed files
// in the `wheelie/static/` folder
wheelie.setBuild('static/');
wheelie.setDist('static/');
wheelie.build();
