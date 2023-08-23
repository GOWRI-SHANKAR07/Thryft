import { View, Text } from 'react-native'
import React, { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

const ContextProvider = ({ children }) => {
  // tab bar screen switch handling state
  const [profile, setProfile] = useState(false);
  // profile pic permisiion  & upload state
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const isProfile = useMemo(() => {
    return { profile, setProfile, permissionGranted, setPermissionGranted, imageUri, setImageUri };
  }, [profile, permissionGranted, imageUri])

  return (
    <AppContext.Provider value={isProfile}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider