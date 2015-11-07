/**
 * Created by sam on 15/11/7.
 */

var stylus = require('stylus');

module.exports = function() {
  return function(style) {
    style.define('file-exists', function(path) {
      return !!stylus.utils.lookup(path.string, this.paths);
    });
  };
};