import { StyleSheet } from 'react-native';
import { Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: '5%',
    backgroundColor: '#f0f0f0',
  },
  
})
