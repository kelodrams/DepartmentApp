import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <TextInput
          onSubmitEditing={this.props.agregar }  
          onChangeText={this.props.cambiarTexto }    
          style={styles.texto} 
          placeholder="Titulo de requerimiento"
          value={this.props.texto}
          underlineColorAndroid="transparent"

        />          

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  texto: {
    flex:  0.7,
    justifyContent: 'space-evenly',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal:25,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
  }
});
export default Header;
