import { View, Text,Image, FlatList,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from './styles'
import Appointment from './appointment'




export default function Evidence({navigation}) {
  const count = 0
  const data= [
    {
      name: "Banh mi trung",
      id: 1
    },
    {
      name: "Banh mi trung",
      id: 2
    },
    {
      name: "Banh mi trung",
      id: 3
    },
    {
      name: "Banh mi trung",
      id: 4
    }
  ]

  const list = ({item})=>{
    <ScrollView>
      <Appointment violator={item}/>
    </ScrollView>
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("MainHome")}>
          <Image source={require("../../../../assets/arrow.png")}/>
          <Text style={{left:"60%"}}>{count} kết quả</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{left:"120%"}} source={require("../../../../assets/filter.png")}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList style={{height:800}}
        data={data}
        renderItem={list}/>
      </ScrollView>


    </SafeAreaView>
  )
}