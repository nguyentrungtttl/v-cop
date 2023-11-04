import {View,Text,TouchableOpacity,SafeAreaView,ScrollView,Image} from 'react-native'
import {useState} from 'react'
import {styles} from "./style"

export default function Judged({navigation}){
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
    const position ="Trung úy"
    const units = "Cục CSGT"
    const organization = "Lê Tấn Minh"
    const bornDate = "00"
    const bornMonth = "00"
    const bornYear = "19##"
    const nation = "Việt Nam"
    const job = "#####"
    const address = "Trần Đăng Ninh, Hải Châu, Đà Nẵng"
    const id = "########"
    const idDate = "00"
    const idMonth = "00"
    const idYear = "19##"
    const idLocation = "UBND phường Thọ Quang"
    const geoLocation = "12A Trần Đăng Ninh"
    const fine = "250.000VNĐ"
    return(
        <ScrollView style={{flex:2,backgroundColor:"white"}}>
            <View style={{marginTop:"5%"}}>
                <View style={{marginBottom:"5%",left:"5%"}}>
                    <TouchableOpacity style={{flexDirection:"row",right:"15%",}} onPress={()=>navigation.navigate("ViolatorInf")}>
                        <Image source={require("../../../../../assets/arrow.png")}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.leading}>
                    <Text>Số:{judgeId}QĐ-XPVPHC</Text>
                    <View style={styles.alignCenter}>
                        <Text style={styles.black}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                        <Text style={styles.black}>Độc lập- Tự do-Hạnh phúc</Text>
                    </View>
                </View>

                <Text style={styles.judgedDate}>{city} Ngày {date}tháng {month}năm {year}</Text>

                <Text style={styles.Bred}>QUYẾT ĐỊNH</Text>
                <Text style={styles.Bblack}>Xử phạt vi phạm hành chính không lập biên bản</Text>

                <View style={{marginLeft:"6%",marginTop:"10%"}}>
                    <Text>Căn cứ Điều {rule} Luật xử lý vi phạm hành chính</Text>
                    <Text>Căn cứ {rule2}: {title} </Text>
                    <Text>Căn cứ Văn bản giao quyền số .../... ngày ... tháng ... năm ... (nếu có),</Text>
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
                    <Text>Đã thực hiện hành vi vi phạm hành chính 4a ....................... quy định tại 4b</Text>
                    <Text>Địa điểm xảy ra vi phạm: {geoLocation}</Text>
                    <Text>Các tình tiết liên quan đến giải quyết vi phạm (nếu có): </Text>

                    <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 2.</Text> Các hình thức xử phạt và biện pháp khắc phục hậu quả được áp dụng:</Text>
                    <Text>1. Hình thức xử phạt chính:</Text>
                    <Text>Mức phạt: {fine}</Text>
                    <Text>2. Hình thức xử phạt bổ sung: </Text>
                    <Text>3. Biện pháp khắc phục hậu quả:</Text>

                    <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 3.</Text> Quyết định này có hiệu lực thi hành kể từ ngày ký.</Text>

                    <Text style={{marginTop:"5%"}}><Text style={styles.black}>Điều 4.</Text> Quyết định này được:</Text>
                    <Text>1. Giao cho ông (bà)/tổ chức .................................. để chấp hành Quyết định xử phạt. Trong trường hợp bị xử phạt tiền, ông (bà)/tổ chức nộp tiền phạt tại chỗ cho người có thẩm quyền xử phạt; trường hợp không nộp tiền phạt tại chỗ thì nộp tại phần “Nộp phạt” ở ứng dụng .............. hoặc nộp vào tài khoản của Kho bạc nhà nước/Ngân hàng thương mại: .................... trong thời hạn 10 ngày, kể từ ngày được giao Quyết định này.</Text>

                    <Text>Thời hạn thi hành hình thức xử phạt bổ sung là .......... ngày; thời hạn thi hành các biện pháp khắc phục hậu quả là ......... ngày, kể từ ngày được giao Quyết định này.</Text>
                    <Text>Nếu quá thời hạn trên mà không chấp hành sẽ bị cưỡng chế thi hành.</Text>
                    <Text>Ông (bà)/tổ chức bị tạm giữ ....................................... để bảo đảm thi hành quyết định xử phạt.</Text>

                    <Text>Ông (Bà)/Tổ chức có quyền khiếu nại hoặc khởi kiện hành chính đối với Quyết định này theo quy định của pháp luật.</Text>
                    <Text>2. Gửi cho ........................................................ để thu tiền phạt</Text>
                    <Text>3. ...................................................... để tổ chức thực hiện Quyết định này.</Text>
                    <Text>4. Gửi cho ........................................................ để biết./.</Text>
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

                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Done")}>
                    <Text>THÔNG BÁO CHO NGƯỜI VI PHẠM</Text>
                </TouchableOpacity>
            
            </View>
        </ScrollView>
        
    )
}