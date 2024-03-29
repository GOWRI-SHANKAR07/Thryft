import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from '../styles/Catlog'
import { Entypo } from '@expo/vector-icons';
import { data } from '../Data/CatalogData';
import { Octicons } from '@expo/vector-icons';
import { useAppContext } from '../Context/ContextProvider';
import Avatar from '../Components/Avatar';
import { heightPixel } from '../Constants/Theme';
import CatalogCard from '../Components/CatalogCard';


function CatlogScreen() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [])
  

  const ITEM_HEIGHT = heightPixel(100);

  const Catalog = useCallback(({ item }) => (
    <CatalogCard items={item} />
  ), []);

  return (
    <View style={styles.container}>
      <View style={styles.headerCont}>
        <Text style={styles.headerTxt}>Catlog</Text>
        <View style={styles.headerRgtCont}>
          <Avatar />
          <Octicons
            name="dot-fill"
            size={24}
            color="yellow"
            style={styles.active}
          />
          <Entypo
            style={styles.menu}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={styles.sellCont}>
        <Text style={styles.sellTxt}>Ready to sell your good second-hand stuff?</Text>
        <TouchableOpacity style={styles.sellBtn}>
          <Text>Sell now</Text>
        </TouchableOpacity>
      </View>
      
        <FlatList
          style={styles.lstCont}
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10} // Number of items to render initially
          windowSize={5} // Number of items to keep in the rendering window
          removeClippedSubviews={true} // Remove items that are not visible on the screen
          renderItem={Catalog}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
    </View>
  )
}

export default CatlogScreen



