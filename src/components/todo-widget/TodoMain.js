import React from 'react';
import TodoList from './TodoList';
import propTypes from 'prop-types';



const TodoMain = ({ overlayMessage }) => {

    const overlayStyle = {
        display: overlayMessage ? "default" : "none"
    };
    return (
        <div className="todo-main">
            <div className="overlay" style={overlayStyle}>
                {overlayMessage}
            </div>
            <TodoList />
        </div>
    );
};

TodoMain.propTypes = {
    overlayMessage: propTypes.string
};

export default TodoMain;