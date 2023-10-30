import { View, Text,Image, FlatList,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Judged from './components/judged'




export default function Notification({navigation}) {
  const count = 0
  const data= [
    {plateNum:"92A-03136", credit: "Lê Tấn Minh", id:1},
    {plateNum:"92A-03136", credit:"Lê Tấn Minh" ,id:2}
  ]

  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <TouchableOpacity style={{flexDirection:"row", right:"10%"}} onPress={()=>navigation.navigate("MainHome")}>
          <Image source={require("../../../../assets/arrow.png")}/>
          <Text style={{left:"60%"}}>{count} kết quả</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{left:"120%"}} source={require("../../../../assets/filter.png")}/>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList 
          data={data}
          renderItem={({item,index})=>(
            <Judged plateNum={item} policeName={item} onPress={()=>navigation.navigate("VPHC")}/>
        )}/>
      </ScrollView>

    </SafeAreaView>
  )
}