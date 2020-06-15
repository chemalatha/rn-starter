import React,{useState} from "react";
import { Text, StyleSheet,View,TextInput } from "react-native";
const reducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE':
            return {...state,counter:state.counter+action.payload};
        default:
        return state;
    }
}
const TextScreen = () => {
    const [name,setName] = useState('');
    const [error,setError] = useState(false);
    const [password,setPassword] = useState('');
  return (<View>
    <TextInput 
    autoCapitalize="none"
    autoCorrect={false}
    value={name}
    onChangeText={(newValue)=>
        setName(newValue)
    }
    style={styles.input}/>
    <Text style={styles.text1}>My Name is {name}</Text>
    <TextInput 
    autoCapitalize="none"
    autoCorrect={false}
    value={password}
    onChangeText={(newValue)=>{
        if(newValue.length<=5) {
            setError(true)
        }else{
            setError(false)
        }
        setPassword(newValue)
    }
    }
    style={styles.input}/>
    {(error)?(<Text style={styles.errorCls}>Your password must be longer than 5 characters</Text>):null}
  </View>);
};

const styles = StyleSheet.create({
    errorCls:{
      fontSize:10,
      color:'red'
  },
  text1:{
    fontSize:20
  },
  input: {
    borderColor:'black',
    margin:15,
    borderWidth:1
  }
});

export default TextScreen;