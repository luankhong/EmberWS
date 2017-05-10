define('quiz/components/option-tally', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    percentage: _ember['default'].computed('optionVotes', 'pollVotes', function () {
      return Math.round(this.get('optionVotes') * 100 / this.get('pollVotes'));
    })
  });
});