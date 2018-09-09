import { dispatch as d3_dispatch } from 'd3-dispatch';
import Store from '../store';

let store = Store.getInstance();

const singleton = Symbol();
const singletonEnforcer = Symbol();

const _updateLogin = (login) => {
    store.update('loggedIn', login);
    Handler.getInstance().call(login ? 'loggedIn' : 'loginFailed');
}

class Handler {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        };
    }
    static getInstance() {
        if (!this[singleton]) {
            this[singleton] = new Handler(singletonEnforcer);
        }
        return this[singleton];
    }

    init() {
        if (!this._dispatcher) {
            this._dispatcher = null
        }

        if (!this._events) {
            this._handlersMap = {
                'login': _updateLogin,
                'loggedIn': () => {},
                'loginFailed': () => {}
            }

            this._events = Object.keys(this._handlersMap);
            this._dispatcher = d3_dispatch.apply(d3_dispatch, this._events);

            for (let i = 0; i < this._events.length; i++) {
                const eventType = this._events[i];
                this.on(eventType, this._handlersMap[eventType]);
            }

        }
    }

    call(_) {
        this._dispatcher.call.apply(this._dispatcher, arguments);
    }

    on(_) {
        this._dispatcher.on.apply(this._dispatcher, arguments)
    }
}

export default Handler;

