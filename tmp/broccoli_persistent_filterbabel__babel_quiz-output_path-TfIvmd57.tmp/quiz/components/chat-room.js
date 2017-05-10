define('quiz/components/chat-room', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = _ember['default'].Component.extend({
    message: '',
    count: 0,

    init: function init() {
      this._super.apply(this, arguments);
      this.sockjs.on('messageReceived', this, 'messageReceived');
    },
    messageReceived: function messageReceived(message) {
      $('#chat-content').val(function (i, text) {
        return '' + text + message + '\n';
      });
      this.set('message', message);
      this.incrementProperty('count');
    },
    actions: {
      enter: function enter(info, username) {
        this.sockjs.sendInfo(username + ': ' + info);
      }
    }

  });
});