//https://colorhunt.co/palette/316b836d82998ca1a5d5bfbf

import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  textInput: {
    borderWidth: 1.5,
    borderColor: "blue",
    marginVertical: 30,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
  },
  textInputPass: {
    borderWidth: 1.5,
    borderColor: "blue",
    marginBottom: 30,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
  },
  signUpViewStyle: {
    alignSelf: "center",
  },
  signUpTextStyle: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
    padding: 15,
  },
  msgTextStyle: {
    fontSize: 16,
    color: "dark-blue",
    alignSelf: "center",
    marginTop: 15,
  },
  imageBgStyle: {
    height: '100%',
  },
})

export const signupStyles = StyleSheet.create({
  imageBgStyle: {
    height: '100%',
  },
  usernameViewStyle: {
    paddingTop: 40,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#316B83",
    marginVertical: 25,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 12,
    fontSize: 18,
    height: 45,
    fontWeight: 'bold',
  },
  passWarningStyle: {
    color: "red",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  signupButtonStyle: {
    height: 50,
    marginVertical: 40,
    marginHorizontal: 100,
    borderRadius: 50,
    backgroundColor: '#316B83',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    borderWidth: 2,
    borderColor: '#D5BFBF'
  },
  signupTextStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D5BFBF'
  }
});

export const homePageStyles = StyleSheet.create({
welcomeText:{
  color: "white",
  fontSize: 20,
}
});
