import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BankCollection from "./BankCollection";
import BankSelection from "./BankSelection";
import BankAccount from "./AlreadyHaveBankAccount";
import Withdraw from "./WithdrawingMoney";
import Input from "./InputMoney";
import MoneyExchange from "./MoneyExchange";
import DoneI from "./Done/Input";
import DoneW from "./Done/Withdraw";
import SetPassWord from "./SetPassWord";

export default function EWallet(){
  const Stack = createStackNavigator()
  const connection = false
  const routeName = ()=>{
    if(!connection){
      return("BankCollection")
    }
    else if(connection){
      return("BankAccount")
    }
  }
  return(
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={routeName}>
      <Stack.Screen name="BankCollection" component={BankCollection}/>
      <Stack.Screen name="BankSelection" component={BankSelection}/>
      <Stack.Screen name="BankAccount" component={BankAccount}/>
      <Stack.Screen name="Withdraw" component={Withdraw}/>
      <Stack.Screen name="Input" component={Input}/>
      <Stack.Screen name="MoneyExchange" component={MoneyExchange}/>
      <Stack.Screen name="DoneI" component={DoneI}/>
      <Stack.Screen name="DoneW" component={DoneW}/>
      <Stack.Screen name="SetPassWord" component={SetPassWord}/>
    </Stack.Navigator>
  )
}