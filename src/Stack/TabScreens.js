import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import MessageScreen from '../Screens/MessageScreen';
import CatlogScreen from '../Screens/CatlogScreen';
import OrderScreen from '../Screens/OrderScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorSchemeContext } from '../Theme/ColorTheme';
import SellScreen from '../Screens/SellScreen';
import { useNavigationState } from '@react-navigation/native';

// creating Bottom Tab
const Tab = createBottomTabNavigator();

const TabScreens = () => {

  // colorscheme for dark / light
  const { colorScheme } = useColorSchemeContext();



  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: '#00A8E8' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', borderBlockColor: colorScheme === 'dark' ? '#000' : 'lightgray', },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#00A8E8',
        tabBarInactiveTintColor: 'lightgray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Message') {
            iconName = focused
              ? 'message'
              : 'message-outline';
          } else if (route.name === 'Catlog') {
            iconName = focused
              ? 'shopping'
              : 'shopping-outline';
          } else if (route.name === 'Sell') {
            iconName = focused
              ? 'plus-circle'
              : 'plus-circle-outline';
          } else if (route.name === 'Order') {
            iconName = focused
              ? 'cart'
              : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'account'
              : 'account-outline';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
            />
          );
        }
      })}
      initialRouteName='Catlog'
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Message' component={MessageScreen} />
      <Tab.Screen name='Catlog' component={CatlogScreen} />
      <Tab.Screen name='Sell' component={SellScreen} />
      <Tab.Screen name='Order' component={OrderScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabScreens