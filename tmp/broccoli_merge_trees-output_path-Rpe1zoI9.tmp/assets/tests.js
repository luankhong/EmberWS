define('quiz/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('quiz/tests/components/option-tally.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/option-tally.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/option-tally.js should pass jshint.\ncomponents/option-tally.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/option-tally.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('quiz/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('quiz/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('quiz/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'quiz/tests/helpers/start-app', 'quiz/tests/helpers/destroy-app'], function (exports, _qunit, _quizTestsHelpersStartApp, _quizTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _quizTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _quizTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('quiz/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('quiz/tests/helpers/resolver', ['exports', 'ember/resolver', 'quiz/config/environment'], function (exports, _emberResolver, _quizConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _quizConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _quizConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('quiz/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('quiz/tests/helpers/start-app', ['exports', 'ember', 'quiz/app', 'quiz/config/environment'], function (exports, _ember, _quizApp, _quizConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _quizConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _quizApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('quiz/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('quiz/tests/models/option.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/option.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/option.js should pass jshint.\nmodels/option.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/option.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('quiz/tests/models/poll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/poll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/poll.js should pass jshint.\nmodels/poll.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/poll.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('quiz/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 15, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('quiz/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 11, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
define('quiz/tests/routes/polls.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls.js should pass jshint.\nroutes/polls.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('quiz/tests/routes/polls/poll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls/poll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls/poll.js should pass jshint.\nroutes/polls/poll.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/poll.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/polls/poll.js: line 11, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
define('quiz/tests/routes/polls/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls/results.js should pass jshint.\nroutes/polls/results.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/results.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/results.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('quiz/tests/services/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/store.js should pass jshint.\nservices/store.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 5, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 27, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/store.js: line 28, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 34, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 38, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/store.js: line 42, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n9 errors');
  });
});
define('quiz/tests/test-helper', ['exports', 'quiz/tests/helpers/resolver', 'ember-qunit'], function (exports, _quizTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_quizTestsHelpersResolver['default']);
});
define('quiz/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('quiz/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map