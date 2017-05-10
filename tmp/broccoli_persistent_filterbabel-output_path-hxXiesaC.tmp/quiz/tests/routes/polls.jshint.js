define('quiz/tests/routes/polls.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls.js should pass jshint.\nroutes/polls.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});