import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


export default function FormHandle() {
  return (
    <SafeAreaView style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row",backgroundColor:"white"}}>
      <TouchableOpacity style={styles.btn}>
        <Text>HỦY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text>TẠO ĐƠN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn:{
    paddingVertical:"3%",
    paddingHorizontal:"4%",
    
  }
})