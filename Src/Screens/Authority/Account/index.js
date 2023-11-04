import { View, Text, Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './style'
import SettingBtn from './components/settingBtn'

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <Image style ={styles.avatar} source={require('../../User/Account/components/icon/avatar.jpg')} />

      <View style={styles.userInfo}>
        <Text style={styles.text}>Nguyễn Văn A</Text>
        <Text style={styles.phoneNum}>0327140307</Text>
      </View>

      <View style={{top:"5%",left:"4%"}}>
        <SettingBtn title="Khai báo thông tin phương tiện" src={require('../../User/Account/components/icon/privateInfo.png')}  onPress={navigation.navigate("VehicleInfo")}/>
        <SettingBtn title="Lịch sử liên lạc" src={require('../../User/Account/components/icon/history.png')} />
        <View style={styles.box}></View>

        <SettingBtn title="Cài đặt chung" src={require('../../User/Account/components/icon/setting.png')} />
        <SettingBtn title="Thay đổi mật khẩu ví điện tử" src={require('../../User/Account/components/icon/changePw.png')} />

        <View style={styles.box}></View>

        <SettingBtn title="Cài đặt chữ ký" src={require('../../User/Account/components/icon/sign.png')} />
        <SettingBtn title="Đăng xuất" src={require('../../User/Account/components/icon/logout.png')} />
      </View>

    </View>
  )
}