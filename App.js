import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

//Modulos
import { Menu } from './vista/menu/Menu'; 
import { TextInput } from 'react-native-gesture-handler';
import { AddRequireScreenRoute } from './vista/addRequired/AddRequireScreen';

 
const MenuContainer = createAppContainer(Menu); 
const AddingRequiredContainer = createAppContainer(AddRequireScreenRoute); 



export default class App extends React.Component {  
  render() {
    return (
      <View style={styles.container} >
          <AddingRequiredContainer/>
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
