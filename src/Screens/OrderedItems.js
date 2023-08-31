import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Colors } from '../Constants/Theme'
import { styles } from '../styles/Items'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import ItemList from '../Components/ItemList'
import { orderedItems } from '../Data/ItemsData'

const OrderedItems = () => {

  return (
    <View style={styles.container}>
      <View style={styles.searchCont}>
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.search}
          />
          <TextInput
            style={styles.searchTxt}
            placeholder='Search your order'
          />
        </View>
        <TouchableOpacity>
          <View style={styles.filterCont}>
            <Ionicons
              name="filter-sharp"
              size={24}
              color="black"
            />
            <Text style={styles.filterTxt}>Filters</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine} />
      {orderedItems.map((item) => <ItemList key={item.id} items={item} index={item.id} />)}
    </View>
  )
}

export default OrderedItems