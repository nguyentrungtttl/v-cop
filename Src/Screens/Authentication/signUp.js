import React, { useState , useEffect} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { handleLogin } from '../../API/authentication';
import { handleSignUp } from '../../API/authentication';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return(
    <View>
        <TextInput value={email} placeholder='Email' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput value={password} placeholder='Password' onChangeText={(text) => setPassword(text)}></TextInput>
        <Text>Log in</Text>
        <Button title='SignIn' onPress={()=>handleLogin(email,password)}/>
        <Button title='SignUp' onPress={()=>handleSignUp(email,password)}/>

    </View>
  )
}
export default SignUp;
