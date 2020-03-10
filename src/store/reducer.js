const defaultState = {
    focusd:false
}

export default (state = defaultState,action) => {
    if(action.type === 'search_focusd'){
        return{
            focusd:true
        }
    }
    if(action.type === 'search_blur'){
        return{
            focusd:false
        }
    }
    return state;
}