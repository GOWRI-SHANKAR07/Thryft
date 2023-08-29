import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Colors } from '../Constants/Theme'
import { styles } from '../styles/Items'

const OrderedItems = () => {

  return (
    <View style={styles.container}>
      <Svg height="50%" width="50%" viewBox='0 0 110 110' >
        <Circle cx="50" cy="50" r="50" stroke="#000" strokeWidth="2" fill={Colors.primary} />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
    </View>
  )
}

export default OrderedItems