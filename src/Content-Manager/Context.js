import  { useContext, createContext, useState, useReducer } from 'react';
import Reducer from './Reducer';

const AppContext = createContext();
const defaultState = {
    totalEnergy: 100,
    user: '',
    error: '',
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, defaultState)
    const [modal, setModal] = useState(false)
    const [totenergy, setTotEnergy] = useState(100);
    

    const userLogged = (name) => {
        dispatch({type: 'USER_LOGGED', payload: name});
    }
    const userOut = () => {
        dispatch({type: 'USER_OUT'})
    }
    const useVote = (vote) => {
        dispatch({type: 'USE_VOTE', payload: vote})
    }

    return(
        <AppContext.Provider
            value={{
                ...state,
                userLogged,
                userOut,
                modal,
                setModal,
                useVote,
                totenergy,
                setTotEnergy
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};