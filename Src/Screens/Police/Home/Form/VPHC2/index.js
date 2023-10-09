import {View, Text, TouchableOpacity, SafeAreaView}  from 'react-native'
import {useState} from 'react'

export default function VPHC2({navigation}){
    const reportId="03"
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const day = time.getDate()
    const month = time.getMonth()+1
    const year = time.getFullYear()
    const city ="Đà Nẵng"
    const district="Hải Châu"
    const username= "Nguyễn Anh Huy"
    const position = "Trung úy"
    const organization = "Gia đình nhà ###"
    const address = "12A Trần Đăng Ninh,quận Hải Châu, thành phố Đà Nẵng"
    const job = "Giáo viên trường Skyline"
    const bornYear="1989"
    const idDate = "15"
    const idMonth= "01"
    const idYear="1998"
    const idCity = "Đà Nẵng"
    const plateNum = "43A-037472"
    const phoneNum = "0123456789"
    return(
        <SafeAreaView>
            <View>
                <Text>Số:{reportId}BB-VPHC</Text>

                <View>
                    <Text>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                    <Text>Độc lập- Tự do-Hạnh phúc</Text>
                </View>

                <Text>{city} Ngày {date}tháng {month}năm {year}</Text>

                <Text>BIÊN BẢN VI  PHẠM HÀNH CHÍNH</Text>

                <Text>Trong lĩnh vực giao thông đường bộ, đường sắt</Text>

                <Text>Hôm nay,hồi {hour} giờ {minute} phút, ngày {day} tháng {month} năm {year}, tại {city}</Text>

                <View>
                    <Text>Tôi {username}</Text>
                    <Text>Chức vụ: {position}</Text>
                </View>

                <Text>Tiến hành lập biên bản VPHC trong lĩnh vực giao thông đường bộ đối với:</Text>

                <Text>Ông(bà) tổ chức: {organization}</Text>

                <Text>Địa chỉ: {address}</Text>

                <View>
                    <Text>Nghề nghiệp(lĩnh vực hoạt động): {job} </Text>
                    <Text>Năm sinh: {bornYear}</Text>
                </View>

                <Text>Số CMND hoặc hộ chiếu Quyết định thành lập hoặc ĐKKD: {id}</Text>

                <Text>Ngày cấp:{idDate}/{idMonth}/{idYear} Nơi cấp:{idCity}</Text>
                <Text>Chủ sỡ hữu phương tiện: {plateNum}</Text>
                <Text>Số điện thoại liên lạc: {phoneNum}</Text>

                <Text>Đã có hành vi vi phạm hành chính</Text>

                <View>
                    <View>
                        <Text>Cá nhân vi phạm hoặc đại diện tổ chức vi phạm</Text>
                        <Text>(Ký tên,ghi rõ chức vụ và tên)</Text>
                    </View>

                    <View>
                        <View>
                            <Text>Người vi phạm</Text>
                            <Text>(Ký tên,ghi rõ chức vụ và tên)</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <Text>Thông báo cho người vi phạm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}