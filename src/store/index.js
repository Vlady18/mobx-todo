import { configure } from 'mobx';

import todoStore from './cart';

// import * as products from '~/api/products';
// import * as cart from '~/api/cart';

// configure({ enforceActions: "observed" })

class RootStore{
    constructor(){
        this.storage = localStorage;

        this.todo = new todoStore(this);

    }    
}

export default new RootStore();