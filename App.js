import { PaperProvider } from "react-native-paper";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
import AuthNavigator from "./Src/Navigation/AuthNavigator";
import { View } from "react-native";
import { styles } from "./styles";
import VPHC2 from "./Src/Screens/Police/Home/Form/VPHC2";
import Sign from "./Src/Screens/User/Account/screen/Sign";

export default function App() {
  // if(1){
  //   return(
  //     <View>
  //       <Sign/>
  //     </View>
  //   )
  // }
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