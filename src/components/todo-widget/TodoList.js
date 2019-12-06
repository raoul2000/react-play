import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodoComplete } from './actions';


// use the form below when no second argument is provided to connect : dispatch is 
// passed to the component which is then able to dispatch the apropriate action
// const TodoList = ({ todoListItems = [], dispath }) => {

const TodoList = ({ todoListItems = [], onToggleTodo }) => {

    // uncomment when dispatch is passed as second argument
    // in this case the children should receive :
    //     onChangeChk={handleChangeChk} 
    /* 
        const handleChangeChk = (itemId) => {
            console.log('checkbox changed : ' + itemId);
            dispatch(toggleTodoComplete(itemId));
        }    
    */
    return (
        <>
            {todoListItems.map(todoItem => <TodoItem
                key={todoItem.id}
                itemId={todoItem.id}
                title={todoItem.title}
                completed={todoItem.completed}
                onChangeChk={onToggleTodo} />)}
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

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo: itemId => dispatch(toggleTodoComplete(itemId))
})

// If you don't specify the second argument to connect(), your component will receive dispatch by default. 
//export default connect(mapStateToProps)(TodoList);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);