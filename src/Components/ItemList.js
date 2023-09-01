import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/ItemList'
import { AntDesign } from '@expo/vector-icons'

const ItemList = ({ items }) => {
    return (
        <ScrollView>
            <TouchableOpacity>
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.ImageCont}
                            source={{ uri: items.image }}
                        />
                    </View>
                    <View style={styles.detailsCont}>
                        <Text style={styles.deliveryTxt}>{items.delivered ? 'Delivered on' : 'Delivery date '} {items.date}</Text>
                        <Text style={styles.itemTitle}>{items.title}</Text>
                        <Text style={styles.rateTxt}>Rs. {items.rate}</Text>
                        <View style={styles.ratingCont}>
                            {items.rating.map((item) =>
                                <AntDesign
                                    name={items.rated ? 'star' : 'staro'}
                                    size={24}
                                    color={items.rated ? 'gold' : 'black'}
                                />
                            )}
                        </View>
                        {items.rated ? '' : <Text style={styles.ratingMsg}>Rate this product now</Text>}
                    </View>
                    <AntDesign
                        name="right"
                        size={24}
                        color="black"
                    />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ItemList