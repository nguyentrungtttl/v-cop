import {View,Text,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import {useState} from 'react'
import {styles} from './style'
import {Picker} from '@react-native-picker/picker'
import { SelectList } from 'react-native-dropdown-select-list'

export default function Reported({navigation}){
    // Only for testing purpose
    const reportedId = "02"
    const plateNum = "43A-273472"
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const day = time.getDate()
    const month = time.getMonth()+1
    const year = time.getFullYear()
    const geoLocation = "đường 2/9"
    const [fault,setFault] = useState()
    const data = [
        {key:'1', value:'Đậu xe sai quy định'},
        {key:'2', value:'Không đội mũ bảo hiểm'},
        {key:'3', value:'Uống rượu bia khi lái xe'},
        {key:'4', value:'Vượt đèn đỏ'},
        {key:'5', value:'Bắn tốc độ'},
    ]
    return(
        <ScrollView>
            <View>
                <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("ViolatorInf")}>
                    <Image source={require("../../../../../assets/arrow.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.leading}>
                <Text style={{top:"1%"}}>Số {reportedId} QĐ-XPVPHC</Text>
                <View style={styles.alignCenter}>
                    <Text style={styles.black}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                    <Text style={styles.black}>Độc lập- Tự do-Hạnh phúc</Text>
                </View>
            </View>
            <View>
                <Text style={styles.Bred}>ĐƠN THÔNG BÁO VI PHẠM</Text>
                <Text style={{marginTop:"1%"}}><Text style={styles.Bblack}>Phương tiện:</Text> {plateNum} </Text>
            </View>

            <View>
                <Text style={[styles.Bblack,{textAlign:"left",marginLeft:"5%",marginTop:"15%"}]}>Được phát hiện vi phạm lỗi</Text>
                <SelectList
                
                setSelected={(val)=>setFault(val)}
                data={data}
                save='value'/>
                
            </View>

            <View style={{flexDirection:"row",marginTop:"7%"}}>
                <Text style={[styles.Bblack,{textAlign:"left",marginLeft:"5%"}]}>Vào hồi: </Text>
                <Text style={{top:"2.2%"}}>{hour} giờ {minute} phút</Text>
            </View>

            <View style={{flexDirection:"row",marginTop:"7%"}}>
                <Text style={[styles.Bblack,{textAlign:"left",marginLeft:"5%"}]}>Ngày </Text>
                <Text style={{top:"2.3%"}}>{day} tháng {month} năm {year},</Text>
                <Text style={[styles.Bblack,{textAlign:"left"}]}> tại </Text>
                <Text style={{top:"2.3%"}}>{geoLocation}</Text>
            </View>

            <View style={{marginHorizontal:"5%",marginTop:"7%"}}>
                <Text style={[styles.Bblack,{textAlign:"left"}]}>Đề nghị: </Text>
                <Text>Ông/bà trong vòng 20 ngày làm việc(kể từ thời điểm nhận được thông báo), đặt lịch làm việc với cơ quan chức năng để giải quyết vụ việc theo quy định của pháp luật</Text>
                <Text>Nếu ông/bà không chấp hành,cơ quan chức năng sẽ tiến hành các biện pháp khác để xử lý, đồng thời thông báo các đơn vị đăng kiểm xe để phối hợp xử lý theo quy định</Text>
            </View>

            <View>
                <Text style={[styles.Bblack,{textAlign:"right",marginTop:"7%", marginRight:"7%"}]}>NGƯỜI XÁC NHẬN</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Done")}>
                <Text>THÔNG BÁO CHO NGƯỜI VI PHẠM</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}