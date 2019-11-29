import React from 'react';
import './todo.scss';
import Toolbar from './Toolbar';
import TodoMain from './TodoMain';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// @ts-ignore
const storeTodo = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const TodoWidget = () => {

    const handleRefreshTodoList = () => {
        console.log('refreshing todo list ...');
    };

    return (
        <Provider store={storeTodo}>
            <div className="todo-widget">
                <div className="title">Todo Widget</div>
                <Toolbar onRefreshTodoList={handleRefreshTodoList} />
                <TodoMain overlayMessage="hello" />
            </div>
        </Provider>
    );
};


export default TodoWidget;