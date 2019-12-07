import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchTodoList } from './actions';

const Toolbar = ({ onRefreshTodoList, todoItemCount = 0, completedTodoItemCount = 0 }) => {
    return (
        <div className="toolbar">
            <button onClick={onRefreshTodoList}>refresh</button>
            <span className="stat-info">
                total : {todoItemCount} | completed : {completedTodoItemCount} | uncompleted : {todoItemCount - completedTodoItemCount}
            </span>
        </div>
    );
};

Toolbar.propTypes = {
    onRefreshTodoList: propTypes.func.isRequired,
    todoItemCount: propTypes.number
};

const mapStateToProps = (state) => ({
    todoItemCount: state.todoList.length,
    completedTodoItemCount: state.todoList.filter(todoItem => todoItem.completed).length
});

const mapDispatchToProps = dispatch => {
    return {
        onRefreshTodoList: () => {
            return fetchTodoList(dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);