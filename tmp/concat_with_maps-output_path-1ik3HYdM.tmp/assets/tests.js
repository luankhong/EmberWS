define('quiz/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('quiz/tests/components/chat-room.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/chat-room.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/chat-room.js should pass jshint.\ncomponents/chat-room.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/chat-room.js: line 2, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/chat-room.js: line 2, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/chat-room.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/chat-room.js: line 10, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/chat-room.js: line 11, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\ncomponents/chat-room.js: line 14, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/chat-room.js: line 15, col 36, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncomponents/chat-room.js: line 16, col 7, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/chat-room.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/chat-room.js: line 23, col 28, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n11 errors');
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
define('quiz/tests/initializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/application.js should pass jshint.\ninitializers/application.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/application.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/application.js: line 7, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('quiz/tests/integration/components/chat-room-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('chat-room', 'Integration | Component | chat room', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'chat-room', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'chat-room', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('quiz/tests/integration/components/chat-room-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/chat-room-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/chat-room-test.js should pass jshint.');
  });
});
define('quiz/tests/integration/components/ws-poll-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ws-poll', 'Integration | Component | ws poll', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 11
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'ws-poll', ['loc', [null, [1, 0], [1, 11]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'ws-poll', [], [], 0, null, ['loc', [null, [2, 4], [4, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('quiz/tests/integration/components/ws-poll-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/ws-poll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ws-poll-test.js should pass jshint.');
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
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 16, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('quiz/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 2, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 2, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 18, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
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
define('quiz/tests/routes/polls/ws.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/polls/ws.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/polls/ws.js should pass jshint.\nroutes/polls/ws.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/polls/ws.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('quiz/tests/services/sockjs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/sockjs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/sockjs.js should pass jshint.\nservices/sockjs.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 3, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 10, col 17, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\nservices/sockjs.js: line 11, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/sockjs.js: line 12, col 61, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
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
define('quiz/tests/unit/initializers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/application-test.js should pass jshint.');
  });
});
define('quiz/tests/unit/routes/polls/ws-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:polls/ws', 'Unit | Route | polls/ws', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('quiz/tests/unit/routes/polls/ws-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/polls/ws-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/polls/ws-test.js should pass jshint.');
  });
});
define('quiz/tests/unit/services/sockjs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:sockjs', 'Unit | Service | sockjs', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('quiz/tests/unit/services/sockjs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/sockjs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/sockjs-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('quiz/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map