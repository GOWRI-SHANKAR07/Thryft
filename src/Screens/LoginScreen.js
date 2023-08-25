import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { useState } from "react";
import { styles } from "../styles/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import TextBox from "../Components/TextBox";
import SigninButton from "../Components/SigninButton";
import { FIREBASE_AUTH } from "../FireBase/FirebaseConfig";

const image = {
  uri: "https://img.freepik.com/premium-photo/hanger-with-free-clothes-humanitarian-centre_105751-14845.jpg?size=626&ext=jpg&ga=GA1.2.1576078646.1690872650&semt=ais",
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //loading state
  const [loading, setLoading] = useState(false);

  //firebase auth
  const auth = FIREBASE_AUTH;

  async function onhandleLogin() {
    //email validation
    if (email === "") setEmailError("Please enter email");
    else setEmailError("");
    //password validation
    if (password === "") setPasswordError("Please enter password");
    else setPasswordError("");
    //authentication
    if (email && password) {
      try {
        setLoading(true);
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        response && navigation.navigate("Tab");
      } catch (error) {
        console.log(error);
        alert("Please enter valid details");
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundimg}
          source={image}
          resizeMode="cover"
        >
          <View style={styles.logindiv}>
            <Text style={styles.text}>Welcome Back</Text>
            <Text style={styles.smalltext}>Login to your account</Text>
            <TextBox placeholder="email" state={setEmail} />
            {emailError && <Text style={styles.errortext}>{emailError}</Text>}
            <TextBox placeholder="password" state={setPassword} />
            {passwordError && (
              <Text style={styles.errortext}>{passwordError}</Text>
            )}
            {loading ? (
              <ActivityIndicator size="small" color="#ffb805" />
            ) : (
              <SigninButton
                text="Login"
                color="#ffb805"
                onpressFunc={onhandleLogin}
              />
            )}
            <Text style={styles.smalltext}>Forgot password?</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
