define('quiz/routes/polls/results', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.get('store').getPollById(params.poll_id);
        },

        store: _ember['default'].inject.service()
    });
});