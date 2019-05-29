import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const SignIn = (props) => {
  return ( <View> 
   <TouchableHighlight onPress={()=>{}}>
              <View style={styles.directorioComunidad}>
                  <Ionicons 
                          name='md-build' 
                          size={26}
                          style={{ marginBottom: -3 }}
                         />
                  <Text style={{fontSize:12}}> Directorio Comunidad </Text>
              </View>
          </TouchableHighlight>
  </View>);
};
const SignUp = () => <Text>Signup</Text>;
 
const DirectoryCommunity = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUn: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
   
 
  directorioComunidad: {
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center', 
    backgroundColor: 'orange',
    padding: 8
  },
});
export { DirectoryCommunity };