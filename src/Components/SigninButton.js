import { View, Text, Pressable } from "react-native";
import { Colors, fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../Constants/Theme";

function SigninButton({ text, color,onpressFunc}) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={{
          heigth: heightPixel(200),
          width: widthPixel(350),
          backgroundColor: Colors.primary,
          padding: pixelSizeVertical(10),
          borderRadius: 25,
          margin: pixelSizeHorizontal(10),
        }}
        onPress={onpressFunc}
      >
        <Text style={{ textAlign: "center", color: Colors.white, fontSize: fontPixel(20) }}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default SigninButton;
