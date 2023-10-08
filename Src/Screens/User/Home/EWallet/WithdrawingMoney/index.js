import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import {styles} from './style'
export default function Withdraw({navigation}){
    const creditNum = "*********271"
    return(
        <SafeAreaView>
            <View style={{flexDirection:"row", backgroundColor:"white",marginHorizontal:"5%",borderWidth:1,borderRadius:10, padding: "6%",marginTop:"7%",borderColor:"#E5E7EB"}}>
                <Image source={require("../../../../../assets/MB.png")}/>
                <View style={{left:"55%",}}>
                    <Text>MB Bank</Text>
                    <Text>{creditNum}</Text>
                </View>
        </View>

            <Text style={styles.blue}>CHỌN SỐ TIỀN</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.textInput}>
                    <TextInput placeholder='Nhập số tiền' keyboardType='numeric' />
                </View>
            </TouchableWithoutFeedback>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("DoneW")}>
                <Text style={styles.black}>Xác nhận</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}