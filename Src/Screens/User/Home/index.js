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

const Stack = createStackNavigator();

export default function Home() {

  return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="EWallet" component={EWallet} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
  )
}