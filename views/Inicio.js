import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const Inicio = ({navigation}) => { //con react navigator por defecto se pasan algunos props (route y navigation, este ultimo tre algunos metodos para navegar)
   
    const visitarNosotros = () => 
    {
      navigation.navigate('Nosotros', informacion)
    }

    const informacion = {
       clienteId:500,
       totalAPagar:500
    }

  return (
    <View style={styles.contenedor}>
        <Text>Inicio</Text>
        <Button title='Ir A Nosotros' onPress={()=> visitarNosotros()} />
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

export default Inicio