define('quiz/tests/unit/initializers/application-test', ['exports', 'ember', 'quiz/initializers/application', 'qunit'], function (exports, _ember, _quizInitializersApplication, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | application', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _quizInitializersApplication['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});