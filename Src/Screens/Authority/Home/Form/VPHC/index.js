import {View,SafeAreaView,TouchableOpacity,Text, ScrollView,Image} from 'react-native'
import React, {useState} from 'react'
import {styles} from './style'

export default function VPHC({navigation}){
        // Only for testing purpose
        const reportId = "02"
        const plateNum = "92A-03136"
        const time = new Date()
        const hour = time.getHours()
        const minute = time.getMinutes()
        const day = time.getDate()
        const month = time.getMonth()+1
        const year = time.getFullYear()
        const [fault,setFault] = useState()
        const data = [
            {key:'1', value:'Đậu xe sai quy định'},
            {key:'2', value:'Không đội mũ bảo hiểm'},
            {key:'3', value:'Uống rượu bia khi lái xe'},
            {key:'4', value:'Vượt đèn đỏ'},
            {key:'5', value:'Bắn tốc độ'},
        ]
        const city ="Đà Nẵng"
        const district="Hải Châu"
        const username= "Nguyễn Văn A"
        const position = "Trung úy"
        const organization = "Lê Tấn Minh"
        const address = "Trần Đăng Ninh, Hải Châu, Đà Nẵng"
        const job = "#######"
        const id = "123456789"
        const bornYear="19##"
        const idDate = "00"
        const idMonth= "00"
        const idYear="19##"
        const idCity = "Đà Nẵng"
        const phoneNum = "+84#####"
    return(
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{marginTop:"15%",}}>
            <View style={{marginBottom:"5%",left:"5%"}}>
                <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("Notification")}>
                    <Image source={require("../../../../../assets/arrow.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.leading}>
                <Text style={{top:"2%"}}>Số:{reportId}BB-VPHC</Text>

                <View style={styles.alignCenter}>
                    <Text style={styles.black}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                    <Text style={styles.black}>Độc lập - Tự do - Hạnh phúc</Text>
                </View>
            </View>

            
            <Text style={styles.Bred}>BIÊN BẢN VI  PHẠM HÀNH CHÍNH</Text>

            <Text style={[styles.Bblack,{textAlign:"center"}]}>Trong lĩnh vực giao thông đường bộ, đường sắt</Text>

            <Text style={styles.Bblack}>Hôm nay,hồi {hour} giờ {minute} phút, ngày {day} tháng {month} năm {year}, tại {city}</Text>

            <View>
                <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Tôi:</Text> {username}</Text>
                <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Chức vụ:</Text> {position}</Text>
            </View>

            <Text style={styles.Bblack}>Tiến hành lập biên bản VPHC trong lĩnh vực giao thông đường bộ đối với:</Text>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Ông(bà) tổ chức:</Text> {organization}</Text>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Chủ sỡ hữu phương tiện:</Text> {plateNum}</Text>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Số điện thoại liên lạc:</Text> {phoneNum}</Text>

            <View style={{marginVertical:"5%"}}>
                <Text style={styles.Bblack}>Đã có hành vi vi phạm hành chính</Text>
            </View>

            <View style={{marginHorizontal:"5%",marginTop:"7%"}}>
                <Text style={styles.Bblack}>Đề nghị</Text>
                <Text>ông/bà trong vòng 10 ngày làm việc(kể từ thời điểm nhận được quyết định xử phạt)</Text>
                <Text>, tiến hành nộp tiền phạt vi phạm hành chính</Text>
            </View>

            <View>
                <Text style={[styles.Bblack,{right:"3%"}]}>Số tiền phải nộp:</Text>
            </View>

            <View style={{flexDirection:"row", left:"1%"}}>
                <View style={styles.alignCenter}>
                    <Text style={styles.black}>CÁ NHÂN VI PHẠM ĐẠI DIỆN</Text>
                    <Text style={styles.black}>HOẶC</Text>
                    <Text style={styles.black}> TỔ CHỨC VI PHẠM</Text>
                    <Text style={styles.Sblack}>(Ký tên,ghi rõ chức vụ và tên)</Text>
                </View>

                <View style={{left:"60%",top:"7.5%"}}>
                    <View style={styles.alignCenter}>
                        <Text style={styles.black}>NGƯỜI LẬP BIÊN BẢN</Text>
                        <Text style={styles.Sblack}>(Ký tên,ghi rõ chức vụ và tên)</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Judged")}>
                <Text style={styles.black}>RA QUYẾT ĐỊNH XỬ PHẠT</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}