define('quiz/services/store', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {

    var polls = [_quizModelsPoll['default'].create({
        id: '1',
        question: 'Which Poisonous Plant Are You?',
        options: [_quizModelsOption['default'].create({
            id: '1',
            value: 'Nightshade',
            votes: 1
        }), _quizModelsOption['default'].create({
            id: '2',
            value: 'Hemlock',
            votes: 5
        }), _quizModelsOption['default'].create({
            id: '3',
            value: 'Rhubarb',
            votes: 0
        })]
    }), _quizModelsPoll['default'].create({
        id: '2',
        question: 'Which Is Your Favorite Woodland Wanderer Way?',
        options: [_quizModelsOption['default'].create({
            id: '4',
            value: 'Honesty',
            votes: 3
        }), _quizModelsOption['default'].create({
            id: '5',
            value: 'Integrity',
            votes: 4
        }), _quizModelsOption['default'].create({
            id: '6',
            value: 'Patience',
            votes: 2
        })]
    })];

    exports['default'] = _ember['default'].Service.extend({
        createPoll: function createPoll(poll) {
            //  poll.set('id', (polls.length + 1).toString());
            polls.pushObject(poll);
            return poll;
        },

        getPollById: function getPollById(id) {
            return this.getPolls().findBy('id', id);
        },

        getPolls: function getPolls() {
            return polls;
        },

        newPoll: function newPoll() {
            return _quizModelsPoll['default'].create({
                options: [_quizModelsOption['default'].create({
                    votes: 0
                }), _quizModelsOption['default'].create({
                    votes: 0
                }), _quizModelsOption['default'].create({
                    votes: 0
                })]
            });
        }
    });
});