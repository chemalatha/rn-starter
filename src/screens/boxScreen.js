import React from "react";
import { Text, StyleSheet,View, Button, } from "react-native";

const BoxScreen = () => {
  return (<View style={styles.viewStyle}>
    <View style={styles.view1Style}></View>
    <View style={styles.view2Style}></View>
    <View style={styles.view3Style}></View>
  </View>);
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth:1,
    borderColor:'black',
    height:200,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  view1Style:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    width:50,
    backgroundColor:'red'
  },
  view2Style:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    width:50,
    backgroundColor:'green',
    marginTop:50
  },
  view3Style:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    width:50,
    backgroundColor:'purple'
  }
});

export default BoxScreen;