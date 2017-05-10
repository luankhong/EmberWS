define('quiz/tests/initializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/application.js should pass jshint.\ninitializers/application.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/application.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/application.js: line 9, col 5, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});