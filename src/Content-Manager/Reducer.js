

const Reducer = (state, action) => {
    switch (action.type){
        case 'USER_LOGGED':
            return{...state, user: action.payload}
        case 'USER_OUT':
            return{...state, user: ''}
        default:
            return{...state}
    }

}

export default Reducer;