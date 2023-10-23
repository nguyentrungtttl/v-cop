import {View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView, FlatList} from 'react-native'
import React,{useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Checkbox from './components/CheckBox';

export default function SetAppointment(){
    const [is1,set1] = useState(false)
    const [is2,set2] = useState(false)
    const [is3,set3] = useState(false)
    const [is4,set4] = useState(false)
    const [is5,set5] = useState(false)

    const [daySelect,setDaySelect] = useState("")
    const [modal,setModal] =useState(false)
    var MaDate = new Date();
    var MyDate = new Date()
    var MaxDate;
    var MinDate

    MaDate.setDate(MaDate.getDate()+20);

    MaxDate = MaDate.getFullYear() +'-'+ ('0'+(MaDate.getMonth()+1)).slice(-2)+'-'+('0' + MaDate.getDate()).slice(-2)
    MinDate = MyDate.getFullYear() +'-'+ ('0'+(MyDate.getMonth()+1)).slice(-2)+'-'+('0' + MyDate.getDate()).slice(-2)
    return(
        <SafeAreaView style={{marginHorizontal:"2%"}}>
            <Text style={{fontSize: 24,textAlign:"center",fontWeight:"bold"}}>ĐẶT LỊCH</Text>
            <Calendar style={{marginTop:"4%"}}
            onDayPress={day => {
            setDaySelect(day.dateString)
            setModal(true)}}       
            markedDates={{
                [daySelect]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
            minDate={MinDate}
            maxDate={MaxDate}/>

            <View>
                <View>
                        <Checkbox onPress={()=>set1(!is1)}
                        isChecked={is1}
                        />
                        <Text>08:15</Text>
                        <Text>{daySelect}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}