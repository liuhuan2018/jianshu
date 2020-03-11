const defaultState = {
    focusd:false,
}

export default (state = defaultState,action) => {
    switch (action.type) {
        case 'search_focusd':
            return {
                focusd:true,
            }
        case 'search_blur':
            return {focusd:false}
        default:
            return state;
    }
   /* if(action.type === 'search_focusd'){
        return{
            focusd:true
        }
    }
    if(action.type === 'search_blur'){
        return{
            focusd:false
        }
    }
    return state;*/
}