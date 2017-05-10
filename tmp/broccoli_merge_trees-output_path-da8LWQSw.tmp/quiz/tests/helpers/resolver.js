define('quiz/tests/helpers/resolver', ['exports', 'ember/resolver', 'quiz/config/environment'], function (exports, _emberResolver, _quizConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _quizConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _quizConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});