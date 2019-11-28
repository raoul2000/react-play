

export const REFRESH_TODO_LIST = "REFRESH_TODO_LIST";
export const FETCH_TODO_LIST_START = 'FETCH_TODO_LIST_START';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR'

export const refreshTodoList = () => ({
    type: REFRESH_TODO_LIST
});

export const fetchTodoListStart = () => ({
    type: FETCH_TODO_LIST_START
});

export const fetchTodoListSuccess = (todoList) => ({
    type: FETCH_TODO_LIST_SUCCESS,
    payload: todoList
});

export const fetchTodoListError = (errorMessage) => ({
    type: FETCH_TODO_LIST_ERROR,
    payload: errorMessage
});


export const fetchTodoList = (dispatch) => {

    dispatch(fetchTodoListStart());
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            dispatch(fetchTodoListSuccess(result));
        })
        .catch(err => {
            dispatch(fetchTodoListError(err.message));
        });
}