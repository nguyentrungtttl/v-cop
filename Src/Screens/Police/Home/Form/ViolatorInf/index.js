import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";

export default function ViolatorInf({navigation}){
    return(
        <SafeAreaView>
            <Text>THÔNG TIN CHỦ XE</Text>

            <Text>Tên chủ phương tiện</Text>
            <Text>{violator}</Text>

            <Text>Số điện thoại</Text>
            <Text>{phoneNum}</Text>

            <Text>Địa chỉ thường trú</Text>
            <Text>{address}</Text>

            <Text>HỒ SƠ ĐĂNG KIỂM</Text>
            <Image />

            <Text>BẰNG LÁI XE</Text>
            <Image />

            <Text>LỊCH SỬ VI PHẠM</Text>
            <Text>Có {count} kết quả</Text>
            <View></View>

            <Text>GIẤY ĐĂNG KÝ XE</Text>
            <Image/>

            <View>
                <TouchableOpacity>
                    <Text>TẠO BIÊN BẢN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>TẠO ĐƠN THÔNG BÁO</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                    <Text>TẠO QUYẾT ĐỊNH XỬ PHẠT (KHÔNG BIÊN BẢN)</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}