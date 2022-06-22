import  { useContext, createContext, useState, useReducer } from 'react';
import Reducer from './Reducer';

const AppContext = createContext();
const defaultState = {
    totalEnergy: 100,
    user: '',
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, defaultState)
    const [modal, setModal] = useState(false)

    const userLogged = (name) => {
        dispatch({type: 'USER_LOGGED', payload: name});
    }
    const userOut = () => {
        dispatch({type: 'USER_OUT'})
    }

    return(
        <AppContext.Provider
            value={{
                ...state,
                userLogged,
                userOut,
                modal,
                setModal
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