import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator,TextInput } from 'react-native';
import Tarea from './Tarea';

class Body extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <TextInput
         onSubmitEditing={this.props.agregar }  
         onChangeText={this.props.cambiarTexto }    
         style={styles.texto} 
         placeholder="Descripción del requerimiento"
         value={this.props.texto}
         underlineColorAndroid="transparent"
         multiline={true}  
         
       />          
       
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:  0.8,
  },
  texto:{
    flex:  1, 
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    paddingTop:5,
    paddingHorizontal:25,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25,  
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: "top"
   }
});
export default Body;
