import  { useContext, createContext, useState} from 'react';

const AppContext = createContext();


const AppProvider = ({children}) => {
    const [modal, setModal] = useState(false)
    const [totenergy, setTotEnergy] = useState(70);
    const [error, setError] = useState(false);
    const [user, setUser] = useState('');
    const [ restricted, setRestricted] = useState(false);

    

    return(
        <AppContext.Provider
            value={{
                modal,
                setModal,
                totenergy,
                setTotEnergy,
                error,
                setError,
                user,
                setUser,
                restricted,
                setRestricted,
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