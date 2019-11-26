
export const actionTypes = {
    ADD_VALUE_TO_BOB: 'ADD_VALUE_TO_BOB',
    ADD_VALUE_TO_MAX: 'ADD_VALUE_TO_MAX'
}

export const addValueToBob = (value) => ({
    type: actionTypes.ADD_VALUE_TO_BOB,
    value
});

export const addValueToMax = (value) => ({
    type: actionTypes.ADD_VALUE_TO_MAX,
    value
});