define('quiz/routes/index', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      createPoll: function createPoll(poll) {
        this.get('store').createPoll(poll);
        this.transitionTo('polls.poll', poll);
      }
    },

    model: function model() {
      return this.get('store').newPoll();
    },

    store: _ember['default'].inject.service()
  });
});