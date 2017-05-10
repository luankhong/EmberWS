define('quiz/tests/routes/polls/poll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls/poll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls/poll.js should pass jshint.\nroutes/polls/poll.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 7, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/polls/poll.js: line 9, col 13, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/polls/poll.js: line 19, col 13, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/polls/poll.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n8 errors');
  });
});