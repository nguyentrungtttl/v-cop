import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from './Home/MainHome';
import Evidence from './Home/Evidence';
import Form from './Home/Form';
import Form2 from './Home/Form2';
import VideoCall from './Home/VideoCall';



const Stack = createStackNavigator();

export default function Auths() {
  return (
      <Stack.Navigator initialRouteName="MainHome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Evidence" component={Evidence} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Form2" component={Form2} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
      </Stack.Navigator>
  )
}