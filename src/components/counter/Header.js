import React from 'react';
import PropTypes from 'prop-types';

const Header = ({valueThreshold = 2, currentValue = 0}) => {

    const headerText = currentValue !== valueThreshold
        ? 'I am a dump header'
        : `bam !  ${valueThreshold} has been hit` ;

    return (
        <h1>{headerText}</h1>
    );
}

Header.propTypes = {
    currentValue : PropTypes.number,
    valueThreshold : PropTypes.number,
};

/* 
    This component is exported as Pure : when its owner is rendered, this component will not 
    be automatically rendered. The arePropsEqual function is used by React to determine if the 
    Header component must be rendered or not.
    Here, Header is rendered only if the current Value is equal to 2
*/
const arePropsEqual = ( prevProps, nextProps) => {
    console.log(prevProps, nextProps);
    return nextProps.currentValue !== 2;
};

export default React.memo(Header, arePropsEqual);