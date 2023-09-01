import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useAppContext } from '../Context/ContextProvider';
import { pixelSizeVertical } from '../Constants/Theme';

const Avatar = ({ size = 60 }) => {

    const { img, imageUri } = useAppContext();

    return (
        <View style={[styles.container, { width: pixelSizeVertical(size), height: pixelSizeVertical(size) }]}>
            <Image source={{ uri: imageUri ? imageUri : img }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 900,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#757575',
    },
});

export default Avatar;
