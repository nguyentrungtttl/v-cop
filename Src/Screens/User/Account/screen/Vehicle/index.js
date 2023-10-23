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