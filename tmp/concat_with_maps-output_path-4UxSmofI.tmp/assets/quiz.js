"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('quiz/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'quiz/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _quizConfigEnvironment) {

    var App = undefined;

    _ember['default'].MODEL_FACTORY_INJECTIONS = true;

    App = _ember['default'].Application.extend({
        modulePrefix: _quizConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _quizConfigEnvironment['default'].podModulePrefix,
        Resolver: _emberResolver['default']
    });

    (0, _emberLoadInitializers['default'])(App, _quizConfigEnvironment['default'].modulePrefix);

    exports['default'] = App;
});
define('quiz/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'quiz/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _quizConfigEnvironment) {

  var name = _quizConfigEnvironment['default'].APP.name;
  var version = _quizConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('quiz/components/option-tally', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Component.extend({
        percentage: _ember['default'].computed('optionVotes', 'pollVotes', function () {
            return Math.round(this.get('optionVotes') * 100 / this.get('pollVotes'));
        })

    });
});
define('quiz/components/ws-poll', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    var $ = _ember['default'].$;
    exports['default'] = _ember['default'].Component.extend({
        total: 0,
        init: function init() {
            this._super.apply(this, arguments);
            this.sockjs.on('messageReceived', this, 'messageReceived');
        },
        messageReceived: function messageReceived(msgReceived) {
            this.set('message', msgReceived);
            msgReceived = JSON.parse(msgReceived);

            this.total = this.total + 1;
            var percent = undefined;

            if (msgReceived.header === 'response') {
                if (msgReceived.choice === '1') {
                    this.incrementProperty('choice1');
                } else if (msgReceived.choice === '2') {
                    this.incrementProperty('choice2');
                } else if (msgReceived.choice === '3') {
                    this.incrementProperty('choice3');
                }

                percent = Math.round(this.get('choice1') * 100 / this.total);
                this.set('percentage1', percent);

                percent = Math.round(this.get('choice2') * 100 / this.total);
                this.set('percentage2', percent);

                percent = Math.round(this.get('choice3') * 100 / this.total);
                this.set('percentage3', percent);
            }

            if (msgReceived.header === 'poll') {
                var testPoll = _quizModelsPoll['default'].create({
                    id: '3',
                    question: msgReceived.question,
                    options: [_quizModelsOption['default'].create({
                        id: '1',
                        value: msgReceived.choice1,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '2',
                        value: msgReceived.choice2,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '3',
                        value: msgReceived.choice3,
                        votes: 0
                    })]
                });
                testPoll = this.get('store').createPoll(testPoll);
                console.log(testPoll);
                //this.transitionTo('polls.poll', testPoll);
            }
        },

        store: _ember['default'].inject.service()
    });
});
define('quiz/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('quiz/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('quiz/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'quiz/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _quizConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_quizConfigEnvironment['default'].APP.name, _quizConfigEnvironment['default'].APP.version)
  };
});
define('quiz/initializers/application', ['exports'], function (exports) {
    exports.initialize = initialize;

    function initialize(application) {
        application.inject('component', 'sockjs', 'service:sockjs');
        application.inject('route', 'sockjs', 'service:sockjs');
    }

    exports['default'] = {
        name: 'websockets',
        initialize: initialize
    };
});
define('quiz/initializers/export-application-global', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_quizConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _quizConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_quizConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('quiz/models/option', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({});
});
define('quiz/models/poll', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    optionVotes: _ember['default'].computed.mapBy('options', 'votes'),
    votes: _ember['default'].computed.sum('optionVotes')
  });
});
define('quiz/router', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _quizConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('polls', function () {
            this.route('poll', {
                path: '/:poll_id'
            });
            this.route('results', {
                path: '/:poll_id/results'
            });
            this.route('ws');
        });
    });

    exports['default'] = Router;
});
define('quiz/routes/index', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    var $ = _ember['default'].$;
    exports['default'] = _ember['default'].Route.extend({
        //message: {},

        init: function init() {
            this._super.apply(this, arguments);
            this.sockjs.on('messageReceived', this, 'messageReceived');
        },
        messageReceived: function messageReceived(msgReceived) {
            this.set('message', msgReceived);
            msgReceived = JSON.parse(msgReceived);

            if (msgReceived.healder === 'response') {
                console.log('responded');
            }

            if (msgReceived.header === 'poll') {
                var testPoll = _quizModelsPoll['default'].create({
                    id: '3',
                    question: msgReceived.question,
                    options: [_quizModelsOption['default'].create({
                        id: '1',
                        value: msgReceived.choice1,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '2',
                        value: msgReceived.choice2,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '3',
                        value: msgReceived.choice3,
                        votes: 0
                    })]
                });
                testPoll = this.get('store').createPoll(testPoll);
                console.log(testPoll);
                this.transitionTo('polls.poll', testPoll);
            }
        },
        actions: {
            createPoll: function createPoll(poll) {
                this.get('store').createPoll(poll);
                var pollForSending = {
                    header: 'poll',
                    question: poll.question,
                    choice1: poll.options[0].value,
                    choice2: poll.options[1].value,
                    choice3: poll.options[2].value,
                    id: '3'
                };
                //console.log(poll);
                this.sockjs.sendInfo(JSON.stringify(pollForSending));
                //this.transitionTo('polls.poll', poll);
            }
        },
        model: function model() {
            return this.get('store').newPoll();
        },

        store: _ember['default'].inject.service()
    });
});
define('quiz/routes/polls', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.get('store').getPolls();
        },

        store: _ember['default'].inject.service()
    });
});
define('quiz/routes/polls/poll', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Route.extend({
        actions: {
            voteForOption: function voteForOption(poll, option) {
                option.incrementProperty('votes');
                var choiceValue = undefined;

                if (option.value === poll.options[0].value) {
                    choiceValue = '1';
                } else if (option.value === poll.options[1].value) {
                    choiceValue = '2';
                } else if (option.value === poll.options[2].value) {
                    choiceValue = '3';
                }

                var response = {
                    header: 'response',
                    choice: choiceValue
                };
                this.sockjs.sendInfo(JSON.stringify(response));
            }
        },
        model: function model(params) {
            return this.get('store').getPollById(params.poll_id);
        },

        store: _ember['default'].inject.service()
    });
});
define('quiz/routes/polls/results', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').getPollById(params.poll_id);
        },

        store: _ember['default'].inject.service()
    });
});
define('quiz/services/sockjs', ['exports', 'ember'], function (exports, _ember) {
    var run = _ember['default'].run;
    exports['default'] = _ember['default'].Service.extend(_ember['default'].Evented, {
        socket: null,
        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);
            var socket = new SockJS('http://localhost:7000');
            socket.addEventListener('message', run.bind(this, function (event) {
                _this.trigger('messageReceived', event.data);
            }));
            this.set('socket', socket);
        },
        sendInfo: function sendInfo(message) {
            this.get('socket').send(message);
        }

    });
});
/* global SockJS */
define('quiz/services/store', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {

    var polls = [_quizModelsPoll['default'].create({
        id: '1',
        question: 'Which Poisonous Plant Are You?',
        options: [_quizModelsOption['default'].create({
            id: '1',
            value: 'Nightshade',
            votes: 1
        }), _quizModelsOption['default'].create({
            id: '2',
            value: 'Hemlock',
            votes: 5
        }), _quizModelsOption['default'].create({
            id: '3',
            value: 'Rhubarb',
            votes: 0
        })]
    }), _quizModelsPoll['default'].create({
        id: '2',
        question: 'Which Is Your Favorite Woodland Wanderer Way?',
        options: [_quizModelsOption['default'].create({
            id: '4',
            value: 'Honesty',
            votes: 3
        }), _quizModelsOption['default'].create({
            id: '5',
            value: 'Integrity',
            votes: 4
        }), _quizModelsOption['default'].create({
            id: '6',
            value: 'Patience',
            votes: 2
        })]
    })];

    exports['default'] = _ember['default'].Service.extend({
        createPoll: function createPoll(poll) {
            //  poll.set('id', (polls.length + 1).toString());
            polls.pushObject(poll);
            return poll;
        },

        getPollById: function getPollById(id) {
            return this.getPolls().findBy('id', id);
        },

        getPolls: function getPolls() {
            return polls;
        },

        newPoll: function newPoll() {
            return _quizModelsPoll['default'].create({
                options: [_quizModelsOption['default'].create({
                    votes: 0
                }), _quizModelsOption['default'].create({
                    votes: 0
                }), _quizModelsOption['default'].create({
                    votes: 0
                })]
            });
        }
    });
});
define("quiz/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "cell");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <h1>\n{{#link-to \"index\" class=\"logo\"}}\n      <b class=\"srt\">Wilderness Safety Quiz</b>\n    {{/link-to}}  </h1> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("CPSC473 SPRING2017");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 8]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [11, 8], [11, 18]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/components/option-tally", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/components/option-tally.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" answers (");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("%)\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "optionVotes", ["loc", [null, [1, 0], [1, 15]]]], ["content", "percentage", ["loc", [null, [1, 25], [1, 39]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/components/ws-poll", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/components/ws-poll.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("main");
        dom.setAttribute(el1, "class", "card card--light");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "grid group");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "card-content grid-box grid-box--3of5");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "list list--answer");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "grid-box grid-box--2of5");
        var el7 = dom.createTextNode("\n                      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "progress");
        var el8 = dom.createTextNode("\n                        A. ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" (");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("%)\n                      ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "progress");
        var el8 = dom.createTextNode("\n                        B. ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" (");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("%)\n                      ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "progress");
        var el8 = dom.createTextNode("\n                        C. ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" (");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("%)\n                      ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3, 1, 1, 1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [5]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        morphs[4] = dom.createMorphAt(element3, 3, 3);
        morphs[5] = dom.createMorphAt(element4, 1, 1);
        morphs[6] = dom.createMorphAt(element4, 3, 3);
        return morphs;
      },
      statements: [["content", "question", ["loc", [null, [2, 23], [2, 35]]]], ["content", "choice1", ["loc", [null, [10, 27], [10, 38]]]], ["content", "percentage1", ["loc", [null, [10, 40], [10, 55]]]], ["content", "choice2", ["loc", [null, [13, 27], [13, 38]]]], ["content", "percentage2", ["loc", [null, [13, 40], [13, 55]]]], ["content", "choice3", ["loc", [null, [16, 27], [16, 38]]]], ["content", "percentage3", ["loc", [null, [16, 40], [16, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 18,
              "column": 4
            }
          },
          "moduleName": "quiz/templates/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("fieldset");
          dom.setAttribute(el1, "class", "form-field");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "form-label");
          var el3 = dom.createTextNode("Option");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "option.value", ["loc", [null, [16, 22], [16, 34]]]]], [], []], "class", "form-input", "type", "text"], ["loc", [null, [16, 8], [16, 67]]]]],
        locals: ["option"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("New Question");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Use the form below to create a new question.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        dom.setAttribute(el1, "class", "card card--light");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "class", "form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("fieldset");
        dom.setAttribute(el3, "class", "form-field");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "class", "form-label");
        var el5 = dom.createTextNode("Question");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn--primary btn--form");
        var el4 = dom.createTextNode("Submit!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <footer class=\"footer\">\n  {{#link-to \"polls\"}}Find a question to answer{{/link-to}}\n\n  <p class=\"footer-copyright\">\n    <span class=\"footer-copyright-text\">&copy; Woodland Wanderer Whatchamacallits</span>\n  </p>\n</footer> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["createPoll", ["get", "model", ["loc", [null, [7, 41], [7, 46]]]]], ["on", "submit"], ["loc", [null, [7, 19], [7, 60]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.question", ["loc", [null, [10, 20], [10, 34]]]]], [], []], "class", "form-input", "type", "text"], ["loc", [null, [10, 6], [10, 67]]]], ["block", "each", [["get", "model.options", ["loc", [null, [13, 12], [13, 25]]]]], [], 0, null, ["loc", [null, [13, 4], [18, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("quiz/templates/polls", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/polls.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/polls/poll", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 10
            },
            "end": {
              "line": 15,
              "column": 10
            }
          },
          "moduleName": "quiz/templates/polls/poll.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "list-item");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "list-item-checkbox");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("b");
          dom.setAttribute(el3, "class", "srt");
          var el4 = dom.createTextNode("Select");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["voteForOption", ["get", "model", ["loc", [null, [10, 74], [10, 79]]]], ["get", "option", ["loc", [null, [10, 80], [10, 86]]]]], [], ["loc", [null, [10, 49], [10, 88]]]], ["content", "option.value", ["loc", [null, [13, 20], [13, 36]]]]],
        locals: ["option"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/polls/poll.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("main");
        dom.setAttribute(el1, "class", "card card--light");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "grid group");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "card-content grid-box grid-box--3of5");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "list list--answer");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3, 1, 1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "model.question", ["loc", [null, [2, 21], [2, 39]]]], ["block", "each", [["get", "model.options", ["loc", [null, [8, 18], [8, 31]]]]], [], 0, null, ["loc", [null, [8, 10], [15, 19]]]], ["content", "ws-poll", ["loc", [null, [23, 0], [23, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("quiz/templates/polls/results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 10
            },
            "end": {
              "line": 12,
              "column": 10
            }
          },
          "moduleName": "quiz/templates/polls/results.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "list-item");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "option.value", ["loc", [null, [10, 20], [10, 36]]]]],
        locals: ["option"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 8
            },
            "end": {
              "line": 21,
              "column": 8
            }
          },
          "moduleName": "quiz/templates/polls/results.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "progress");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "progress-info");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "option-tally", [], ["optionVotes", ["subexpr", "@mut", [["get", "option.votes", ["loc", [null, [19, 64], [19, 76]]]]], [], []], "pollVotes", ["subexpr", "@mut", [["get", "model.votes", ["loc", [null, [19, 87], [19, 98]]]]], [], []]], ["loc", [null, [19, 37], [19, 100]]]]],
        locals: ["option"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 6
            },
            "end": {
              "line": 28,
              "column": 76
            }
          },
          "moduleName": "quiz/templates/polls/results.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back");
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
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/polls/results.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("main");
        dom.setAttribute(el1, "class", "card card--light");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "border");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "grid group");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "card-content grid-box grid-box--3of5");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "list list--answer list--answer--flush");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "grid-box grid-box--2of5");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "grid group actions");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "grid-box grid-box--1of4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.question", ["loc", [null, [2, 21], [2, 39]]]], ["block", "each", [["get", "model.options", ["loc", [null, [8, 18], [8, 31]]]]], [], 0, null, ["loc", [null, [8, 10], [12, 19]]]], ["block", "each", [["get", "model.options", ["loc", [null, [17, 16], [17, 29]]]]], [], 1, null, ["loc", [null, [17, 8], [21, 17]]]], ["block", "link-to", ["polls.poll", ["get", "model", ["loc", [null, [28, 30], [28, 35]]]]], ["class", "btn btn--primary btn--back"], 2, null, ["loc", [null, [28, 6], [28, 88]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('quiz/config/environment', ['ember'], function(Ember) {
  var prefix = 'quiz';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("quiz/app")["default"].create({"name":"quiz","version":"0.0.0+2824fab8"});
}

/* jshint ignore:end */
//# sourceMappingURL=quiz.map