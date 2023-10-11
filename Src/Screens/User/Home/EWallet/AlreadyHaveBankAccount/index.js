import {View,Text,TextInput, TouchableOpacity,SafeAreaView,TouchableWithoutFeedback, Keyboard} from 'react-native'
import {styles} from './style'
export default function BankAccount({navigation}){
    // Only for testing purpose
    const username = "Lê Trần Minh Châu"
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView>
                <Text style={styles.Bblue}>Xin chào {username}</Text>
                <Text style={styles.grey}>Hãy nhận mã bảo mật tài khoản của bạn</Text>
                
                <TextInput style={styles.textInput} placeholder="Nhập mã bảo mật" secureTextEntry={true} keyboardType='numeric'/>
        

                <TouchableOpacity style={styles.blueBtn} onPress={()=>navigation.navigate("MoneyExchange")}>
                    <Text style={styles.white}>XÁC NHẬN</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}