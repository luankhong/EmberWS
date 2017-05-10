export function initialize(application) {
    application.inject('component', 'sockjs', 'service:sockjs');
    application.inject('route', 'sockjs', 'service:sockjs');
    
}

export default {
    name: 'websockets',
    initialize
};
