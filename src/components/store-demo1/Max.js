import React from 'react';
import { connect } from 'react-redux';
import { addValueToBob } from './actions';
import propTypes from 'prop-types';

const Max = ({ value = 0, onGiveOneAppleToBob }) => {
    const handleClick = () => {
        onGiveOneAppleToBob(1);
    };

    return (<div className="max">
        <div>
            Hello I'm Max I have {value} bananas<br />
            <button onClick={handleClick}>Give Bob an Apple</button>
        </div>
    </div>)
};


Max.propTypes = {
    value: propTypes.number,
    onGiveOneAppleToBob: propTypes.func.isRequired
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        value: state.maxValue
    }
};

const mapDispatchToProps = { onGiveOneAppleToBob: addValueToBob };

export default connect(mapStateToProps, mapDispatchToProps)(Max);