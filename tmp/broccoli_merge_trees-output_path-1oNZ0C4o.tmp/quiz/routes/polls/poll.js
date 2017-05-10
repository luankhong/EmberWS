define('quiz/routes/polls/poll', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      voteForOption: function voteForOption(poll, option) {
        option.incrementProperty('votes');
        this.transitionTo('polls.results', poll);
      }
    },

    model: function model(params) {
      return this.get('store').getPollById(params.poll_id);
    },

    store: _ember['default'].inject.service()
  });
});