define('quiz/tests/unit/services/sockjs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/sockjs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/sockjs-test.js should pass jshint.');
  });
});