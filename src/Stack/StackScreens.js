import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import TabScreens from './TabScreens';
import { ColorSchemeProvider } from '../Theme/ColorTheme';
import ContextProvider from '../Context/ContextProvider';
import LoginScreen from '../Screens/LoginScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";


// creating stack
const Stack = createNativeStackNavigator();

const StackScreens = () => {

    //user state
    const [user, setUser] = useState(null)
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log(user)

        })
    }, [])

    return (
        <ContextProvider>
            <ColorSchemeProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName={'Login'}
                    >
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='Tab' component={TabScreens} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ColorSchemeProvider>
        </ContextProvider>
    )
}

export default StackScreens