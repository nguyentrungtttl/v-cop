import { PaperProvider } from "react-native-paper";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
import { View } from "react-native";
import { styles } from "./styles";
import SignUp from './Src/Screens/Authentication/signUp'
import MainHome from "./Src/Screens/User/Home/MainHome";
import Account from './Src/Screens/User/Account/index'

export default function App() {
  if (1) return (<Account />)
  return (
    <View style={styles.container}>
      <PaperProvider>
        <UserNavigator />
        {/* <PoliceNavigator /> */}
      </PaperProvider>
    </View>
  );
}