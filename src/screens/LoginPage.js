import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { loginStyle as styles, signupStyles } from "./Styles";
import { getData } from "./helper";

const CONSTANTS = {
  INVALID_USERNAME_ERROR: "Please enter a valid username..",
  INVALID_PASSWORD_ERROR: "You have entered wrong password, please try again..",
  EMPTY_PASSWORD_FIELD:
    "Password can not be empty, please enter a valid password.",
  EMPTY_USERNAME_FIELD:
    "Username can not be empty, please enter a valid username.",
  USER_NOT_EXISTS: "username does not exists, please sign up...!",
};
const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameWarning, setUserWarning] = useState("");
  const [passwordWarning, setPassWarning] = useState("");

  const onPressLogin = async (username, password) => {
    if (validLogin(username, password)) {
      const userData = await getData(username);
      // console.log("userData----------------->", userData.username);
      if (userData !== null) {
        if (userData.password === password) {
          console.log("Login sucess........");
          navigation.navigate("Home", {username});
        } else {
          setPassWarning(CONSTANTS.INVALID_PASSWORD_ERROR);
          console.log("Wrong password........");
        }
      } else {
        setUserWarning(username + " " + CONSTANTS.USER_NOT_EXISTS);
        console.log(username, " user not found....");
      }
    } else {
      return;
    }
  };

  const validLogin = (username, password) => {
    if (username === "") {
      setUserWarning(CONSTANTS.EMPTY_USERNAME_FIELD);
    }
    if (password === "") {
      setPassWarning(CONSTANTS.EMPTY_PASSWORD_FIELD);
    }
    return !(username === "" || password === "");
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/loginBg1.jpg")}
          style={styles.imageBgStyle}
        >
          <TextInput
            style={signupStyles.textInput}
            placeholder="Enter username"
            onChangeText={(text) => setUsername(text.trim())}
            onTouchStart={() => setUserWarning("")}
          />
          {usernameWarning && (
            <Text style={signupStyles.passWarningStyle}>{usernameWarning}</Text>
          )}
          <TextInput
            style={[signupStyles.textInput, { marginTop: 0 }]}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text.trim())}
            onTouchStart={() => setPassWarning("")}
          />
          {passwordWarning && (
            <Text style={signupStyles.passWarningStyle}>{passwordWarning}</Text>
          )}

          <TouchableOpacity
            title="Login"
            onPress={() => {
              onPressLogin(username, password);
            }}
            disabled={false}
            style={[signupStyles.signupButtonStyle]}
          >
            <Text style={signupStyles.signupTextStyle}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.msgTextStyle}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.signUpViewStyle}
          >
            <Text style={styles.signUpTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginPage;
