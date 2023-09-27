import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'

const Login =({navigation}) =>{
  const [username,setUsername] = useState('')
  const [id,setId] =useState('')
  const [passWord,setPassWord] = useState('')

  return(
    <View style={styles.container}>

      <Image style={styles.logo}source={require('../../assets/vcop.png')} />


      <View>
        <Text style={styles.lead}>───────── Đăng nhập ─────────</Text>
        <TextInput style={styles.textInput} placeholder="Họ và tên" onChangeText={username}/>
        <TextInput style={styles.textInput} placeholder="Căn cước công dân" onChangeText={id} />
        <TextInput style={styles.textInput}  placeholder='Mật khẩu' onChangeText={passWord} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.boldWhite}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>

      <View style={[{flexDirection:"row",top: "22%"}]}>
        <Text style={[{right: "40%"}]}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bluetxt} >ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}   

export default Login;