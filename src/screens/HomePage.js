import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { homePageStyles } from "./Styles";

const HomePage = (props) => {
  const [hour, setHour] = useState("");
  const {username} =  props.route.params;
  console.log(username);
  
  useEffect(()=>{
    var hours = new Date().getHours();
    if(hours<12){
      setHour("Morning");
    }else if(hours>12&&hours<=15){
      setHour("After noon");
    }else if(hours>=16 && hours<19){
      setHour("Evening")
    }else{
      setHour("Night")
    }
  },[]);

  return (
    <View>
      <ImageBackground source={require('../assets/homeBg.jpg')} style={{height: '100%'}}>
        <Text style={homePageStyles.welcomeText}>Welcome {username}, Good {hour}..</Text>
        <Text>HomePage</Text>
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
