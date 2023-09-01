import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styles/CatalogCard'
import { FontAwesome } from '@expo/vector-icons';
import { pixelSizeVertical } from '../Constants/Theme';


const CatalogCard = ({ items }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.prdImg}
                source={{ uri: items.image }}
            />
            <View style={styles.dtsCont}>
                <View style={styles.condCont}>
                    <FontAwesome
                        name="check-circle"
                        size={15}
                        color="#385fc3"
                        style={{ paddingRight: pixelSizeVertical(7) }}
                    />
                    <Text style={styles.condTxt}>{items.condition}</Text>
                </View>
                <View style={styles.titleCont}>
                    <Text style={styles.titleTxt}>{items.title}</Text>
                    <Text style={styles.titleTxt}> {items.size}</Text>
                </View>
                <Text>{items.idr}</Text>
            </View>
            <TouchableOpacity style={styles.edtBtn}>
                <Text style={styles.edtBtnTxt}>Edit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CatalogCard;