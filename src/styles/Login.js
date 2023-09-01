import { StyleSheet } from "react-native";
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeHorizontal(5),
    fontSize: fontPixel(35),
    textAlign: "center",
    color: Colors.white
  },
  smalltext: {
    paddingBottom: pixelSizeHorizontal(20),
    fontSize: fontPixel(20),
    color: Colors.greyDark,
    textAlign: "center",
  },
  input: {
    padding: pixelSizeHorizontal(5),
    border: "none",
    backgroundColor: Colors.grey,
    borderRadius: 25,
    margin: pixelSizeVertical(5),
    marginBottom: pixelSizeHorizontal(10),
    marginRight: pixelSizeHorizontal(5),
  },
  logindiv: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: "absolute",
    padding: pixelSizeVertical(20),
    bottom: 0,
    right: 0,
    width: widthPixel(430)
  },
  backgroundimg: {
    flex: 1,
    justifyContent: "center",
    width: widthPixel(430),
    marginTop: pixelSizeHorizontal(25),
  },
  errortext: {
    fontSize: fontPixel(12),
    marginLeft: pixelSizeHorizontal(15),
    color: Colors.red,
  },
});

export {styles}
