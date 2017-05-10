/* jshint ignore:start */

define('quiz/config/environment', ['ember'], function(Ember) {
  var prefix = 'quiz';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("quiz/app")["default"].create({"name":"quiz","version":"0.0.0+c2d4d4f0"});
}

/* jshint ignore:end */
