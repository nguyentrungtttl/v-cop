import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from './MainHome';
import Notification from './Notification';
import Form from './Form';


const Stack = createStackNavigator();

export default function Auths() {
  return (
      <Stack.Navigator initialRouteName="MainHome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
  )
}