define('quiz/routes/polls', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').getPolls();
    },

    store: _ember['default'].inject.service()
  });
});