export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 10
          },
          "end": {
            "line": 24,
            "column": 10
          }
        },
        "moduleName": "quiz/templates/components/chat-room.hbs"
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
        ["element","action",["voteForOption",["get","model",["loc",[null,[19,74],[19,79]]]],["get","option",["loc",[null,[19,80],[19,86]]]]],[],["loc",[null,[19,49],[19,88]]]],
        ["content","option.value",["loc",[null,[22,20],[22,36]]]]
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
            "line": 29,
            "column": 8
          },
          "end": {
            "line": 33,
            "column": 8
          }
        },
        "moduleName": "quiz/templates/components/chat-room.hbs"
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
        dom.setAttribute(el1,"class","progress");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","progress-info");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,0);
        return morphs;
      },
      statements: [
        ["inline","option-tally",[],["optionVotes",["subexpr","@mut",[["get","option.votes",["loc",[null,[31,64],[31,76]]]]],[],[]],"pollVotes",["subexpr","@mut",[["get","model.votes",["loc",[null,[31,87],[31,98]]]]],[],[]]],["loc",[null,[31,37],[31,100]]]]
      ],
      locals: ["option"],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 44,
            "column": 6
          },
          "end": {
            "line": 44,
            "column": 87
          }
        },
        "moduleName": "quiz/templates/components/chat-room.hbs"
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
          "multiple-nodes",
          "wrong-type"
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
          "line": 48,
          "column": 0
        }
      },
      "moduleName": "quiz/templates/components/chat-room.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("textarea");
      dom.setAttribute(el1,"id","chat-content");
      dom.setAttribute(el1,"style","width:500px;height:300px");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      var el2 = dom.createTextNode("Send");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\nMessage received:");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nCounter: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
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
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment(" <div class=\"grid-box grid-box--2of5\">\n        <img src=\"assets/images/icon-flame.svg\" alt=\"\" class=\"icon\" width=\"130\">\n      </div> ");
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
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [8]);
      var element3 = dom.childAt(fragment, [18]);
      var element4 = dom.childAt(element3, [3, 1]);
      var morphs = new Array(9);
      morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
      morphs[2] = dom.createElementMorph(element2);
      morphs[3] = dom.createMorphAt(fragment,11,11,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,14,14,contextualElement);
      morphs[5] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
      morphs[6] = dom.createMorphAt(dom.childAt(element4, [1, 1]),1,1);
      morphs[7] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element3, [5, 1]),1,1);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","text","placeholder","User Name","value",["subexpr","@mut",[["get","uname",["loc",[null,[3,54],[3,59]]]]],[],[]]],["loc",[null,[3,4],[3,61]]]],
      ["inline","input",[],["type","text","placeholder","Chat Message","value",["subexpr","@mut",[["get","mess",["loc",[null,[4,57],[4,61]]]]],[],[]]],["loc",[null,[4,4],[4,63]]]],
      ["element","action",["enter",["get","mess",["loc",[null,[5,29],[5,33]]]],["get","uname",["loc",[null,[5,34],[5,39]]]]],[],["loc",[null,[5,12],[5,41]]]],
      ["content","message",["loc",[null,[7,17],[7,28]]]],
      ["content","count",["loc",[null,[8,9],[8,18]]]],
      ["content","model.question",["loc",[null,[11,21],[11,39]]]],
      ["block","each",[["get","model.options",["loc",[null,[17,18],[17,31]]]]],[],0,null,["loc",[null,[17,10],[24,19]]]],
      ["block","each",[["get","model.options",["loc",[null,[29,16],[29,29]]]]],[],1,null,["loc",[null,[29,8],[33,17]]]],
      ["block","link-to",["polls.results",["get","model",["loc",[null,[44,33],[44,38]]]]],["class","btn btn--secondary btn--results"],2,null,["loc",[null,[44,6],[44,99]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));