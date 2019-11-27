import { actionType } from './actions';

const initialState = {
    todoRequest: {
        loading: false,
        error: null
    },
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