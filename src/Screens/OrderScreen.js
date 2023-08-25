import { View, Text, Animated } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import OrderedItems from './OrderedItems';
import OrderHistory from './OrderHistory';
import CustomerSupport from './CustomerSupport';
import { pixelSizeVertical } from '../Constants/Theme';
import { styles } from '../styles/Orders';

const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name='Items' component={OrderedItems} />
      <Tab.Screen name='History' component={OrderHistory} />
      <Tab.Screen name='Support' component={CustomerSupport} />
    </Tab.Navigator >
  );
}




export default OrderScreen