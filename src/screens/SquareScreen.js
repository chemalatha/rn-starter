import React,{useReducer} from "react";
import { Text, StyleSheet,View, } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREAMENT = 15;
const reducer = (state,action)=>{
    switch(action.type){
        case 'change_red':
            if(state.red+action.payload >255 || state.red+action.payload <0){
                return state;
            }
            return {...state,red:state.red+action.payload};          
        case 'change_blue':
            if(state.blue+action.payload >255 || state.blue+action.payload <0){
                return state;
            }
            return {...state,blue:state.blue+action.payload};           
        case 'change_green':
            if(state.green+action.payload >255 || state.green+action.payload <0){
                return state;
            }
            return {...state,green:state.green+action.payload};
        default:
            return state;
    }
}
const SquareScreen = () => {

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
    const {red,green,blue} = state;

  return (<View>
    <ColorCounter key="Red"
                  onIncrease={()=>dispatch({type:'change_red',payload:COLOR_INCREAMENT})} 
                  onDecrease={()=>dispatch({type:'change_red',payload:-1*COLOR_INCREAMENT})} 
                  color="Red"/>
    <ColorCounter key="Green"
                    onIncrease={()=>dispatch({type:'change_green',payload:COLOR_INCREAMENT})} 
                   onDecrease={()=>dispatch({type:'change_green',payload:-1*COLOR_INCREAMENT})}  
                   color="Green"/>
    <ColorCounter key="Blue"
                  onIncrease={()=>dispatch({type:'change_blue',payload:COLOR_INCREAMENT})} 
                  onDecrease={()=>dispatch({type:'change_blue',payload:-1*COLOR_INCREAMENT})}   
                  color="Blue"/>
    <View style={{
        height:150,
        width:150,
        borderColor:'1px solid black',
        backgroundColor:`rgb(${red},${green},${blue})`
    }}>
    </View>
  </View>);
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30
  }
});

export default SquareScreen;