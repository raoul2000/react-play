import React from 'react';
import TodoList from './TodoList';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoMain = ({ overlayMessage }) => {

    /**
     * Overlay element is displayed only if there is an overlay message to show to the user
     * this can be an info or an error message
     */
    const overlayElement = (overlayMessage
        ? <div className="overlay">
            {overlayMessage}
        </div>
        : null
    );

    return (
        <div className="todo-main">
            {overlayElement}
            <div className="todo-list">
                <TodoList />
            </div>
        </div>
    );
};

const mapStateToOverlayMessage = (state) => {
    return state.todoRequest.loading ? "Todo list is loading ..." : state.todoRequest.errorMessage;
};

TodoMain.propTypes = {
    overlayMessage: propTypes.string
};

const mapStateToProps = (state) => {
    return {
        overlayMessage: mapStateToOverlayMessage(state)
    };
};

export default connect(mapStateToProps)(TodoMain);