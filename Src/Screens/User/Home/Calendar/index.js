import {View,Text,TouchableOpacity,StyleSheet,Image,SafeAreaView, FlatList} from 'react-native'
import React,{useState} from 'react';
import {Calendar} from 'react-native-calendars';
import CheckBox from 'react-native-check-box'

export default function SetAppointment(){
    const [daySelect,setDaySelect] = useState("")
    const [modal,setModal] =useState(false)
    var MaDate = new Date();
    var MyDate = new Date()
    var MaxDate;
    var MinDate
    const [isChecked, setSelection] = useState(false);

    const possibleDay = [
        {time: "08:15"},
        {time: "09:45"},
        {time: "10:15"},
        {time: "10:30"},
        {time: "11:00"}
    ]

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
                <Text style={{fontSize: 17,fontWeight:"bold",marginTop:"5%"}}>Chọn giờ</Text>
                <View style={{flexDirection:"row",backgroundColor:"grey",justifyContent:"space-around",paddingVertical:"4%",marginTop:"5%",top:"1%"}}>
                    <CheckBox color='black' onClick={()=>console.log("Clicked")}/>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>08:15</Text>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>{daySelect}</Text>
                </View>

                <View style={{flexDirection:"row",backgroundColor:"grey",justifyContent:"space-around",paddingVertical:"4%"}}>
                    <CheckBox color='black' onClick={()=>console.log("Clicked")}/>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>09:45</Text>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>{daySelect}</Text>
                </View>

                <View style={{flexDirection:"row",backgroundColor:"grey",justifyContent:"space-around",paddingVertical:"4%"}}>
                    <CheckBox color='black' onClick={()=>console.log("Clicked")}/>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>10:15</Text>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>{daySelect}</Text>
                </View>

                <View style={{flexDirection:"row",backgroundColor:"grey",justifyContent:"space-around",paddingVertical:"4%"}}>
                    <CheckBox color='black' onClick={()=>console.log("Clicked")}/>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>10:30</Text>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>{daySelect}</Text>
                </View>

                <View style={{flexDirection:"row",backgroundColor:"grey",justifyContent:"space-around",paddingVertical:"4%",top:"-1%"}}>
                    <CheckBox color='black' onClick={()=>console.log("Clicked")}/>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>11:00</Text>
                    <Text style={{top:"1%",fontSize:14,fontWeight:"bold"}}>{daySelect}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}