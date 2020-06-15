import React,{useState} from "react";
import { Text, StyleSheet,View, Button,FlatList } from "react-native";

const ColorScreen = () => {
  const [colors,setColors] = useState([]);
  return (<View>
    <Button title="Add Color" onPress={()=>{
        setColors([...colors,randomRGB()]);
    }}/>
    <FlatList 
        data={colors}
        keyExtractor={(item)=> item}
        renderItem={({item})=>{
            return(
                <View style={{
                    height:100,
                    width:100,
                    backgroundColor:item
                }}>
                </View>
            )
        }}
    />
  </View>);
};
const randomRGB = ()=>{
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    return `rgb(${red},${blue},${green})`

}
const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default ColorScreen;