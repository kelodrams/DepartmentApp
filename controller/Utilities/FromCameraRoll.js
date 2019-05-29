import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
 
import {ImagePicker, Permissions} from 'expo';
 
class FromCameraRoll extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.ImageContainer}>
        <Button
          title="P"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  }
  
  const styles = StyleSheet.create({
  
 
    ImageContainer: {
      flex: 0.5,
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      
      
    },
    buttonContainer:{
        
        borderColor: '#9B9B9B',
        backgroundColor: '#CDDC39',
        justifyContent: 'flex-start',   
        borderRadius: 50,
        borderWidth: 1 / PixelRatio.get(),
    }
 
  });
 
AppRegistry.registerComponent('ImagePickerProject', () => ImagePickerProject);

export default FromCameraRoll  ;


 
