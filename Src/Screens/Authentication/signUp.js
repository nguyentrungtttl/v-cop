import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { handleSignUp } from '../../API/authentication'

const SignUp =({navigation}) =>{
  const [username,setUsername] = useState('')
  const [id,setId] =useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [password,setPassword] = useState('')
  const handleSignUpFunc = async ()=>{
    const a = await handleSignUp({id, password, username, phoneNum})
    console.log(a);
  }
  return(
    <View style={styles.container}>

      <Image style={styles.logo}source={require('../../assets/vCop.png')} />


      <View>
        <Text style={styles.lead}>───────── Tạo tài khoản ─────────</Text>
        <TextInput style={styles.textInput} placeholder="Họ và tên" onChangeText={text =>setUsername(text)}/>
        <TextInput style={styles.textInput} placeholder="Căn cước công dân" onChangeText={text => setId(text)} />
        <TextInput style={styles.textInput} placeholder="Số điện thoại" onChangeText={text => setPhoneNum(text)} />
        <TextInput style={styles.textInput}  placeholder='Mật khẩu' onChangeText={text => setPassword(text)} />
        <TouchableOpacity style={styles.btn} onPress={handleSignUpFunc}>
          <Text style={styles.boldWhite}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>

      <View style={[{flexDirection:"row",top: "10%"}]}>
        <Text style={[{right: "35%"}]}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity>
          <Text style={styles.bluetxt} >Đăng nhập</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default SignUp;
// import React, { useState , useEffect} from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { handleLogin } from '../../API/authentication';
// import { handleSignUp } from '../../API/authentication';

// function SignUp({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLoginMain = async() =>{
//     const isValid = await handleLogin(email,password);
//     if (isValid){
//       console.log(isValid);
//       navigation.navigate('MainHome')
//     }
//     console.log(isValid);
//   }
//   return(
//     <View>
//         <TextInput value={email} placeholder='Email' onChangeText={(text) => setEmail(text)}></TextInput>
//         <TextInput value={password} placeholder='Password' onChangeText={(text) => setPassword(text)}></TextInput>
//         <Text>Log in</Text>
//         <Button title='SignIn' onPress={handleLogin}/>
//         <Button title='SignUp' onPress={()=>handleSignUp(email,password)}/>

//     </View>
//   )
// }
// export default SignUp;
