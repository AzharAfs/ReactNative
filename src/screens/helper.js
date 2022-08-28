import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { StackActions } from '@react-navigation/native';

export const storeData = async (value, navigation) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(value);
    await AsyncStorage.setItem(value?.username.toString(), jsonValue);
    console.log("Data stored....");
    showSignUpSucessAlert(navigation);
  } catch (e) {
    showAlert("Error!!","Some error occured while signing up.. Please try later.");
    console.log(e);
  }
};

export const getData = async (username) => {
  try {
    const jsonValue = await AsyncStorage.getItem(username);
    console.log("====>>>", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("Error while fetching data..");
  }
};

export const showSignUpSucessAlert = (navigation) =>
  Alert.alert(
    "Sign up sucess !!",
    "Please go to login page to login...",
    [
      {
        text: "OK",
        onPress: () => navigation.dispatch(StackActions.pop(1)), //Alert.alert("Cancel Pressed"),
        style: "ok",
      },
    ],
    {
      cancelable: true,
      onDismiss: () => navigation.dispatch(StackActions.pop(1)),
      // Alert.alert(
      //   "This alert was dismissed by tapping outside of the alert dialog."
      // ),
    }
  );

  export const showAlert = (alertHeader, alertMsg, OKbuttonText, onPressOk, OKbuttonStyle, onDismiss, navigation) =>
  Alert.alert(
    alertHeader ? alertHeader : "Heading",
    alertMsg ? alertMsg : "Alert message...",
    [
      {
        text: OKbuttonText? OKbuttonText: "OK",
        onPress: () => onPressOk?.(),
        style: [{},OKbuttonStyle],
      },
    ],
    {
      cancelable: true,
      onDismiss: () => onDismiss?.(),
      // Alert.alert(
      //   "This alert was dismissed by tapping outside of the alert dialog."
      // ),
    }
  );


