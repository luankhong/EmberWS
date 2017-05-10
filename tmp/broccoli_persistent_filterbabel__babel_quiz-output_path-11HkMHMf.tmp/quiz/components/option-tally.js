define('quiz/components/option-tally', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Component.extend({
        percentage: _ember['default'].computed('optionVotes', 'pollVotes', function () {
            return Math.round(this.get('optionVotes') * 100 / this.get('pollVotes'));
        })

    });
});