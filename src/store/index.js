const singleton = Symbol();
const singletonEnforcer = Symbol();

class Store {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        };
    }
    static getInstance() {
        if (!this[singleton]) {
            this[singleton] = new Store(singletonEnforcer);
        }
        return this[singleton];
    }

    get state() {
        return this._state;
    }

    get(property) {
        if (!this._state.hasOwnProperty('property')) {
            throw new Error('state does not have provided property');
        }
        return this._state[property];
    }

    init() {
        if (!this._state) {
           this._state = {}
        }
    }
    clear() {
        if (this._state) {
            this._state = {}
        }
    }

    update(updater) {
        updater()(this._state);
    }
}

export default Store;