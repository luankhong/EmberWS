import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';

export default Ember.Route.extend({
    actions: {
        voteForOption(poll, option) {
            option.incrementProperty('votes');
            let choiceValue;

            if(option.value === poll.options[0].value) {
                choiceValue = '1';
            } else if(option.value === poll.options[1].value) {
                choiceValue = '2';
            } else if(option.value === poll.options[2].value){
                choiceValue = '3';
            }

            let response = {
                header: 'response',
                choice: choiceValue
            };
            this.sockjs.sendInfo(JSON.stringify(response));
        }
    },
    model(params) {
        return this.get('store').getPollById(params.poll_id);
    },

    store: Ember.inject.service()
});
