define('quiz/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'quiz/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _quizConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_quizConfigEnvironment['default'].APP.name, _quizConfigEnvironment['default'].APP.version)
  };
});