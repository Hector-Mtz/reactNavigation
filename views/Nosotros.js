import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'



const Nosotros = ({navigation, route}) => { //con route extraemos los valores que estamos pasando de la pantalla anterior

  const {clienteId} = route.params

  const volver = () => 
  {
    //navigation.navigate('Inicio')
    navigation.goBack() // regresa a la pantalla anterior sin importar como se llame la pantalla anterior
    // navigation.push('Inicio) //similar a navigate pero se deslizan las transiciones
  }

  return (
    <View style={styles.contenedor}>
        <Text>Inicio</Text>
        <Text>{clienteId}</Text>
        <Button title='Volver' onPress={()=> volver()} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Nosotros