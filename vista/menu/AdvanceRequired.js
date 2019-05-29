import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const SignIn = (props) => {  
  return ( <View> 
          <TouchableHighlight onPress={()=>{}}>
              <View style={styles.avanceRequerimiento}>
                  <Ionicons 
                          name='md-code-working' 
                          size={26}
                          style={{ marginBottom: -3 }}
                         />
                  <Text style={{fontSize:12}}> Avance de Requerimientos </Text>
              </View>
          </TouchableHighlight>
  </View> 
  );
};
const SignUp = () => <Text>Signup</Text>;
const AdvanceRequired = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUn: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
   
  
  avanceRequerimiento: {
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center', 
    backgroundColor: 'mediumturquoise',
    padding: 8
  },
});
export { AdvanceRequired };