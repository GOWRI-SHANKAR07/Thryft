import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";

const { StyleSheet } = require("react-native");
const { Colors, heightPixel, pixelSizeVertical, pixelSizeHorizontal, widthPixel, fontPixel } = require("../Constants/Theme");

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.white,
    },

    headerCont: {
        backgroundColor: '#121a14',
        height: heightPixel(650),
        padding: pixelSizeHorizontal(10),

    },

    headerRgtCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: pixelSizeVertical(20),
        paddingLeft: pixelSizeHorizontal(10),
    },

    headerTxt: {
        color: '#fff',
        paddingLeft: pixelSizeHorizontal(10),
        fontSize: fontPixel(20),
        fontFamily: 'Montserrat-Bold'
    },

    imgCont: {
        flexDirection: 'row',
        marginRight: pixelSizeHorizontal(10),
    },

    active: {
        right: pixelSizeHorizontal(15),
        top: pixelSizeVertical(28),
        paddingRight: pixelSizeHorizontal(10),
        borderWidth: 1,
        borderColor: '#ffffff00'
    },

    sellerCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: pixelSizeHorizontal(20),
        marginTop: pixelSizeVertical(20),
    },

    sellerTxt: {
        color: Colors.white,
        fontSize: fontPixel(18),
        fontFamily: 'Montserrat-Bold'
    },

    innerCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: pixelSizeHorizontal(20),
        marginRight: pixelSizeHorizontal(10),
    },

    statCont: {
        width: widthPixel(165),
        justifyContent: "space-between"
    },

    statTxt: {
        color: Colors.white,
        paddingBottom: pixelSizeVertical(10),
        fontFamily: 'Montserrat-Medium'
    },

    bar: {
        borderTopWidth: 7,
        borderColor: Colors.green,
        borderRadius: 5,
        marginBottom: pixelSizeVertical(5),
        width: widthPixel(150)
    },

    divLine: {
        borderTopWidth: 1,
        borderColor: Colors.greyBorder,
        margin: pixelSizeVertical(22),
    },

    inner2Cont: {
        // borderWidth: 1,
        // borderColor: '#fff',
        flexDirection: "column",
    },

    nxtLvlCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: pixelSizeHorizontal(20),
        bottom: pixelSizeVertical(20),
        // borderWidth: 1,
        // borderColor: '#fff',
    },

    nxtLvlTxt: {
        color: Colors.white,
        fontSize: fontPixel(18),
        fontFamily: 'Montserrat-Bold'
    },

    statusCont: {
        // borderWidth: 1,
        // borderColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-between",
        bottom: pixelSizeVertical(20),
    },

    statusTxtCont: {
        // borderWidth: 1,
        // borderColor: '#fff',
        width: widthPixel(280),
        marginLeft: pixelSizeHorizontal(20),
        marginBottom: pixelSizeVertical(20),
    },

    statusTxt: {
        color: Colors.white,
        fontFamily: 'Montserrat-Medium'
    },

    completionRate: {
        // borderWidth: 1,
        // borderColor: '#fff',
        margin: pixelSizeHorizontal(10),
        marginRight: pixelSizeHorizontal(20),
        padding: pixelSizeHorizontal(10),
        bottom: pixelSizeVertical(10),
        justifyContent: "center",
        alignItems: "center"
    },

    rateTxt: {
        color: Colors.green.replace,
        fontFamily: 'Montserrat-Medium'
    },

    rateBar: {
        borderTopWidth: 7,
        borderColor: Colors.green,
        borderRadius: 5,
        marginTop: pixelSizeVertical(10),
        width: widthPixel(60),
    },

    rateCont: {
        flexDirection: "row",
        marginTop: pixelSizeVertical(10),
    },

    orderBar: {
        borderTopWidth: 7,
        borderColor: Colors.white,
        width: widthPixel(30),
    },

    earningsCont: {
        flexDirection: 'column',
        margin: pixelSizeHorizontal(30),
    },

    ernHeadCont: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    ernTxt: {
        fontFamily: 'Montserrat-Bold'
    },

    dtlBtn: {
        flexDirection: 'row',
        alignItems: "center",
        width: widthPixel(80),
        justifyContent: "space-between"
    },

    amountCont: {
        borderWidth: 1,
        borderColor: Colors.grey,
        height: heightPixel(200),
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "center",
        padding: pixelSizeHorizontal(10),
        paddingBottom: pixelSizeVertical(25),
    },

    amtTxtCont: {
        width: widthPixel(155),
        marginTop: pixelSizeVertical(10),
    },

    amtDescTxt: {
        fontSize: fontPixel(14),
        fontFamily: 'Montserrat-SemiBold',
    },

    amtTxt: {
        color: Colors.primary,
        paddingTop: pixelSizeVertical(10),
        fontFamily: 'Montserrat-Medium',  
    }
})

export { styles }