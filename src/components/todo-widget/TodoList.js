import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = ({ todoListItems = [] }) => {
    return (
        <>
            {todoListItems.map(todoItem => <TodoItem key={todoItem.id} title={todoItem.title} />)}
        </>
    );
}

TodoList.propTypes = {
    todoListItems: propTypes.array
};

const mapStateToProps = (state) => {
    return {
        todoListItems: state.todoList
    }
};

export default connect(mapStateToProps)(TodoList);