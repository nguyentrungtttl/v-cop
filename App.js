import { PaperProvider } from "react-native-paper";
import UserNavigator from "./Src/Navigation/UserNavigator";
import PoliceNavigator from "./Src/Navigation/PoliceNavigator"
import { View } from "react-native";
import { styles } from "./styles";
import VPHC2 from "./Src/Screens/Police/Home/Form/VPHC2";

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        {/* <UserNavigator /> */}
        <PoliceNavigator />
      </PaperProvider>
    </View>
  );
}