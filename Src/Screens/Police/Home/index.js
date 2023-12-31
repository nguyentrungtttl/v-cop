import { View, Text } from 'react-native'
import React from 'react'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from './MainHome';
import Evidence from './Evidence';
import Form from '../../Authority/Home/Form2';
import FormHandle from './FormHandle';
import ViolatorContact from './ViolatorContact';
import VideoCall from './VideoCall';

const Stack = createStackNavigator();

export default function Home() {
  return (
      <Stack.Navigator initialRouteName="MainHome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Evidence" component={Evidence} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="FormHandle" component={FormHandle} />
        <Stack.Screen name="ViolatorContact" component={ViolatorContact} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
      </Stack.Navigator>
  )
}