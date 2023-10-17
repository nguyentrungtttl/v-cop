import { View, Text, FlatList, ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { styles } from './style'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'
import TaskBtn from './components/button'
import Meeting from './components/meeting'

export default function MainHome({navigation}) {
  const [count,setCount] = useState(0)
  const [faults,setFault]=useState(
    [
      {name:"Nguyễn Văn A",id:1},
      {name:"Nguyễn Văn B",id:2},
      {name:"Nguyễn Văn C",id:3},
      {name:"Nguyễn Văn D",id:4},
      {name:"Nguyễn Văn E",id:5},
    ]
  )
  const Fault = ({item}) => (
    <ScrollView><Meeting violator={item} district={district} city={city} date={date} Mtime={hour}/></ScrollView>
  )
  const [district,setDistrict]=useState('Hải Châu')
  const [city,setCity]=useState('Đà Nẵng')
  const [date,setDate] = useState('26/9/2023')
  const [hour,setHour] = useState('8h00')
  const now = new Date()
  const month = now.getMonth()+1
  const year = now.getFullYear()
  const username= "Nguyen Van A"
  const id="04382299111"
  let index= 1
  return (
    <View style={styles.blueBgr}>
        <View style={{flexDirection:"row",justifyContent:"space-between", top:"20%"}}>
          <View style={{marginHorizontal:"5%"}}>
            <Text style={styles.whiteBig}>{username}</Text>
            <Text style={styles.whiteSmall}>{id}</Text>
          </View>
          <Image style={{marginHorizontal:"5%"}} source={require('./bell.png')}/>
        </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.leading}>Tính năng người dùng</Text>
          <TaskBtn title="Ra quyết định" title2 = "xử phạt" source={require('./components/judged.png')} onPress={()=>navigation.navigate("Form")} />
          <TaskBtn title="Làm việc" source={require('./components/workOnline.png')} onPress={()=>navigation.navigate("Evidence")} />
        </View>

        

        <View>
          <View style={{flexDirection:"row",top:"14%"}}>
            <Text style={styles.month}>Tháng {month}/{year}</Text>
            <TouchableOpacity style={{flexDirection:"row"}}>
              <Text style={styles.count}>{count} lịch hẹn</Text>
              <Image style={{marginTop:"4%",left:"190%"}} source={require('./right.png')}/>
            </TouchableOpacity>
          </View>




        </View>
        <FlatList style={{flex:0.4,marginTop:"15%"}}
          data={faults}
          renderItem={Fault}/>

        
      </View>
    </View>
  )
}