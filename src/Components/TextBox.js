import { View, TextInput, StyleSheet } from "react-native";
import { Colors, pixelSizeHorizontal, pixelSizeVertical } from "../Constants/Theme";

export default function TextBox({ placeholder, state }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(e) => state(e)}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: pixelSizeVertical(15),
        backgroundColor: Colors.grey,
        borderRadius: 25,
        margin: pixelSizeVertical(10),
        marginBottom: pixelSizeHorizontal(20),
        marginRight: pixelSizeVertical(20),
    },
});
