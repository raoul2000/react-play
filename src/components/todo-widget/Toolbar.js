import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { refreshTodoList } from './actions';

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

const mapDispatchToProps = {
    onRefreshTodoList: refreshTodoList
};

export default connect(null, mapDispatchToProps)(Toolbar);