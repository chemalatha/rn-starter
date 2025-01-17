import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Button 
        onPress={()=>{
          navigation.navigate('Components')
        }}
        title="Go to Components Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('List')
        }}
        title="Go to List Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('ImageList')
        }}
        title="Go to Image Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('Counter')
        }}
        title="Go to Counter Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('Color')
        }}
        title="Go to Colors Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('Square')
        }}
        title="Go to Square Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('InputName')
        }}
        title="Go to Input Name Screen"/>      
      <Button 
        onPress={()=>{
          navigation.navigate('BoxDemo')
        }}
        title="Go to Box Demo Screen"/>
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
