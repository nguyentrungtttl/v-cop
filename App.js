import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

// Import your screens and navigators here
import Login from "./Src/Screens/Authentication/login";
import SignUp from "./Src/Screens/Authentication/signUp";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator";

const Stack = createStackNavigator();

export default function App() {
  //user --> id: 1, username: ken
  //police -->id: 2, username: police
  //authority --> id: 3, username: authority 
  return (
    <View style={styles.container}>
      <PaperProvider>
        <NavigationContainer
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserNavigator"
              component={UserNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PoliceNavigator"
              component={PoliceNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </View>
  );
}

// import { PaperProvider } from "react-native-paper";
// import UserNavigator from "./Src/Navigation/UserNavigator";
// import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
// import AuthNavigator from "./Src/Navigation/AuthNavigator";
// import { View } from "react-native";
// import { styles } from "./styles";
// import React,{useState} from 'react'
// import UserCollection from "./Src/Screens/Authentication/routes";
// import Login from "./Src/Screens/Authentication/login";
// import SignUp from "./Src/Screens/Authentication/signUp";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <PaperProvider>
//         {/* <PoliceNavigator /> */}
//         {/* <UserCollection />   */}
//         <Login />
//         {/* <SignUp />   */}
//         {/* <UserNavigator /> */}
//         {/* <AuthNavigator/> */}
//       </PaperProvider>
//     </View>
//   );
// }
