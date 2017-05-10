define('quiz/routes/polls', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.get('store').getPolls();
        },

        store: _ember['default'].inject.service()
    });
});