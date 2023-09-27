import { PaperProvider } from "react-native-paper";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
import { View } from "react-native";
import { styles } from "./styles";
import SignUp from './Src/Screens/Authentication/signUp'
import Account from './Src/Screens/User/Account/index'
// import "./firebaseConfig"
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