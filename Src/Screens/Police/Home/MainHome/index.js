import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'

export default function MainHome({navigation}) {
  return (
    <View>
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('MainHome')}>
        MainHome
      </Button>   
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('Evidence')}>
        Evidence
      </Button>
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('Form')}>
        Form
      </Button> 
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('FormHandle')}>
        FormHandle
      </Button>   
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('ViolatorContact')}>
        ViolatorContact
      </Button> 
      <Text>asf</Text>     
    </View>
  )
}