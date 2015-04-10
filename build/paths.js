var join = require('path').join;
var root = join(__dirname, '..') + '/';
var exists = require('fs').existsSync
var configPath = join(__dirname, 'project-config.json');


var appRoot = root + 'src/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: root + 'styles/**/*.css',
  output: root + 'dist/',
  doc: root + './doc',
  e2eSpecsSrc: root + 'test/e2e/src/*.js',
  e2eSpecsDist: root + 'test/e2e/dist/',
  system : {
      output: root + 'dist/system/'
  }
};

if (exists(configPath)) {
    var project = require(configPath).project;
    module.exports.system.output = (project.output + '<%= name %>@master');
}
