import { View, Text,Image, FlatList,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from './styles'
import Fault from './components/fault'
import Sanction from './components/sanction'




export default function Notification({navigation}) {
  const count = 0
  const data= [
    {
      name: "Banh mi trung",
      type: "active",
      id: 1
    },
    {
      name: "Banh mi trung",
      type: "passive",
      id: 2
    },
    {
      name: "Banh mi trung",
      type: "active",
      id: 3
    },
    {
      name: "Banh mi trung",
      type: "passive",
      id: 4
    }
  ]

  const list = ({item})=>{
    if (item.type=="active"){
      return(
        <View>
          <Sanction policename={item}/>
        </View>
      )
    }
    else if (item.type=="passive"){
      return(
        <View>
          <Fault policename={item}/>
        </View>
      )
    }
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