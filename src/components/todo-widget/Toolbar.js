import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchTodoList } from './actions';

const Toolbar = ({ onRefreshTodoList }) => {
    return (
        <div className="toolbar">
            <button onClick={onRefreshTodoList}>refresh</button>
        </div>
    );
};

Toolbar.propTypes = {
    onRefreshTodoList: propTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        onRefreshTodoList: () => {
            return fetchTodoList(dispatch);
        }
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);