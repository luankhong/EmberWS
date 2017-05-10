define('quiz/tests/components/option-tally.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/option-tally.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/option-tally.js should pass jshint.\ncomponents/option-tally.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/option-tally.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/option-tally.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/option-tally.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});