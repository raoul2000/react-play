import { REFRESH_TODO_LIST, FETCH_TODO_LIST_START, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_ERROR } from './actions';

const initialState = {
    todoRequest: {
        loading: false,
        error: null
    },
    todoList: []
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_TODO_LIST:
            return {
                ...state,
                todoList: [],
                todoRequest: {
                    loading: false,
                    error: null
                }
            };
        case FETCH_TODO_LIST_START:
            return {
                ...state,
                todoList: [],
                todoRequest: {
                    loading: true,
                    error: null
                }
            };
        case FETCH_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoRequest: {
                    loading: false,
                    error: null
                },
                todoList: action.payload
            };
        case FETCH_TODO_LIST_ERROR:
            return {
                ...state,
                todoRequest: {
                    loading: false,
                    error: action.payload.errorMessage
                }
            };
        default:
            return state;
    }
};

export default reducers;