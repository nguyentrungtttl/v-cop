import {View,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from './style'

export default function Fault({policename}){
    // Only for testing purpose
    const district="Hải Châu"
    const city="Đà Nẵng"
    const faultDate = "15/09/2023"
    return(
        <View style={styles.box}>
            <View>
                <Text style={styles.blue}>Thông báo vi phạm</Text>
                <Text style={styles.grey}>{district}</Text>
                <Text style={styles.grey}>{city}</Text>
            </View>

            <View>
                <Text>Cán bộ phụ trách</Text>
                <Text style={styles.black}>{policename.name}</Text>
                <Text style={styles.black}>{faultDate}</Text>
                <TouchableOpacity style={styles.bluebtn}>
                    <Text style={styles.white}>ĐẶT LỊCH</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}