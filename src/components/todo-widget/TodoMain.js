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
            <div className="todo-list">
                <TodoList />
            </div>
        </div>
    );
};

TodoMain.propTypes = {
    overlayMessage: propTypes.string
};
// TODO: to continue ...
// connect this component to the store so to react to todoRequest value, representing the state of the request*
// to get todos items.
/*
const mapStateToProps = (state) => {
    return {
        overlayMessage: 
    };
};
*/
export default TodoMain;