import React, {useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet, ScrollView} from 'react-native'

export default function VehicleInfo({navigation}){
    return(
        <ScrollView style={{marginTop:"20%"}}>
            <View style={{alignItems:"center"}}>
                <Text style={styles.header}>KHAI BÁO THÔNG TIN</Text>
                <Text style={styles.header}>PHƯƠNG TIỆN,</Text>
                <Text style={styles.header}>CHỦ PHƯƠNG TIỆN</Text>
            </View>

            <View style={{marginLeft:"8%", marginTop:"5%",marginRight:"15%"}}>
                <View>
                    <Text style={styles.bold}>Tên chủ phương tiện/ tổ chức sở hữu</Text>
                    <Text style={styles.box}>Nguyễn Văn B</Text>

                    <Text style={styles.bold}>Số điện thoại</Text>
                    <Text style={styles.box}>0123456789</Text>

                    <Text style={styles.bold}>Địa chỉ thường trú</Text>
                    <Text style={styles.box}>24 Nguyễn Lộ Trạch Hòa Cường Nam</Text>

                    <Text style={styles.bold}>Nghề nghiệp, Công ty</Text>
                    <Text style={styles.box}>30A 036412</Text>

                    <Text style={styles.bold}>Ngày tháng năm sinh</Text>
                    <Text style={styles.box}>14/03/1999</Text>

                    <Text style={styles.bold}>Phương tiện sở hữu 1</Text>
                    <Text style={styles.box}>30A 036412</Text>

                    <Text style={styles.bold}>Phương tiện sở hữu 1</Text>
                    <Text style={styles.box}>30A 036413</Text>
                </View>
            </View>

            <View style={{marginLeft:"8%",marginRight:"15%"}}>
                <Text style={styles.bold}>*LƯU Ý: NẾU SỞ HỮU NHIỀU HƠN 1 PHƯƠNG TIỆN, THỰC HIỆN KHAI BÁO THÔNG TIN CHO TẤT CẢ</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text>Bằng lái xe</Text>
                    <Text style={{right:"44%"}}>TẢI LÊN</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn}>
                    <Text>Giấy đăng kiểm</Text>
                    <Text style={{right:"44%"}}>TẢI LÊN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text>Cà vẹt xe</Text>
                    <Text style={{right:"44%"}}>TẢI LÊN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn1}>
                <Text>XÁC NHẬN</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    header:{
        fontSize:20,
        fontWeight:'bold',
    },
    bold:{
        fontSize:14,
        fontWeight:"bold",
        marginTop:"4%"
    },
    box:{
        backgroundColor:"#F7F8F9",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#E8ECF4",
        paddingLeft:"3%",
        paddingVertical:"2%",
        marginTop:"1%",
        color:"#8391A1"
    },
    btn:{
        backgroundColor:"#F7F8F9",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#E8ECF4",
        paddingLeft:"3%",
        paddingVertical:"4%",
        marginTop:"5%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btn1:{
        backgroundColor:"#F7F8F9",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#E8ECF4",
        paddingLeft:"3%",
        paddingVertical:"2%",
        marginTop:"1%",
        alignItems:"center",
        marginHorizontal:"30%",
        marginTop:"9%",
        marginBottom:"10%"
    }
})