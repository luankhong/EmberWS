define('quiz/services/sockjs', ['exports', 'ember'], function (exports, _ember) {
  var run = _ember['default'].run;
  exports['default'] = _ember['default'].Service.extend(_ember['default'].Evented, {
    socket: null,
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      var socket = new SockJS('http://localhost:7000');
      socket.addEventListener('message', run.bind(this, function (event) {
        _this.trigger('messageReceived', event.data);
        console.log(event.data);
      }));
      this.set('socket', socket);
    },
    sendInfo: function sendInfo(message) {
      this.get('socket').send(message);
    }

  });
});
/* global SockJS */