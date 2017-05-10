define('quiz/tests/models/option.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/option.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/option.js should pass jshint.\nmodels/option.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/option.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});