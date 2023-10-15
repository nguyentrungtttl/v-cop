import {Text,View,TouchableOpacity,SafeAreaView} from 'react-native'
import {styles} from './style'

export default function VPHC({navigation}){
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
    const username= "Nguyễn Anh Huy"
    const position = "Trung úy"
    const organization = "Gia đình nhà ###"
    const address = "12A Trần Đăng Ninh,quận Hải Châu, thành phố Đà Nẵng"
    const job = "Giáo viên trường Skyline"
    const id = "123456789"
    const bornYear="1989"
    const idDate = "15"
    const idMonth= "01"
    const idYear="1998"
    const idCity = "Đà Nẵng"
    const plateNum = "43A-037472"
    const phoneNum = "0123456789"

    return(
        <SafeAreaView>
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

            <View style={{flexDirection:"row"}}>
                <Text style={{left:"2%",marginBottom:"2%"}}> <Text style={styles.Bblack}>Nghề nghiệp(lĩnh vực hoạt động):</Text> {job} </Text>
                <Text > <Text style={styles.Bblack}>Năm sinh:</Text> {bornYear}</Text>
            </View>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Số CMND hoặc hộ chiếu Quyết định thành lập hoặc ĐKKD:</Text> {id}</Text>

            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Ngày cấp:</Text>{idDate}/{idMonth}/{idYear} <Text style={styles.Bblack}>Nơi cấp:</Text>{idCity}</Text>
            <Text style={{left:"2%",marginBottom:"2%"}}><Text style={styles.Bblack}>Phương tiện sử dụng khi vi phạm:</Text> {plateNum}</Text>
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

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.black}>Thông báo cho người vi phạm</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}