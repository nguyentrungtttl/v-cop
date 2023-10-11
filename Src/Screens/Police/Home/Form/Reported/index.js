import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native'
import {useState} from 'react'

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
    return(
        <SafeAreaView>
            <View>
                <Text>Số {reportedId} QĐ-XPVPHC</Text>
                <View>
                    <Text>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                    <Text>Độc lập- Tự do-Hạnh phúc</Text>
                </View>
            </View>

            <Text>ĐƠN THÔNG BÁO VI PHẠM</Text>
            <Text>Phương tiện: {plateNum} </Text>

            <View>
                <Text>Được phát hiện vi phạm lỗi</Text>
            </View>

            <View>
                <Text>Vào hồi:</Text>
                <Text>{hour} giờ {minute} phút</Text>
            </View>

            <View>
                <Text>Ngày</Text>
                <Text>{day} tháng {month} năm {year}</Text>
                <Text>tại</Text>
                <Text>{geoLocation}</Text>
            </View>

            <View>
                <Text>Đề nghị:</Text>
                <Text>Đề nghị: ông/bà trong vòng 20 ngày làm việc(kể từ thời điểm nhận được thông báo), đặt lịch làm việc với cơ quan chức năng để giải quyết vụ việc theo quy định của pháp luật</Text>
                <Text>Nếu ông/bà không chấp hành,cơ quan chức năng sẽ tiến hành các biện pháp khác để xử lý, đồng thời thông báo các đơn vị đăng kiểm xe để phối hợp xử lý theo quy định</Text>
            </View>

            <View>
                <Text>NGƯỜI XÁC NHẬN</Text>
            </View>

            <TouchableOpacity>
                <Text>THÔNG BÁO CHO NGƯỜI VI PHẠM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}