import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainHome from "./MainHome";
import EWallet from "./EWallet";
import Report from "./Report";
import Notification from "./Notification";
import SignUp from "../../Authentication/signUp";
import Login from "../../Authentication/login";
import Account from "../Account";
import SetAppointment from "./Calendar";
import Paid from "./Form";
import { getPersonalInfo } from "../../../API/getPersonalInfo";

const Stack = createStackNavigator();

export default function Home() {
  //getPersonalInfo
  const [personalInfo, setPersonalInfo] = useState({});
  const handleGetInfo = async () => {
    setPersonalInfo(await getPersonalInfo());
  };
  handleGetInfo();

 
  return (
    <Stack.Navigator
      initialRouteName="MainHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainHome" component={(MainHome)} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="EWallet" component={EWallet} />
      <Stack.Screen name="Calendar" component={SetAppointment} />
      {/* <Stack.Screen name='Login' component={Login}/> */}
      {/* Hướng phát triển */}
      {/* <Stack.Screen name="Report" component={Report} /> */}
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Paid" component={Paid} />
    </Stack.Navigator>
  );
}
