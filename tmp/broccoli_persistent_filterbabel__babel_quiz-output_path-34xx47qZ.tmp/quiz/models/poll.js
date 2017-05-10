define('quiz/models/poll', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    optionVotes: _ember['default'].computed.mapBy('options', 'votes'),
    votes: _ember['default'].computed.sum('optionVotes')
  });
});