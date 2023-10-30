import { View, Text,Image, FlatList,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Meeting from './components/appointment'




export default function Evidence({navigation}) {
  const count = 0
  const data= [
    {name:"Ken",id:1},
    {name:"Jessie",id:2}
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
          renderItem={({item})=>(
            <Meeting violator={item} onPress={()=>navigation.navigate("VideoCall")} />
        )}/>
      </ScrollView>

    </SafeAreaView>
  )
}