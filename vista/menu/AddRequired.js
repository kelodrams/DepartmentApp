import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const SignIn = (props) => {
  const { navigation } = props;
  return ( <View> 
    <TouchableHighlight onPress={()=>{navigation.navigate('SignUp')  }}>
        <View style={styles.ingresarReq}>
            <Ionicons 
                    name='md-paper' 
                    size={26}
                    style={{ marginBottom: -3 }}
                   />
            <Text style={{fontSize:12}}> Ingresar Requerimiento </Text>
        </View>
      </TouchableHighlight>
  </View>);
};
const SignUp = () => <Text>Signup</Text>;
 
const AddRequired = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
   
  ingresarReq: {
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center', 
    backgroundColor: 'coral',
    padding: 8,
    
  }
});
export { AddRequired };