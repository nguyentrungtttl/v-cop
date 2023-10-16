import { createStackNavigator } from "@react-navigation/stack";
import {View} from 'react-native'
import VPHC from "./VPHC";
import Judged from "./Judged";
import Done from "../../../Police/Home/Form/Done";

export default function Form(){
    const Stack = createStackNavigator()
    return(
        <View>
            <Stack.Navigator>
                <Stack.Screen name="VPHC" component={VPHC} />
                <Stack.Screen name= "Judged" component={Judged} />
                <Stack.Screen name= "Done" component={Done} />
            </Stack.Navigator>
        </View>
    )
}