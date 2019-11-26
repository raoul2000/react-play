import { actionType } from './actions';

const initialState = {
    todoList: []
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REFRESH_TODO_LIST:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducers;