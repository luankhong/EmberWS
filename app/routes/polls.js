import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';

export default Ember.Route.extend({
    model() {
        return this.get('store').getPolls();
    },

    store: Ember.inject.service()
});
