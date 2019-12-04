import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodoComplete } from './actions';

const TodoList = ({ todoListItems = [], dispatch }) => {

    const handleChangeChk = (itemId) => {
        console.log('checkbox changed : ' + itemId);
        dispatch(toggleTodoComplete(itemId));
    }
    return (
        <>
            {todoListItems.map(todoItem => <TodoItem
                key={todoItem.id}
                itemId={todoItem.id}
                title={todoItem.title}
                completed={todoItem.completed}
                onChangeChk={handleChangeChk} />)}
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
// If you don't specify the second argument to connect(), your component will receive dispatch by default. 
export default connect(mapStateToProps)(TodoList);