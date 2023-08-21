import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Colors, pixelSizeHorizontal } from '../Constants/Theme';
import { styles } from '../styles/Profile';

const ProfileList = ({ items }) => {

    return (
        <View>
            <View style={styles.profileCont}>
                <View style={styles.inner1Cont}>
                    <Ionicons
                        style={{ paddingLeft: pixelSizeHorizontal(10) }}
                        name={items.iconName}
                        size={24}
                        color= {items.iconName === 'log-out-outline' ? Colors.red : Colors.black}
                    />
                    <Text style={[styles.profileTxt, { color: items.iconName === 'log-out-outline' ? Colors.red : Colors.black }]}>{items.title}</Text>
                </View>
                <View style={styles.inner1Cont}>
                    <Text style={{ paddingRight: pixelSizeHorizontal(10) }}>
                        {items.IDR != '' ? items.IDR : null}
                    </Text>
                    <Text style={{ paddingRight: pixelSizeHorizontal(10) }}>
                        {items.mode != '' ? items.mode : null}
                    </Text>
                    {items.version != '' ?
                        <Text>{items.version}</Text>
                        :
                        < Entypo
                            name="chevron-right"
                            size={24}
                            color={Colors.black}
                        />
                    }
                </View>
            </View>
            {
                items.divider && <View style={styles.divLine}></View>
            }
        </View>
    )
}

export default ProfileList