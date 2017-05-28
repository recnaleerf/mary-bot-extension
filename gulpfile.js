// gulp stuff
var gulp = require("gulp");
var gutil = require("gulp-util");
var livereload = require("gulp-livereload");

// webpack stuff
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var webpackCallback = function(cb) {
  var done = false;
  return function (err, stats) {
    if (err) {
      throw new gutil.PluginError("[webpack]", err.toString());
    }
    gutil.log("[webpack]", stats.toString());
    livereload.reload();
    if (!done) {
      done = true;
      cb();
    }
  };
};
var webpackTask = function(config) {
  config = Object.assign({}, webpackConfig, config || {});
  return function(cb) {
    webpack(config, webpackCallback(cb));
  };
};

gulp.task("webpack", webpackTask());
gulp.task("webpack:watch", webpackTask({watch: true}));

gulp.task("watch", ["webpack:watch"], function() {
  livereload.listen();
});
gulp.task("build", ["webpack"]);
gulp.task("default", ["build"]);
