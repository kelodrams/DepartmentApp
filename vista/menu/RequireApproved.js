import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const SignIn = (props) => {
  return ( <View> 
    <TouchableHighlight onPress={()=>{}}>
              <View style={styles.requerimientosAprobados}> 
                  <Ionicons 
                          name='md-checkmark-circle-outline' 
                          size={26}
                          style={{ marginBottom: -3 }}
                         />
                  <Text style={{fontSize:12}}> Requerimientos Aprobados </Text>
              </View>
          </TouchableHighlight>
  </View>);
};
const SignUp = () => <Text>Signup</Text>;
 
const RequireApproved = createStackNavigator({ 
  SignIn: {
    screen: SignIn,
  },
  SignUn: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
   
  
  requerimientosAprobados: {
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center', 
    backgroundColor: 'steelblue',
    padding: 8
  },
});
export { RequireApproved };