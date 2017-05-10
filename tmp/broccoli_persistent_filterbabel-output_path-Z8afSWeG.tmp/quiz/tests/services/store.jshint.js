define('quiz/tests/services/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/store.js should pass jshint.\nservices/store.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 5, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 51, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 52, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 58, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 62, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 66, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n9 errors');
  });
});