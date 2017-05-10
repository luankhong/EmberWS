export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        dom.setAttribute(el1,"class","form-field");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"class","form-label");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),3,3);
        return morphs;
      },
      statements: [
        ["inline","input",[],["value",["subexpr","@mut",[["get","option.value",["loc",[null,[16,22],[16,34]]]]],[],[]],"class","form-input","type","text"],["loc",[null,[16,8],[16,67]]]]
      ],
      locals: ["option"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 25,
            "column": 2
          },
          "end": {
            "line": 25,
            "column": 47
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
        var el1 = dom.createTextNode("Find a question to answer");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
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
      dom.setAttribute(el1,"class","header");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h2");
      var el3 = dom.createTextNode("New Poll");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Use the form below to create a new poll.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","card card--light");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"class","form");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("fieldset");
      dom.setAttribute(el3,"class","form-field");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"class","form-label");
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
      dom.setAttribute(el3,"class","btn btn--primary btn--form");
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
      var el1 = dom.createElement("footer");
      dom.setAttribute(el1,"class","footer");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      dom.setAttribute(el2,"class","footer-copyright");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","footer-copyright-text");
      var el4 = dom.createTextNode("© Woodland Wanderer Whatchamacallits");
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
      var element0 = dom.childAt(fragment, [2, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
      morphs[2] = dom.createMorphAt(element0,3,3);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["createPoll",["get","model",["loc",[null,[7,41],[7,46]]]]],["on","submit"],["loc",[null,[7,19],[7,60]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","model.question",["loc",[null,[10,20],[10,34]]]]],[],[]],"class","form-input","type","text"],["loc",[null,[10,6],[10,67]]]],
      ["block","each",[["get","model.options",["loc",[null,[13,12],[13,25]]]]],[],0,null,["loc",[null,[13,4],[18,13]]]],
      ["block","link-to",["polls"],[],1,null,["loc",[null,[25,2],[25,59]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));