import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import MessageScreen from '../Screens/MessageScreen';
import CatlogScreen from '../Screens/CatlogScreen';
import OrderScreen from '../Screens/OrderScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorSchemeContext } from '../Theme/ColorTheme';
import SellScreen from '../Screens/SellScreen';
import { useAppContext } from '../Context/ContextProvider';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


// creating Bottom Tab
const Tab = createBottomTabNavigator();

const TabScreens = ({ route }) => {

  // colorscheme for dark / light
  const { colorScheme } = useColorSchemeContext();

  // profile context
  const { profile, setProfile } = useAppContext();


  // retrieving the current route name
  const focusedRouteName = getFocusedRouteNameFromRoute(route);
  console.log(focusedRouteName);

  // Set profile context based on focused route
  useEffect(() => {
    if (focusedRouteName === 'Profile') {
      setProfile(true);
    } else {
      setProfile(false);
    }
  }, [focusedRouteName, profile]);



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
          switch (route.name) {
            case 'Home':
              iconName = focused
                ? 'home'
                : 'home-outline';
              break;

            case 'Message':
              iconName = focused
                ? 'message'
                : 'message-outline';
              break;

            case 'Catalog':
              iconName = focused
                ? 'shopping'
                : 'shopping-outline';
              break;

            case 'Sell':
              iconName = focused
                ? 'plus-circle'
                : 'plus-circle-outline';
              break;

            case 'Order':
              iconName = focused
                ? 'cart'
                : 'cart-outline';
              break;

            case 'Profile':
              iconName = focused
                ? 'account'
                : 'account-outline';
              break;
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
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Message' component={MessageScreen} />
      {
        profile ? (
          <Tab.Screen name='Sell' component={SellScreen} />
        ) : (
          <Tab.Screen name='Catalog' component={CatlogScreen} />
        )
      }
      <Tab.Screen name='Order' component={OrderScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator >
  )
}

export default TabScreens;