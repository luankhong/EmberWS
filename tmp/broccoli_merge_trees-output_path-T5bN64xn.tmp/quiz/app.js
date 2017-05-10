define('quiz/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'quiz/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _quizConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _quizConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _quizConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _quizConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});