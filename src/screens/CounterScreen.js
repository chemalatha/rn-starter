import React,{useReducer} from "react";
import { Text, StyleSheet,View, Button, } from "react-native";
const reducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE':
            return {...state,counter:state.counter+action.payload};
        default:
        return state;
    }
}
const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{counter:0});
    const {counter} = state;
  return (<View>
    <Button title="Increase" onPress={()=>dispatch({type:'CHANGE',payload:1})}/>
    <Button title="Decrease" onPress={()=>dispatch({type:'CHANGE',payload:-1})}/>
    <Text style={styles.text1}>Current Count:{counter}</Text>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default CounterScreen;