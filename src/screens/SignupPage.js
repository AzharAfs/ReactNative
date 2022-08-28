import {
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { storeData, getData, showAlert, signupValidation } from "./helper";
import { signupStyles as styles } from "./Styles";

const CONSTANTS = {
  CONFIRM_PASS_WARNING:
    "Please enter password and confirm password correctly ...",
  USER_EXISTS_WARNING:
    "Entered username is already regitered, please try a different username..",
  ERROR: "Error!",
};

const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userWarning, setUserWarning] = useState(false);

  const onPressSignUp = async (username, password) => {
    const value = { username: username?.trim(), password: password?.trim() };
    if ((await getData(username)) !== null) {
      setUserWarning(true);
      showAlert(CONSTANTS.ERROR, CONSTANTS.USER_EXISTS_WARNING, "OK");
    } else {
      storeData(value, navigation);
    }
  };

  const isInputFieldEmpty = (username, password, confirmPass) => {
    const isAnyFieldEmpty =
      username === "" || password === "" || confirmPass === "";
    const passwordNotEqualsConfirmPass = password !== confirmPass;
    return isAnyFieldEmpty || passwordNotEqualsConfirmPass;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={require("../assets/signupBg.jpg")}
          style={styles.imageBgStyle}
        >
          <View style={styles.usernameViewStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter username"
              onChangeText={(text) => setUsername(text.trim())}
              onTouchStart={() => {
                setUserWarning(false);
              }}
              onEndEditing={async () => {
                if ((await getData(username)) !== null) {
                  setUserWarning(true);
                }
              }}
            />
            {userWarning && (
              <Text style={styles.passWarningStyle}>
                {CONSTANTS.USER_EXISTS_WARNING}
              </Text>
            )}
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: 0 }]}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text.trim())}
          />
          <TextInput
            style={[styles.textInput, { marginTop: 0 }]}
            placeholder="Confirm password"
            onChangeText={(text) => setConfirmPass(text.trim())}
            onTouchStart={() => setConfirmPass("")}
          />
          {confirmPass.length >= password.length &&
            password !== confirmPass && (
              <Text style={styles.passWarningStyle}>
                {CONSTANTS.CONFIRM_PASS_WARNING}
              </Text>
            )}
          <TouchableOpacity
            title="Sign up"
            onPress={() => {
              onPressSignUp(username, password);
            }}
            disabled={
              isInputFieldEmpty(username, password, confirmPass) || userWarning
            }
            style={[
              styles.signupButtonStyle,
              isInputFieldEmpty(username, password, confirmPass) || userWarning
                ? { backgroundColor: "gray" }
                : "",
            ]}
          >
            <Text style={styles.signupTextStyle}>Sign up</Text>
          </TouchableOpacity>
          <Button
            title="getData"
            onPress={async () =>
              console.log("+++++++", (await getData(username)).username)
            }
          />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignupPage;
