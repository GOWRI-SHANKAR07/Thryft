import { StyleSheet } from "react-native";
import { Colors, fontPixel, heightPixel, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Colors.greyBorder,
        padding: pixelSizeVertical(20),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },

    ImageCont: {
        width: widthPixel(150),
        height: heightPixel(150),
        borderRadius: 20,
    },

    detailsCont: {
        height: heightPixel(150),
        justifyContent: 'space-between',
    },

    deliveryTxt: {
        fontFamily: 'Montserrat-Bold',
    },

    itemTitle: {
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.greyplaceholder,
    },

    rateTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontPixel(15),
    },

    ratingCont: {
        marginTop: pixelSizeVertical(5),
        flexDirection: 'row'
    },

    ratingMsg: {
        fontFamily: 'Montserrat-Medium',
        fontSize: fontPixel(12),
        color: Colors.greyplaceholder,
        marginTop: pixelSizeVertical(5)
    },

    starCont: {
        borderWidth: 1,
        borderColor: '#000',
        width: widthPixel(30),
        flexDirection: 'row',
    }
})

export { styles }