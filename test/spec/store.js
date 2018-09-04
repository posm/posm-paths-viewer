import { expect } from 'chai';
import Store from '../../src/store';
import uuidv4 from 'uuid/v4';

describe('Store', () => {
    it('it is a singleton', () => {
        
        let storeA = Store.getInstance(); 
        storeA.init();
        storeA.update(state => state.foo = 'bar')

        let storeB = Store.getInstance();
        expect(storeA).to.deep.equal(storeB);        
    });
    describe('#update', () => {
        it('updates state with provided updated function', () => {
            let store = Store.getInstance(); store.clear();
            store.update(state => { state.sequences = []; state.sequences.push(uuidv4()) });
            expect(store.state.sequences).instanceOf(Array);
        })
    })
    // describe('#clear', () => {
    //     it('clears out current state', () => {
    //         let store = Store.getInstance();
    //         expect(store.state.hasOwnProperty('sequences')).to.be.true;
    //         store.clear();
    //         expect(store.state.hasOwnProperty('sequences')).to.be.false;
    //     })
    // })
})