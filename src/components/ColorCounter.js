import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const ColorCounter = ({color,onIncrease,onDecrease}) => {
  return (<View>
    <Text style={styles.text1}>{color}</Text>
    <Button title={`Increase ${color}`} onPress={onIncrease}/>
    <Button title={`Decrease ${color}`} onPress={onDecrease}/>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default ColorCounter;