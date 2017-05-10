define('quiz/tests/test-helper', ['exports', 'quiz/tests/helpers/resolver', 'ember-qunit'], function (exports, _quizTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_quizTestsHelpersResolver['default']);
});