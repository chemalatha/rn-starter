import React from "react";
import { Text, StyleSheet,View, } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (<View>
    <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="10"/>
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="20"/>
    <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="30"/>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default ImageScreen;