import React from "react";
import { Text, StyleSheet,FlatList,View } from "react-native";

const ListsScreen = () => {
  const friends = [
      {name:"friend1",age:20},
      {name:"friend2",age:21},
      {name:"friend3",age:22},
      {name:"friend4",age:23},
      {name:"friend5",age:24},
      {name:"friend6",age:25},
      {name:"friend7",age:26},

  ]
  return(
    <FlatList 
        keyExtractor={(friend)=>friend.name}
        data={friends} renderItem={({item})=>{
            return (<View>
                <Text style={styles.text1}>{item.name} - Age {item.age}</Text>
                </View>)
        }}>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  text1: {
    marginVertical: 50
  }
});

export default ListsScreen;