import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomePage = () => {
  return (
    <View>
      <ImageBackground source={require('../assets/homeBg.jpg')} style={{height: '100%'}}>
        <Text>HomePage</Text>
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
