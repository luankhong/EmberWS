import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';

export default Ember.Component.extend({
    percentage: Ember.computed('optionVotes', 'pollVotes', function() {
        return Math.round(this.get('optionVotes') * 100 / this.get('pollVotes'));
    }),

});
