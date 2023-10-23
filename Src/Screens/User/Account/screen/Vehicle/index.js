import React, {useState} from 'react'
import {View,Text,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'
import {styles} from './style'

export default function VehicleInfo({navigation}){
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <ScrollView style={{marginHorizontal:"3%"}}>
            <View style={{alignItems:"center"}}>
                <Text style={styles.Bblack}>KHAI BÁO THÔNG TIN</Text>
                <Text style={styles.Bblack}>PHƯƠNG TIỆN,</Text>
                <Text style={styles.Bblack}>CHỦ PHƯƠNG TIỆN</Text>
            </View>

            <View style={{marginTop:"5%"}}>
                <Text style={styles.black}>Tên chủ phương tiện/tổ chức sở hữu</Text>
                <Text style={styles.box}>Nguyễn Văn B</Text>

                <Text style={styles.black}>Số điện thoại</Text>
                <Text style={styles.box}>012356789</Text>

                <Text style={styles.black}>Địa chỉ thường trú</Text>
                <Text style={styles.box}>24 Nguyễn Lộ Trạch Hòa Cường Nam</Text>

                <Text style={styles.black}>Nghề nghiệp, Công ty</Text>
                <Text style={styles.box}>Giáo viên</Text>

                <Text style={styles.black}>Ngày tháng năm sinh</Text>
                <Text style={styles.box}>14/03/1999</Text>

                <Text style={styles.black}>Phương tiện sở hữu</Text>
                <Text style={styles.box}>30A 036412</Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row',backgroundColor:"#F7F8F9",borderRadius:8,justifyContent:"space-around",marginBottom:"3%",paddingVertical:"3%",marginTop:"4%",borderColor:"#E8ECF4",}}>
                <Text>Bằng lái xe</Text>
                <Text style={{left:"2%"}}>TẢI LÊN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',backgroundColor:"#F7F8F9",borderRadius:8,justifyContent:"space-around",marginBottom:"3%",paddingVertical:"3%",marginTop:"4%",borderColor:"#E8ECF4",}}>
                <Text>Giấy đăng kiểm</Text>
                <Text style={{left:"2%"}}>TẢI LÊN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',backgroundColor:"#F7F8F9",borderRadius:8,justifyContent:"space-around",marginBottom:"3%",paddingVertical:"3%",marginTop:"4%",borderColor:"#E8ECF4",}}>
                <Text>Cà vẹt xe</Text>
                <Text style={{left:"2%"}}>TẢI LÊN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text>XÁC NHẬN</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
