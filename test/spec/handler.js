import { expect } from 'chai';
import Handler from '../../src/handler';
import Store from '../../src/store';

describe('Handler', () => {
    it('is a singleton', () => {
        const store = Store.getInstance(); store.init();
        const handlerA = Handler.getInstance(); 
        const handlerB = Handler.getInstance();

        const adder = (num) => {
            return (state) => {
                state = Object.assign({}, state);
                state.sum = (state.sum || 0) + num;
            }
        }

        handlerA.dispatch('add');
        handlerA.on('add', (num) => store.update(adder(num)));

        handlerA.call('add', 5);

        console.log(store.get('sum'));
        

    })
})