import { StyleSheet } from "react-native";
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.white,
    },

    searchCont: {
        margin: pixelSizeVertical(15),
        paddingLeft: pixelSizeHorizontal(10),
        paddingRight: pixelSizeHorizontal(10),
        height: heightPixel(80),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    },

    searchBox: {
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        width: widthPixel(250),
        height: heightPixel(50),
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    search: {
        // right: pixelSizeHorizontal(35),
    },

    searchTxt: {
        width: widthPixel(200),
        left: pixelSizeHorizontal(5),
        fontFamily: 'Montserrat-Medium'
    },

    filterCont: {
        flexDirection: "row",
        width: widthPixel(80),
        justifyContent: "space-between",
        alignItems: "center",
    },

    filterTxt: {
        fontFamily: 'Montserrat-SemiBold'
    },

    dividerLine: {
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        bottom: pixelSizeVertical(15),
    }
})

export { styles };