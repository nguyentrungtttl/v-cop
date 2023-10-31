import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {View} from 'react-native'
import VPHC from "./VPHC";
import Judged from "./Judged";
import Done from "../Form2/Done";
import Notification from "../Notification";

export default function Form(){
    const Stack = createStackNavigator()
    return(
            <Stack.Navigator initialRouteName="Notification" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Notification" component={Notification}/>
                <Stack.Screen name="VPHC" component={VPHC} />
                <Stack.Screen name= "Judged" component={Judged} />
                <Stack.Screen name= "Done" component={Done} />
            </Stack.Navigator>
        
    )
}