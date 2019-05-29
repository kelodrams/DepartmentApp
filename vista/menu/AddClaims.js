import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const SignIn = (props) => {
  return ( <View> 
    <TouchableHighlight onPress={()=>{}}>
              <View style={styles.ingresarReclamo}>
                  <Ionicons 
                          name='md-warning' 
                          size={26}
                          style={{ marginBottom: -3 }}
                         />
                  <Text style={{fontSize:12}}> Ingresar Reclamo </Text>
              </View>
        </TouchableHighlight>
  </View>);
};
const SignUp = () => <Text>Signup</Text>; 
 
const AddClaims = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUn: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
  
  ingresarReclamo: {
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center', 
    backgroundColor: 'paleturquoise',
    padding: 8
  },
});
export { AddClaims };