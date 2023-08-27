import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'

export default function MainHome({navigation}) {
  return (
    <View>
      <Text>Hello Jenny</Text>
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('MainHome')}>
        MainHome
      </Button>   
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('Notification')}>
        Notification
      </Button>
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('Report')}>
        Report
      </Button> 
      <Button icon="wallet" mode="contained" onPress={() => navigation.navigate('EWallet')}>
        E-Wallet
      </Button>        
    </View>
  )
}