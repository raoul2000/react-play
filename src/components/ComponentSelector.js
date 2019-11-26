import React from 'react';

const ComponentSelector = ({ currentComponentName, onSelectComponent, componentNameList }) => {

    const componentListElements = componentNameList.map(componentName => {
        const selectedClass = (componentName === currentComponentName ? 'selected' : '');
        return <li
            key={componentName}
            className={selectedClass}
            data-component-name={componentName}>{componentName}</li>;
    });
    const handleClick = (ev) => {
        ev.preventDefault();
        onSelectComponent(ev.target.dataset.componentName);
    }
    return (<ul className="component-selector" onClick={handleClick}>
        {componentListElements}
    </ul>)
};

export default ComponentSelector;