import { dispatch as d3_dispatch } from 'd3-dispatch';
import Store from '../store';

let store = Store.getInstance();

const singleton = Symbol();
const singletonEnforcer = Symbol();


const _updateLogin = (context) => {
    context.dispatch('login');
    let loginUpdater = (login) => {
        return (state) => {
            state = Object.assign({}, state);
            state.loggedIn = login;
        }
    }
    context.on('login', (login) => store.update(loginUpdater(login)));
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
            this._dispatcher = d3_dispatch
        }
        _updateLogin(this)
    }

    call(args) {
        this._dispatcher.call(...args);
    }

    dispatch(args) {
        this._dispatcher.dispatch(...args);
    }

    on(args) {
        this._dispatcher.on(...args);
    }
}

export default Handler

