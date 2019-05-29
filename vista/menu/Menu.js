import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native';
import { AddRequired } from './AddRequired'; 
import { AddClaims } from './AddClaims'; 
import { AdvanceRequired } from './AdvanceRequired'; 
import { CheckRepair } from './CheckRepair'; 
import { RequireApproved } from './RequireApproved'; 
import { ForumCommunity } from './ForumCommunity'; 
import { DirectoryCommunity } from './DirectoryCommunity'; 
import { RequiredRejected } from './RequiredRejected'; 
import { createAppContainer } from 'react-navigation';
 
 
const AddRequiredContainer = createAppContainer(AddRequired);
const RequireApprovedContainer = createAppContainer(RequireApproved);
const AddClaimsContainer = createAppContainer(AddClaims);
const CheckRepairContainer = createAppContainer(CheckRepair);
const ForumCommunityContainer = createAppContainer(ForumCommunity);
const DirectoryCommunityContainer = createAppContainer(DirectoryCommunity);
const AdvanceRequiredContainer = createAppContainer(AdvanceRequired);
const RequiredRejectedContainer = createAppContainer(RequiredRejected);
 
const MenuScreen = (props) => {
  const { navigation } = props;
  return (  <View style={styles.container}>
     <View style={styles.directioner}>

<AddRequiredContainer/>
<RequireApprovedContainer/>

</View>

<View style={styles.directioner}>
<RequiredRejectedContainer/> 
<AdvanceRequiredContainer/>  
</View>

<View style={styles.directioner}>
 
<ForumCommunityContainer/> 
<DirectoryCommunityContainer/>  
   
</View>
<View style={styles.directioner}>
<AddClaimsContainer/> 
<CheckRepairContainer/>  
</View>
</View>
  );
};
const SignUp = () => <Text>Signup</Text>;
 
const Menu = createStackNavigator({
  MenuScreen: {
    screen: MenuScreen,
    navigationOptions:{
          header : null,
      }
  },
  SignUp: { 
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
    directioner:{
    flex : 1,
    justifyContent: 'space-between',
     flexDirection:'row',
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
     
  },
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
export { Menu };