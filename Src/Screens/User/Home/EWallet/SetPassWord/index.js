import {View,TextInput,Text,TouchableOpacity} from 'react-native'
import { useState } from 'react'
import {styles} from './style'

export default function SetPassWord({navigation}){
    const [password,setPass] = useState("")
    return(
        <View style={styles.container}>
            <Text style={styles.Bblack}>LIÊN KẾT THÀNH CÔNG</Text>

            <View style={{alignItems:"center"}}>
                <Text>Hãy thiết lập mật khẩu để</Text>
                <Text>bảo vệ ví của bạn</Text>
            </View>
            <View>
            <TextInput style={styles.textInput} placeholder="Nhập mật khẩu" onChangeText={text=>setPass(text)}/>
            <TextInput style={styles.textInput} placeholder="Xác nhận mật khẩu" onChangeText={text=> ()=>{
                if(text==password){
                    console.warn(Correct)
                }
                else if(text!=password){
                    console.warn(TypeAgain)
                }
            }}/>
            </View>

            <TouchableOpacity style={styles.blueBtn} onPress={()=>navigation.navigate("BankAccount")}>
                <Text style={styles.white}>XÁC NHẬN</Text>
            </TouchableOpacity>
        </View>
    )
}