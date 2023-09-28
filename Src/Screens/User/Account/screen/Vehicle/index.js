import React, {useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default function VehicleInfo({navigation}){
    return(
        <View>
            <View>
                <Text>KHAI BÁO THÔNG TIN</Text>
                <Text>PHƯƠNG TIỆN</Text>
            </View>

            <TouchableOpacity>
                <Text>Giấy đăng kiểm</Text>
                <Text>TẢI LÊN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Cà vẹt xe</Text>
                <Text>TẢI LÊN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>XÁC NHẬN</Text>
            </TouchableOpacity>
        </View>
    )
}