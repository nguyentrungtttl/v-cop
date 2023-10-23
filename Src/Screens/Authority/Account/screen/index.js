//Function
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import VehicleInfo from './Vehicle'
import Account from '..'

const Stack = createStackNavigator()
export default function Function(){
  return(
    <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Account" component={Account}/>
        <Stack.Screen name="VehicleInfo" component={VehicleInfo}/>
    </Stack.Navigator>
  )
}