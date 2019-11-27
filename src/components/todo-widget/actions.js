export const actionType = {
    REFRESH_TODO_LIST: "REFRESH_TODO_LIST",
    FETCH_TODO_LIST_START: 'FETCH_TODO_LIST_START',
    FETCH_TODO_LIST_SUCCESS: 'FETCH_TODO_LIST_SUCCESS',
    FETCH_TODO_LIST_ERROR: 'FETCH_TODO_LIST_ERROR'
};


export const refreshTodoList = () => ({
    type: actionType.REFRESH_TODO_LIST
});

export const fetchTodoListStart = () => ({
    type: actionType.FETCH_TODO_LIST_START
});

export const fetchTodoListSuccess = (todoList) => ({
    type: actionType.FETCH_TODO_LIST_SUCCESS,
    payload: todoList
});

export const fetchTodoListError = (errorMessage) => ({
    type: actionType.FETCH_TODO_LIST_ERROR,
    payload: errorMessage
});


export const fetchTodoList = (dispatch) => {
    dispatch(fetchTodoListStart());
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response);
            dispatch(fetchTodoListSuccess(response));
        })
        .catch(err => {
            dispatch(fetchTodoListError(err.message));
        });
}