import {View,TouchableOpacity,Text,Image,SafeAreaView} from 'react-native'
import {styles} from './style'
export default function MoneyExchange({navigation}){
    // Only for testing purpose
    const remainingmoney="1.000.000 VNĐ"
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>SỐ DƯ TÀI KHOẢN</Text>
                    <Image style={{left:"325%"}} source={require("../../../../../assets/frame.png")} />
                </View>

                <Text style={{fontSize:15,fontWeight:"bold",color:"#616161",textAlign:"center"}}>{remainingmoney}</Text>
                <Image style={{marginTop:"2%",top:"19%",right:"20%"}} source={require("../../../../../assets/arrowCircle.png")}/>
            </View>

            <View style={{flexDirection:"row", top:"40%"}}>
                <TouchableOpacity style={styles.blueBox} onPress={()=>{navigation.navigate("BankSelection")}}>
                    <Text style={styles.black}>Chuyển tiền</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bluerBtn} onPress={()=>{navigation.navigate("BankSelection")}}>
                    <Text style={styles.white}>Nộp tiền</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}