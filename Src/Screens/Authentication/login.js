import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { handleLogin } from '../../API/authentication'
import {doc,getDoc} from "firebase/firestore/lite"


const Login =({navigation}) =>{
  const [username,setUsername] = useState('')
  const [id,setId] =useState('')
  const [passWord,setPassWord] = useState('')
  const [isLogged,setIsLogged] = useState(false)
  const handleLoginFunc = async() =>{
    const a = await handleLogin({id,passWord})
    console.log(a)
  }

  return(
    <View style={styles.container}>

      <Image style={styles.logo}source={require('../../assets/vcop.png')} />


      <View>
        <Text style={styles.lead}>───────── Đăng nhập ─────────</Text>
        <TextInput style={styles.textInput} placeholder="Họ và tên" onChangeText={text => setUsername(text)} value={username}/>
        <TextInput style={styles.textInput} placeholder="Căn cước công dân" onChangeText={id => setId(id)} value={id} />
        <TextInput style={styles.textInput}  placeholder='Mật khẩu' onChangeText={PW => setPassWord(PW)} value={passWord}  />
        <TouchableOpacity style={styles.btn} 
          onPress={()=>{handleLoginFunc()}}>
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