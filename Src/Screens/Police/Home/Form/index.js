import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Done from "./Done";
import Judged from "./Judged";
import Reported from "./Reported";
import ViolatorInf from "./ViolatorInf";
import VPHC from "./VPHC";
import VPHC2 from "./VPHC2";
import ViolatorContact from "../ViolatorContact";

export default function Form(){
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator initialRouteName="ViolatorContact" screenOptions={{headerShown:false}} >
            <Stack.Screen name="ViolatorContact" component={ViolatorContact}/>
            <Stack.Screen name="ViolatorInf" component={ViolatorInf}/>
            <Stack.Screen name="Judged" component={Judged}/>
            <Stack.Screen name="Reported" component={Reported}/>
            <Stack.Screen name="VPHC" component={VPHC}/>
            <Stack.Screen name="VPHC2" component={VPHC2}/>
            <Stack.Screen name="Done" component={Done}/>
        </Stack.Navigator>
    )
}