import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native'
import {useState} from 'react'

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
    const position ="Cảnh sát"
    const units = "Tổ đội 2"
    const organization = "Gia đình nhà họ ###"
    const bornDate = "15"
    const bornMonth = "09"
    const bornYear = "2007"
    const nation = "Việt Nam"
    return(
        <SafeAreaView>
            <View>
                <Text>Số:{judgeId}QĐ-XPVPHC</Text>
                <View>
                    <Text>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                    <Text>Độc lập- Tự do-Hạnh phúc</Text>
                </View>
            </View>

            <Text>{city} Ngày {date}tháng {month}năm {year}</Text>

            <Text>QUYẾT ĐỊNH</Text>
            <Text>Xử phạt vi phạm hành chính không lập biên bản</Text>

            <Text>Căn cứ Điều {rule} Luật xử lý vi phạm hành chính</Text>
            <Text>Căn cứ {rule2}: {title} </Text>
            <Text>Căn cứ Văn bản giao quyền số .../... ngày ... tháng ... năm ... (nếu có),</Text>
            <View>
                <Text>Tôi: {username} </Text>
                <Text>Chức vụ: {position}</Text>
                <Text>Đơn vị: {units}</Text>
            </View>


            <Text>QUYẾT ĐỊNH:</Text>

            <Text>Điều 1. Xử phạt vi phạm hành chính theo thủ tục xử phạt không lập biên bản đối với:</Text>
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

            <Text>Điều 2. Các hình thức xử phạt và biện pháp khắc phục hậu quả được áp dụng:</Text>
            <Text>1. Hình thức xử phạt chính:</Text>
            <Text>Mức phạt: {fine}</Text>
            <Text>2. Hình thức xử phạt bổ sung: </Text>
            <Text>3. Biện pháp khắc phục hậu quả:</Text>

            <Text>Điều 3. Quyết định này có hiệu lực thi hành kể từ ngày ký.</Text>

            <Text>Điều 4. Quyết định này được:</Text>
            <Text>1. Giao cho ông (bà)/tổ chức .................................. để chấp hành Quyết định xử phạt.
            Trong trường hợp bị xử phạt tiền, ông (bà)/tổ chức nộp tiền phạt tại chỗ cho người có thẩm quyền xử phạt; trường hợp không nộp tiền phạt tại chỗ thì nộp tại phần “Nộp phạt” ở ứng dụng .............. hoặc nộp vào tài khoản của Kho bạc nhà nước/Ngân hàng thương mại: .................... trong thời hạn 10 ngày, kể từ ngày được giao Quyết định này.</Text>

            <Text>Thời hạn thi hành hình thức xử phạt bổ sung là .......... ngày; thời hạn thi hành các biện pháp khắc phục hậu quả là ......... ngày, kể từ ngày được giao Quyết định này.</Text>
            Nếu quá thời hạn trên mà không chấp hành sẽ bị cưỡng chế thi hành.
            <Text>Ông (bà)/tổ chức bị tạm giữ ....................................... để bảo đảm thi hành quyết định xử phạt.</Text>

            <Text>Ông (Bà)/Tổ chức có quyền khiếu nại hoặc khởi kiện hành chính đối với Quyết định này theo quy định của pháp luật.</Text>
            <Text>2. Gửi cho ........................................................ để thu tiền phạt</Text>
            <Text>3. ...................................................... để tổ chức thực hiện Quyết định này.</Text>
            <Text>4. Gửi cho ........................................................ để biết./.</Text>

            <View>
                <Text>Quyết định này đã được giao cho người vi phạm</Text>
                <Text>hoặc đại diện cho tổ chức vi phạm lúc...ngày</Text>
                <Text>...//...//...</Text>
                <Text>Người nhận ký ghi rõ họ tên</Text>
            </View>

            <View>
                <Text>Người ra quyết định</Text>
                <Text>(Ký ghi rõ họ tên và đóng dấu)</Text>
            </View>

            <TouchableOpacity>
                <Text>THÔNG BÁO CHO NGƯỜI VI PHẠM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}