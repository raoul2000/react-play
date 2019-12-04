import React from 'react';
import propTypes from 'prop-types';


const TodoItem = ({ itemId, title, completed, onChangeChk }) => {
    return (
        <div className="todo-item">
            <input type="checkbox" defaultChecked={completed} onChange={() => onChangeChk(itemId)} />
            <span className="title">
                {title}
            </span>
        </div>
    );
};

TodoItem.propTypes = {
    title: propTypes.string.isRequired
};
/**
 * When the parent component updates, all its children update too. In the case where a child receives the
 * same props, there is no need for it to be updated. To avoid re-render of the component if props have not changed
 * use memo()
 */
export default React.memo(TodoItem);
