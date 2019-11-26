import { actionTypes } from './actions';

const initialState = {
    bobValue: 0,
    maxValue: 0
};

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_VALUE_TO_BOB:
            return {
                ...state,
                bobValue: state.bobValue + action.value
            };
        case actionTypes.ADD_VALUE_TO_MAX:
            return {
                ...state,
                maxValue: state.maxValue + action.value
            }
        default:
            return state;
    }
}

export default reducers;