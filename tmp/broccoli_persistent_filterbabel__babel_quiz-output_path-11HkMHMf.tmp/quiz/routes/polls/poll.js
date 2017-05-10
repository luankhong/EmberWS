define('quiz/routes/polls/poll', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    exports['default'] = _ember['default'].Route.extend({
        actions: {
            voteForOption: function voteForOption(poll, option) {
                option.incrementProperty('votes');
                var choiceValue = undefined;

                if (option.value === poll.options[0].value) {
                    choiceValue = '1';
                } else if (option.value === poll.options[1].value) {
                    choiceValue = '2';
                } else if (option.value === poll.options[2].value) {
                    choiceValue = '3';
                }

                var response = {
                    header: 'response',
                    choice: choiceValue
                };
                this.sockjs.sendInfo(JSON.stringify(response));
            }
        },
        model: function model(params) {
            return this.get('store').getPollById(params.poll_id);
        },

        store: _ember['default'].inject.service()
    });
});