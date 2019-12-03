import { REFRESH_TODO_LIST, FETCH_TODO_LIST_START, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_ERROR } from './actions';

const initialState = {
    todoRequest: {
        loading: false,
        errorMessage: null
    },
    todoList: []
};


const reducers = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case REFRESH_TODO_LIST:
            return {
                ...state,
                todoRequest: {
                    loading: false,
                    errorMessage: null
                }
            };
        case FETCH_TODO_LIST_START:
            return {
                ...state,
                todoRequest: {
                    loading: true,
                    errorMessage: null
                }
            };
        case FETCH_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoRequest: {
                    loading: false,
                    errorMessage: null
                },
                todoList: action.payload.todoList
            };
        case FETCH_TODO_LIST_ERROR:
            return {
                ...state,
                todoRequest: {
                    loading: false,
                    errorMessage: action.payload.errorMessage
                }
            };
        default:
            return state;
    }
};

export default reducers;