import { View, Text,Image, FlatList,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Judged from './components/judged'




export default function Notification({navigation}) {
  const count = 0
  const data= [
    {plateNum:"43E-123456", credit: "Nguyễn Duy", id:1},
    {plateNum:"55bfdsk123", credit:"Quân Văn Tứ" ,id:2}
  ]

  return (
    <SafeAreaView>
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
        <FlatList 
          data={data}
          renderItem={({item,index})=>(
            <Judged plateNum={item} policeName={item}/>
        )}/>
      </ScrollView>

    </SafeAreaView>
  )
}