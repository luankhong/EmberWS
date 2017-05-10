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
            "column": 10
          },
          "end": {
            "line": 20,
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
        dom.setAttribute(el1,"class","list-item");
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","list-item-checkbox");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        dom.setAttribute(el3,"class","srt");
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
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        return morphs;
      },
      statements: [
        ["element","action",["voteForOption",["get","model",["loc",[null,[15,74],[15,79]]]],["get","option",["loc",[null,[15,80],[15,86]]]]],[],["loc",[null,[15,49],[15,88]]]],
        ["content","option.value",["loc",[null,[18,20],[18,36]]]]
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
            "line": 32,
            "column": 6
          },
          "end": {
            "line": 32,
            "column": 87
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
        var el1 = dom.createTextNode("Results");
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
          "line": 37,
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
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","header");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h2");
      var el3 = dom.createTextNode("Welcome, Woodland Wanderers!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Now that you've completed your training, here's a quick quiz to test your skills.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","card card--light");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      dom.setAttribute(el2,"class","border");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","border");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","grid group");
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","card-content grid-box grid-box--3of5");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","list list--answer");
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
      dom.setAttribute(el4,"class","grid-box grid-box--2of5");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("img");
      dom.setAttribute(el5,"src","assets/images/icon-flame.svg");
      dom.setAttribute(el5,"alt","");
      dom.setAttribute(el5,"class","icon");
      dom.setAttribute(el5,"width","130");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
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
      dom.setAttribute(el2,"class","grid group actions");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","grid-box grid-box--1of4");
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
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [2]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(element2, [3, 1, 1, 1]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [5, 1]),1,1);
      return morphs;
    },
    statements: [
      ["content","model.question",["loc",[null,[7,21],[7,39]]]],
      ["block","each",[["get","model.options",["loc",[null,[13,18],[13,31]]]]],[],0,null,["loc",[null,[13,10],[20,19]]]],
      ["block","link-to",["polls.results",["get","model",["loc",[null,[32,33],[32,38]]]]],["class","btn btn--secondary btn--results"],1,null,["loc",[null,[32,6],[32,99]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));