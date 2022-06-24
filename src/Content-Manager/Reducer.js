

const Reducer = (state, action) => {
    switch (action.type){
        case 'USER_LOGGED':
            return{...state, user: action.payload}
        case 'USER_OUT':
            return{...state, user: ''}
        case 'USE_VOTE':
            const Temp = state.totalEnergy - action.payload
            if(Temp >= 0){
                return {...state, totalEnergy: Temp}
            } else {
                return {...state, error: "You don't have enough votes"}
            }
        default:
            return{...state}
    }

}

export default Reducer;