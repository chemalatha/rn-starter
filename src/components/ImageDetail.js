import React from "react";
import { Text, StyleSheet,View,Image } from "react-native";

const ImageDetail = ({title,imageSource,score}) => {
  return (<View>
        <Image source={imageSource}/>
        <Text style={styles.text1}>This is a {title}</Text>
        <Text style={styles.text1}>This is a image score {score}</Text>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default ImageDetail;