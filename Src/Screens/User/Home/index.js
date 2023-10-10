import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from './MainHome';
import EWallet from './EWallet';
import Report from './Report';
import Notification from './Notification';
import SignUp from '../../Authentication/signUp';
import Login from '../../Authentication/login'
import Account from '../Account';


const Stack = createStackNavigator();

export default function Home() {

  return (

      <Stack.Navigator initialRouteName="MainHome" screenOptions={{headerShown: false}}>

        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="EWallet" component={EWallet} />
        {/* Hướng phát triển */}
        {/* <Stack.Screen name="Report" component={Report} /> */}
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
  )
}