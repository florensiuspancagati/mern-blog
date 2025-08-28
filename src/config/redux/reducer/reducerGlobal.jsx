const initialStateGlobal = {
    name: 'Panca'
};

const reducerGlobal = (state = initialStateGlobal, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Dwi Panca'
        };
    }
    
    return state;
}

export default reducerGlobal;