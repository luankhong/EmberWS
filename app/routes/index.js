import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';
const {
    $
} = Ember;


export default Ember.Route.extend({
    //message: {},

    init() {
        this._super(...arguments);
        this.sockjs.on('messageReceived', this, 'messageReceived');
    },
    messageReceived(msgReceived) {
        this.set('message', msgReceived);
        msgReceived = JSON.parse(msgReceived);

        if (msgReceived.healder === 'response') {
            console.log('responded');
        }

        if (msgReceived.header === 'poll') {
            let testPoll = Poll.create({
                id: '3',
                question: msgReceived.question,
                options: [
                    Option.create({
                        id: '1',
                        value: msgReceived.choice1,
                        votes: 0
                    }),
                    Option.create({
                        id: '2',
                        value: msgReceived.choice2,
                        votes: 0
                    }),
                    Option.create({
                        id: '3',
                        value: msgReceived.choice3,
                        votes: 0
                    }),
                ]
            });
            testPoll = this.get('store').createPoll(testPoll);
            console.log(testPoll);
            this.transitionTo('polls.poll', testPoll);
        }
    },
    actions: {
        createPoll(poll) {
            this.get('store').createPoll(poll);
            let pollForSending = {
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
    model() {
        return this.get('store').newPoll();
    },

    store: Ember.inject.service()
});
