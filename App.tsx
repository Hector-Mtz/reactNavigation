import * as React from 'react';
import type {PropsWithChildren} from 'react';
//Dependencias de react navigation
//Siempre las navegaciones deben estar dentron de navigationContainer
import { NavigationContainer } from '@react-navigation/native';
//Tipo de navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Pantallas
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

/*
 * REACT NAVIGATION
  - React Native no tiene forma de enlazar unos componentes con otros
  - React Navigation soluciona esto, estar enlazando componentes
   -- NAVEGACION STACK
    - No es que navegue de uno a otro componente, sino que se van sobreponiendo para dar
     esa sensacion
    - En caso de que se cierre alguna pantalla automaticamente  el dipositivo movil
      elimina y automaticamente libera la memoria que estaba utilizando esa pantalla que se acaba de eliminar

*/

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  //Opciones de renombramiento de ventana
  //options={{title:'Componente Principal'}}

  return (
     <NavigationContainer> 
        <Stack.Navigator initialRouteName='Inicio' screenOptions={{
           headerStyle:{
            backgroundColor:'#f4511e'
           },
           headerTitleAlign:'center',
           headerTintColor:'#fff',
           headerTitleStyle:{
            fontWeight:'bold'
           }
        }}>
           <Stack.Screen name='Inicio' component={Inicio} options={{title:'Componente Principal', 
          
           }} />
           <Stack.Screen name='Nosotros' component={Nosotros} 
           options={({route}) => ({
            title:route.params.clienteId.toString() //se pone to string porque se espera un string y no un numero
           })}
           
           />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
