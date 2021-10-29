import { createStore, combineReducers } from 'redux';
//IMPORT EACH INDIVIDUAL REDUCER TO COMBINE THEM INTO ONE:
import { Campsites } from './campsites'
import { Comments, COMMENTS } from './comments'
import { Partners, PARTNERS } from './partners'
import { Promotions } from './promotions'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};