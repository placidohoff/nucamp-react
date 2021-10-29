import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//IMPORT EACH INDIVIDUAL REDUCER TO COMBINE THEM INTO ONE:
import { Campsites } from './campsites'
import { Comments, COMMENTS } from './comments'
import { Partners, PARTNERS } from './partners'
import { Promotions } from './promotions'
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                //the modelname for our form is feebackForm,
                    //its initial data is InitialFeedback.
                    //changing this form will hit this reducer:
                feedbackForm: InitialFeedback
            })
        }),

        applyMiddleware(thunk, logger)
    );

    return store;
};