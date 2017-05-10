define('quiz/components/ws-poll', ['exports', 'ember', 'quiz/models/option', 'quiz/models/poll'], function (exports, _ember, _quizModelsOption, _quizModelsPoll) {
    var $ = _ember['default'].$;
    exports['default'] = _ember['default'].Component.extend({
        total: 0,
        init: function init() {
            this._super.apply(this, arguments);
            this.sockjs.on('messageReceived', this, 'messageReceived');
        },
        messageReceived: function messageReceived(msgReceived) {
            this.set('message', msgReceived);
            msgReceived = JSON.parse(msgReceived);

            this.total = this.total + 1;
            var percent = undefined;

            if (msgReceived.header === 'response') {
                if (msgReceived.choice === '1') {
                    this.incrementProperty('choice1');
                } else if (msgReceived.choice === '2') {
                    this.incrementProperty('choice2');
                } else if (msgReceived.choice === '3') {
                    this.incrementProperty('choice3');
                }

                percent = Math.round(this.get('choice1') * 100 / this.total);
                this.set('percentage1', percent);

                percent = Math.round(this.get('choice2') * 100 / this.total);
                this.set('percentage2', percent);

                percent = Math.round(this.get('choice3') * 100 / this.total);
                this.set('percentage3', percent);
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
                //this.transitionTo('polls.poll', testPoll);
            }
        },

        store: _ember['default'].inject.service()
    });
});