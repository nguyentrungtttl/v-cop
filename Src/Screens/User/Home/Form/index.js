import {View,Text,ScrollView,TouchableOpacity,FlatList,CheckBox,Image} from 'react-native'
import {styles} from './style'


export default function Paid({navigation}){
    const judgeId = "01"
    const city = "Đà Nẵng"
    const time = new Date()
    const date = time.getDate()
    const month = time.getMonth()+1
    const year = time.getFullYear()
    const rule = "57"
    const rule2 = "3"
    const title = "............."
    const username = "Nguyễn Văn A"
    const position ="Cảnh sát"
    const units = "Tổ đội 2"
    const organization = "Gia đình nhà họ ###"
    const bornDate = "15"
    const bornMonth = "09"
    const bornYear = "2007"
    const nation = "Việt Nam"
    const job = "Giáo viên"
    const address = "12A Trần Đăng Ninh"
    const id = "123456789"
    const idDate = "15"
    const idMonth = "09"
    const idYear = "2010"
    const idLocation = "UBND phường Thọ Quang"
    const geoLocation = "12A Trần Đăng Ninh"
    const fine = "250.000VNĐ"
    

    const pressHandler = ()=>{
        navigation.navigate("MainHome")
    }

    return(
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={{marginHorizontal:"4%",marginTop:"4%"}}>
            <View style={{flexDirection:"row",left:"10%"}}>
                <TouchableOpacity style={{flexDirection:"row",right:"15%",top:"40%"}} onPress={()=>navigation.navigate("Notification")}>
                    <Image source={require("../../../../assets/arrow.png")}/>
                </TouchableOpacity>
                <Text style={{fontSize:40,fontWeight:"bold",textAlign:"center",marginTop:"20%"}}>NỘP PHẠT</Text>
            </View>
            <Text style={{fontSize:16,fontWeight:"bold",marginTop:"3%"}}>Bấm vào để xem: Quyết định xử phạt</Text>
            <ScrollView style={{borderWidth:3,borderColor:"black",height:600,paddingHorizontal:"5%"}}>
                <View style={{marginTop:"10%"}}>
                
                    <View style={styles.leading}>
                        <Text>Số:{judgeId}QĐ-XPVPHC</Text>
                        <View style={styles.alignCenter}>
                            <Text style={styles.black}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                            <Text style={styles.black}>Độc lập- Tự do-Hạnh phúc</Text>
                        </View>
                    </View>

                    <Text style={styles.judgedDate}>{city} Ngày {date}tháng {month}năm {year}</Text>

                    <Text style={styles.Bred}>QUYẾT ĐỊNH XỬ PHẠT VI PHẠM HÀNH CHÍNH</Text>
                    <Text style={styles.Bblack}>Trong lĩnh vực giao thông đường bộ</Text>

                    <View style={{marginTop:"10%"}}>
                        <Text>Căn cứ Điều {rule} Luật xử lý vi phạm hành chính</Text>
                        <Text>Căn cứ nghị định số {rule2} của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ: {title} </Text>
                        <Text>Căn cứ Biên bản vi phạm hành chính số: ...../BB-VPHC do... lập hồi .../... ngày ... tháng ... năm ... tại ...</Text>
                        <Text>Xét hành vi vi phạm hành chính do ông(bà)/tổ chức:... thực hiện và các tình tiết giảm nhẹ, tình tiết tăng nặng (nếu có): ....</Text>
                        <View>
                            <Text>Tôi: {username} </Text>
                            <Text>Chức vụ: {position}</Text>
                            <Text>Đơn vị: {units}</Text>
                        </View>


                        <Text style={[styles.Bblack,{marginTop:"10%"}]}>QUYẾT ĐỊNH:</Text>

                        <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 1.</Text> Xử phạt vi phạm hành chính theo thủ tục xử phạt không lập biên bản đối với:</Text>
                        <Text>Ông (Bà)/Tổ chức: {organization}</Text>
                        <View>
                        <Text>Ngày {bornDate} tháng {bornMonth} năm sinh {bornYear} </Text>
                        <Text>Quốc tịch: {nation}</Text>
                        </View>
                        <Text>Nghề nghiệp/lĩnh vực hoạt động: {job}</Text>
                        <Text>Địa chỉ: {address}</Text>
                        <Text>Giấy CMND hoặc hộ chiếu/Quyết định thành lập hoặc ĐKKD số:{id}</Text>
                        <Text>Cấp ngày: {idDate} / {idMonth} / {idYear} Nơi cấp: {idLocation}</Text>
                        <Text>Với các hình thức sau:</Text>
                        <Text>1. Phạt tiền đối với hành vi vi phạm quy định của Nghị định số.../.../NĐ-CP tại:</Text>

                        {/* Nghị định */}
                        <FlatList/>

                        <Text>Tổng cộng tiền phạt là: .... VNĐ (Bằng chữ: ....)</Text>

                        <Text>2. Hình thức phạt bổ sung (nếu có): .....</Text>

                        <Text>3. Các biện pháp khắc phục hậu quả (nếu có): ....</Text>

                        <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 2.</Text> Ông (bà)/tổ chức có tên tại Điều 1 phải nghiêm chỉnh chấp hành Quyết định xử phạt trong thời hạn 10 (mười) ngày, kể từ ngày được giao Quyết định xử phạt là ngày ….. tháng ….. năm ………, trừ trường hợp được hoãn chấp hành theo quy định của pháp luật vì ……………….……………………..…..Quá thời hạn nêu trên, nếu không tự nguyện chấp hành thì bị cưỡng chế thi hành theo quy định của pháp luật.
    Số tiền phạt quy định tại Điều 1 phải được nộp vào tài khoản số ……………....... của Kho bạc Nhà nước…………………. trong vòng 10 (mười) ngày, kể từ ngày được giao Quyết định xử phạt.
    Ông (bà)/tổ chức có tên tại Điều 1 có quyền khiếu nại hoặc khởi kiện đối với Quyết định xử phạt vi phạm hành chính này theo quy định của pháp luật.</Text>

                        <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 3.</Text>Quyết định này có hiệu lực thi hành kể từ ngày…… / …… /…........... và được lập thành 03 bản có nội dung và giá trị như nhau, 01 bản giao cho người vi phạm hoặc đại diện tổ chức vi phạm, 01 bản giao cho Kho bạc Nhà nước nơi thu tiền phạt, 01 bản lưu hồ sơ cơ quan xử lý vi phạm hành chính.</Text>
                    </View>

                    <View style={styles.sign}>
                        <View style={{alignItems:"center",top:"-3%"}}>
                            <Text style={styles.black}>Quyết định này đã được giao cho</Text>
                            <Text style={styles.black}> người vi phạm hoặc đại diện</Text>
                            <Text style={styles.black}>cho tổ chức vi phạm lúc...ngày</Text>
                            <Text style={styles.black}>...//...//...</Text>
                            <Text >(Người nhận ký ghi rõ họ tên)</Text>
                        </View>

                        <View style={{alignItems:"center"}}>
                            <Text style={styles.black}>Người ra quyết định</Text>
                            <Text>(Ký ghi rõ họ tên và đóng dấu)</Text>
                        </View>
                    </View>


                
                </View>
            </ScrollView>
        <Text style={{marginTop:"5%"}}><Text style={{fontSize:17,fontWeight:"bold"}}>SỐ TIỀN PHẠT:</Text> {fine}</Text>
        <Text>*Liên kết với tài khoản ngân hàng</Text>
        <TouchableOpacity style={styles.btn} onPress={pressHandler}>
                    <Text>NỘP PHẠT</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
)}