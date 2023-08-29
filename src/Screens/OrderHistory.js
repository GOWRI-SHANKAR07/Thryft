import { View, Text } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import { styles } from '../styles/Items'
import SVGImage from '../../assets/images/image.svg'

const OrderHistory = () => {
  return (
    <View  style={styles.container}>
      <SvgUri width="50%" height="100%" uri="https://res.cloudinary.com/ddkjlbzg2/image/upload/v1677522805/1676656904gravure-bart-simpson-hands-ina-pocket-cartoon-3_q7utgp.svg" />
    </View>
  )
}

export default OrderHistory