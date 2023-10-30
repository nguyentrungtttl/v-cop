import { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {styles} from './style'

export default function ViolatorInf({navigation}){
    const violator = "Nguyễn Văn B"
    const phoneNum = "09123#######"
    const address = "12A Trần Đăng Ninh"
    const [count,setCount] = useState(0)
    return(
        <ScrollView>
            <View>
                <View style={{flexDirection:"row",marginTop:"20%"}}>
                    <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("ViolatorContact")}>
                        <Image source={require("../../../../assets/arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.header}>THÔNG TIN CHỦ XE</Text>
                </View>
                
                <Text style={styles.black}>Tên chủ phương tiện</Text>
                <Text style={styles.textBox}>{violator}</Text>

                <Text style={styles.black}>Số điện thoại</Text>
                <Text style={styles.textBox}>{phoneNum}</Text>

                <Text style={styles.black}>Địa chỉ thường trú</Text>
                <Text style={styles.textBox}>{address}</Text>
                

                <Text style={styles.header}>HỒ SƠ ĐĂNG KIỂM</Text>
                <Image source={require('../../../../../assets/regis.png')} style={styles.image} />

                <Text style={styles.header}>BẰNG LÁI XE</Text>
                <Image source={require('../../../../../assets/license.png')} style={styles.image} />


                <View>
                    <Text style={styles.header}>LỊCH SỬ VI PHẠM</Text>
                    <Text style={{left:"7%"}}>Có {count} kết quả</Text>
                </View>

                <Text style={styles.header}>GIẤY ĐĂNG KÝ XE</Text>
                <Image  style={styles.image} source={require('../../../../../assets/regisitration.png')}/>

                <View style={{flexDirection:"row",marginTop:"20%",marginLeft:"7%"}}>
                    <TouchableOpacity style={[styles.btn1,{alignItems:"center",justifyContent:"center"}]} onPress={()=> navigation.navigate("VPHC2")}>
                        <Text style={{fontWeight:"bold"}}>TẠO BIÊN BẢN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn1,{alignItems:"center"}]} onPress={()=> navigation.navigate("Reported")}>
                        <Text style={{fontWeight:"bold"}}>TẠO ĐƠN</Text>
                        <Text style={{fontWeight:"bold"}}>THÔNG BÁO</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.btn1,{alignItems:"center",justifyContent:"center",marginTop:"10%",marginBottom:"40%"}]} onPress={()=> navigation.navigate("Judged")}>
                        <Text style={{fontWeight:"bold"}}>TẠO QUYẾT ĐỊNH XỬ</Text>
                        <Text style={{fontWeight:"bold"}}>PHẠT (KHÔNG BIÊN BẢN)</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}