import React from 'react';
import { StyleSheet, Text, View,AsyncStorage, Button } from 'react-native';
import Body from './Body';
import Header from './Header';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import FromCameraRoll from './../../controller/Utilities/FromCameraRoll';


class AddRequireScreen extends React.Component { 
  constructor(){
    super();
    this.state = { tareas : [], texto: "", cargando:true };
  }
  componentDidMount(){
       this.recuperarEnTelefono();
  }
  establecerTexto = (value)=>{ 
       this.setState({texto:value});
  };
  agregarTarea = () =>{
    const nuevasTareas = [...this.state.tareas,{texto:this.state.texto, key:''+Date.now()}];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas : nuevasTareas
    });  
    this.setState({
      texto:'',
    })  
    console.log(this.state.tareas); 
  }
  eliminarTarea = (id) =>{
    const nuevasTareas = this.state.tareas.filter((tarea)=>{
      return tarea.key !== id 
    });
    this.guardarEnTelefono(nuevasTareas); 
    this.setState({
      tareas: nuevasTareas,
    });
  }
  guardarEnTelefono = (tareas) => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas)).
    then((value) =>{
        console.log(value);  
       
    }).catch((err) => {
      console.log(err);
    });
  }
  recuperarEnTelefono = () => { 
    AsyncStorage.getItem('@AppCursoUdemy:tareas').
    then((value) =>{ 
      setTimeout(() => {
        this.setState({
          cargando :  false,
        }); 
      }, 5000);
     
        if(value !== null){
           const nuevasTareas = JSON.parse(value);
          this.setState({
            tareas :  nuevasTareas,
          }); 
        }  
       
    }).catch((err) => {
      console.log(err);
    });
  }
  render(){
    return (
        <View style={styles.container}> 
       <Header 
       texto={this.state.texto}
       cambiarTexto={this.establecerTexto} agregar={this.agregarTarea}/>
       
      
       <Body cargando={this.state.cargando} tareas={this.state.tareas} eliminar={this.eliminarTarea}/>
       <FromCameraRoll/>
   </View>
    );
  }
}
const AddRequireScreenRoute = createStackNavigator({
    AddRequireScreen : {
      screen: AddRequireScreen,
      navigationOptions:{
          title:' Edificio Puerta del Sol  : \n Usuario X',
      }

    },
    
  });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
export { AddRequireScreenRoute } ;
