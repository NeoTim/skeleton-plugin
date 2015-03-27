var path = require('path');

var appRoot = 'src/';
var styl    = 'styles/styl/';
var stage   = 'stage/';
var demo    = 'demo/';
module.exports = {
    root: appRoot
  , source: appRoot + '**/*.js'
  , html: appRoot + '**/*.html'
  , style: 'styles/**/*.css'
  , output: 'dist/'
  , doc:'./doc'
  , e2eSpecsSrc: 'test/e2e/src/*.js'
  , e2eSpecsDist: 'test/e2e/dist/'
  , demo : {
        root   : demo
      , index  : 'index.html'
      , source : demo + '**/**.js'
      , html   : demo + '**/*.html'
      , style  : demo + '**/*.css'
      , output : stage
    }
  , stage: {
        root   : stage
      , index  : stage  + 'index.html'
      , dest   : stage
    }
  , release:  {
      dest:'release/'
    }
  , styl:{
        index  : styl   + 'index.styl'
      , all    : styl   + '**/*.styl'
      , dest   : stage  + 'styles'
      , name   : 'aurelia-interface.css'
  }
};
