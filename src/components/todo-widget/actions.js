

export const REFRESH_TODO_LIST = "REFRESH_TODO_LIST";
export const FETCH_TODO_LIST_START = 'FETCH_TODO_LIST_START';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR';

export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';

export const refreshTodoList = () => ({
    type: REFRESH_TODO_LIST
});

export const fetchTodoListStart = () => ({
    type: FETCH_TODO_LIST_START
});

export const fetchTodoListSuccess = (todoList) => ({
    type: FETCH_TODO_LIST_SUCCESS,
    payload: { todoList }
});

export const fetchTodoListError = (errorMessage) => ({
    type: FETCH_TODO_LIST_ERROR,
    payload: { errorMessage }
});

export const toggleTodoComplete = (id) => ({
    type: TOGGLE_TODO_COMPLETE,
    payload: { id }
});


export const fetchTodoList = (dispatch) => {

    dispatch(fetchTodoListStart());
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then(json => dispatch(fetchTodoListSuccess(json)))
                    .catch(err => dispatch(fetchTodoListError(err.message)))
            } else {
                return dispatch(fetchTodoListError(`error code ${response.status} : ${response.statusText ? response.statusText : 'no error message provided'}`))
            }
        })
        .catch(err => {
            dispatch(fetchTodoListError(err.message));
        });
}