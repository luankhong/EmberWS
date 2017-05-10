define('quiz/router', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _quizConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('polls', function () {
            this.route('poll', {
                path: '/:poll_id'
            });
            this.route('results', {
                path: '/:poll_id/results'
            });
            this.route('ws');
        });
    });

    exports['default'] = Router;
});