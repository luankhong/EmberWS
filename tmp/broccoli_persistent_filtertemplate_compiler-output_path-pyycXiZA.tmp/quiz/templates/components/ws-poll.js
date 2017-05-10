export default Ember.HTMLBars.template((function() {
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
      dom.setAttribute(el1,"class","card card--light");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      dom.setAttribute(el2,"class","border");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","border");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","grid group");
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","card-content grid-box grid-box--3of5");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","list list--answer");
      var el6 = dom.createTextNode("\n                  ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","grid-box grid-box--2of5");
      var el7 = dom.createTextNode("\n                      ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","progress");
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
      dom.setAttribute(el7,"class","progress");
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
      dom.setAttribute(el7,"class","progress");
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
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createMorphAt(element2,3,3);
      morphs[3] = dom.createMorphAt(element3,1,1);
      morphs[4] = dom.createMorphAt(element3,3,3);
      morphs[5] = dom.createMorphAt(element4,1,1);
      morphs[6] = dom.createMorphAt(element4,3,3);
      return morphs;
    },
    statements: [
      ["content","question",["loc",[null,[2,23],[2,35]]]],
      ["content","choice1",["loc",[null,[10,27],[10,38]]]],
      ["content","percentage1",["loc",[null,[10,40],[10,55]]]],
      ["content","choice2",["loc",[null,[13,27],[13,38]]]],
      ["content","percentage2",["loc",[null,[13,40],[13,55]]]],
      ["content","choice3",["loc",[null,[16,27],[16,38]]]],
      ["content","percentage3",["loc",[null,[16,40],[16,55]]]]
    ],
    locals: [],
    templates: []
  };
}()));