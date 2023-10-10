import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import {styles} from './style'
export default function BankCollection({navigation}){
    const [collection,setCollection] = useState("")
    const [accountname,setName] = useState("")
    const [id,setId] = useState("")
    const [cmnd,setCMND] = useState("")
    return(
        <View style={styles.container}>
            <View style={styles.leading}>
                <Text style={styles.Bblack}>LIÊN KẾT TÀI KHOẢN</Text>
                <Text style={styles.Bblack}>NGÂN HÀNG</Text>
            </View>

            <View>
                <TextInput style={[styles.textInput,{marginTop:"60%"}]} placeholder="Hệ thống ngân hàng" onChangeText={text => setCollection(text)} />
                <TextInput style={styles.textInput} placeholder="Họ và tên chủ thẻ/tài khoản" onChangeText={text => setName(text)} />
                <TextInput style={styles.textInput} placeholder="Số thẻ tài khoản" onChangeText={text => setId(text)} />
                <TextInput style={styles.textInput} placeholder="Số CMND/CCCD" onChangeText={text => setCMND(text)} />
            </View>

            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("SetPassWord")}>
                <Text style={styles.black}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    )
}