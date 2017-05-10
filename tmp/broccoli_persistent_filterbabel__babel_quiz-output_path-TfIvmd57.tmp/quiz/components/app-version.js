define('quiz/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'quiz/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _quizConfigEnvironment) {

  var name = _quizConfigEnvironment['default'].APP.name;
  var version = _quizConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});