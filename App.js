import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

//Modulos
import { Menu } from './vista/menu/Menu'; 

 
const MenuContainer = createAppContainer(Menu); 


export default class App extends React.Component {  
  render() {
    return (
      <View style={styles.container} >
         <MenuContainer/>
        </View>
    );
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
     
  },
  
  
});
