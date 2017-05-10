define('quiz/routes/index', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    var $ = _ember['default'].$;
    exports['default'] = _ember['default'].Route.extend({
        //message: {},

        init: function init() {
            this._super.apply(this, arguments);
            this.sockjs.on('messageReceived', this, 'messageReceived');
        },
        messageReceived: function messageReceived(msgReceived) {
            this.set('message', msgReceived);
            msgReceived = JSON.parse(msgReceived);

            if (msgReceived.healder === 'response') {
                console.log('responded');
            }

            if (msgReceived.header === 'poll') {
                var testPoll = _quizModelsPoll['default'].create({
                    id: '3',
                    question: msgReceived.question,
                    options: [_quizModelsOption['default'].create({
                        id: '1',
                        value: msgReceived.choice1,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '2',
                        value: msgReceived.choice2,
                        votes: 0
                    }), _quizModelsOption['default'].create({
                        id: '3',
                        value: msgReceived.choice3,
                        votes: 0
                    })]
                });
                testPoll = this.get('store').createPoll(testPoll);
                console.log(testPoll);
                this.transitionTo('polls.poll', testPoll);
            }
        },
        actions: {
            createPoll: function createPoll(poll) {
                this.get('store').createPoll(poll);
                var pollForSending = {
                    header: 'poll',
                    question: poll.question,
                    choice1: poll.options[0].value,
                    choice2: poll.options[1].value,
                    choice3: poll.options[2].value,
                    id: '3'
                };
                //console.log(poll);
                this.sockjs.sendInfo(JSON.stringify(pollForSending));
                //this.transitionTo('polls.poll', poll);
            }
        },
        model: function model() {
            return this.get('store').newPoll();
        },

        store: _ember['default'].inject.service()
    });
});