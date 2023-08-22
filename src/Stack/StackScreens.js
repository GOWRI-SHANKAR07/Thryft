import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import TabScreens from './TabScreens';
import { ColorSchemeProvider } from '../Theme/ColorTheme';
import ContextProvider from '../Context/ContextProvider';

// creating stack
const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <ContextProvider>
                    <ColorSchemeProvider>
                        <NavigationContainer>
                            <Stack.Navigator
                                screenOptions={{
                                    headerShown: false
                                }}
                            >
                                <Stack.Screen name='Tab' component={TabScreens} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </ColorSchemeProvider>
                </ContextProvider>
            </SafeAreaView>
        </>
    )
}

export default StackScreens