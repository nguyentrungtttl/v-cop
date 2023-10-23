import { PaperProvider } from "react-native-paper";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
import AuthNavigator from "./Src/Navigation/AuthNavigator";
import { View } from "react-native";
import { styles } from "./styles";
import React,{useState} from 'react'
import UserCollection from "./Src/Screens/Authentication/routes";
// import VPHC2 from "./Src/Screens/Police/Home/Form/VPHC2";
// import Paid from "./Src/Screens/User/Account/screen/Form";
// import Judged from "./Src/Screens/Authority/Home/Form/Judged";
// import ViolatorInf from "./Src/Screens/Police/Home/Form/ViolatorInf";
// import Reported from "./Src/Screens/Police/Home/Form/Reported";
// import Notification from "./Src/Screens/User/Home/Notification";
// import SetAppointment from "./Src/Screens/User/Home/Calendar";
export default function App() {
  const [isLogged,setIsLogged] = useState(false)
  // if (!isLogged){
  //   return(
  //     <UserCollection/>
  //   )

  // }
  // else if(isLogged){}

  return (
    <View style={styles.container}>
      <PaperProvider>
        <UserNavigator />
        {/* <PoliceNavigator /> */}
        {/* <AuthNavigator/> */}
      </PaperProvider>
    </View>
  );
}