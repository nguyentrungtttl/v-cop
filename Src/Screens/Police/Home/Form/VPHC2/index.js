import {Text,View,TouchableOpacity,SafeAreaView, ScrollView,Image} from 'react-native'
import {styles} from './style'

export default function VPHC2({navigation}){
    // Only for testing purpose
    const reportId = "04"
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const day = time.getDate()
    const month = time.getMonth()+1
    const year = time.getFullYear()
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
    const plateNum = "92A-03136"
    const phoneNum = "+84#####"

    return(
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{marginTop:"15%",marginHorizontal:"1%",alignItems:"center",marginBottom:"5%",right:"40%"}}>
                <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("ViolatorInf")}>
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

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Địa chỉ:</Text> {address}</Text>

            <View>
                <Text style={{left:"2%",marginBottom:"2%"}}> <Text style={styles.Bblack}>Nghề nghiệp(lĩnh vực hoạt động):</Text> {job} </Text>
                <Text style={{left:"2%",marginBottom:"2%"}}> <Text style={styles.Bblack}>Năm sinh:</Text> {bornYear}</Text>
            </View>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Số CMND hoặc hộ chiếu Quyết định thành lập hoặc ĐKKD:</Text> {id}</Text>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Ngày cấp:</Text>{idDate}/{idMonth}/{idYear} <Text style={styles.Bblack}>Nơi cấp:</Text>{idCity}</Text>
            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Chủ sỡ hữu phương tiện:</Text> {plateNum}</Text>
            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Số điện thoại liên lạc:</Text> {phoneNum}</Text>

            <View style={{marginVertical:"5%"}}>
                <Text style={styles.Bblack}>Đã có hành vi vi phạm hành chính</Text>
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

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Done")}>
                <Text style={styles.black}>Thông báo cho người vi phạm</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}