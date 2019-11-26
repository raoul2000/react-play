import React from 'react';
import { connect } from 'react-redux';
import { addValueToMax } from './actions';
import propTypes from 'prop-types';

const Bob = ({ value = 0, onGiveOneBananaToMax }) => {
  const handleClick = () => {
    onGiveOneBananaToMax(1);
  };

  return (<div className="bob">
    <div>
      Hello I'm bob I have {value} apples<br />
      <button onClick={handleClick}>Give Max a banana</button>
    </div>
  </div>)
};

Bob.propTypes = {
  value: propTypes.number,
  onGiveOneBananaToMax: propTypes.func.isRequired
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.bobValue
  }
};

const mapDispatchToProps = { onGiveOneBananaToMax: addValueToMax };

export default connect(mapStateToProps, mapDispatchToProps)(Bob);