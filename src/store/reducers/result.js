import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: Date(), value: state.counter }), // add an element to the array
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.resultId), // remove an element from the array
            }
    }
    return state;
};

export default reducer;