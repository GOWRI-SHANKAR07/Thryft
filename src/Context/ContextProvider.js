import { View, Text } from 'react-native'
import React, { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

const ContextProvider = ({ children }) => {

    const [profile, setProfile] = useState(false);

    const isProfile = useMemo(() => {
        return { profile, setProfile };
    }, [profile])

  return (
    <AppContext.Provider value={ isProfile }>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider