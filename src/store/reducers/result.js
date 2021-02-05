import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // add an element to the array
            return updateObject(state, { results: state.results.concat({ id: Date(), value: action.result }) });
        case actionTypes.DELETE_RESULT:
            // remove an element from the array
            return updateObject(state, { results: state.results.filter(result => result.id !== action.resultId) });
    }
    return state;
};

export default reducer;