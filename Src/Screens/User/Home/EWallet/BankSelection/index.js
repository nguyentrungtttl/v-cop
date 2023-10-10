import {Image,Text,View,TouchableOpacity,SafeAreaView} from 'react-native'
import {styles} from './style'
export default function BankSelection({navigation}){
    // Only for testing purpose
    const creditNum = "*********271"
    return(
        <SafeAreaView>
            <Text style={styles.blue}>Ngân hàng</Text>

            <View>
                <TouchableOpacity  style={{flexDirection:"row", backgroundColor:"white",marginHorizontal:"5%",borderWidth:1,borderRadius:10, padding: "6%",marginTop:"7%",borderColor:"#E5E7EB"}}>
                    <Image source={require("../../../../../assets/MB.png")}/>
                    <View style={{left:"55%",}}>
                        <Text style={styles.Bblue}>MB Bank</Text>
                        <Text>{creditNum}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row", backgroundColor:"white",marginHorizontal:"5%",borderWidth:1,borderRadius:10, padding: "6%",marginTop:"7%",borderColor:"#E5E7EB"}}>
                    <Image source={require("../../../../../assets/Canada.png")}/>
                    <View style={{left:"55%",}}>
                        <Text style={styles.Bblue}>Bank of Canada</Text>
                        <Text>{creditNum}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row", backgroundColor:"white",marginHorizontal:"5%",borderWidth:1,borderRadius:10, padding: "6%",marginTop:"7%",borderColor:"#E5E7EB"}}>
                    <Image source={require("../../../../../assets/Paypal.png")}/>
                    <View style={{left:"55%",}}>
                        <Text style={styles.Bblue}>Paypal</Text>
                        <Text>{creditNum}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row", backgroundColor:"white",marginHorizontal:"5%",borderWidth:1,borderRadius:10, padding: "6%",marginTop:"7%",borderColor:"#E5E7EB"}}>
                    <Image source={require("../../../../../assets/PayFast.png")}/>
                    <View style={{left:"55%",}}>
                        <Text style={styles.Bblue}>PayFast</Text>
                        <Text>{creditNum}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Withdraw")}>
                <Text style={styles.black}>Xác nhận</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}