import React from "react";
import { Text, StyleSheet,View, } from "react-native";

const ComponentsScreen = () => {
  let name='Hema';
  return (<View>
    <Text style={styles.text1}>This is a component screen</Text>
    <Text style={styles.text2}>My name is {name}</Text>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }  ,
  text2: {
    fontSize: 20
  }
});

export default ComponentsScreen;