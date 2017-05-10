define('quiz/initializers/application', ['exports'], function (exports) {
    exports.initialize = initialize;

    function initialize(application) {
        application.inject('component', 'sockjs', 'service:sockjs');
        application.inject('route', 'sockjs', 'service:sockjs');
    }

    exports['default'] = {
        name: 'websockets',
        initialize: initialize
    };
});