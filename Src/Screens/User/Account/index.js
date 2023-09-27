import { View, Text, Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import SettingBtn from './components/settingBtn'

export default function Account() {
  return (
    <View style={styles.container}>
      <Image style ={styles.avatar} source={require('./components/icon/avatar.jpg')} />

      <View style={styles.userInfo}>
        <Text style={styles.text}>Nguyễn Văn A</Text>
        <Text style={styles.phoneNum}>0327140307</Text>
      </View>

      <View style={{top:"10%",left:"4%"}}>
        <SettingBtn title="Khai báo thông tin phương tiện" src={require('./components/icon/privateInfo.png')} />
        <SettingBtn title="Lịch sử liên lạc" src={require('./components/icon/history.png')} />
        <View style={styles.box}></View>

        <SettingBtn title="Cài đặt chung" src={require('./components/icon/setting.png')} />
        <SettingBtn title="Thay đổi mật khẩu ví điện tử" src={require('./components/icon/changePw.png')} />

        <View style={styles.box}></View>

        <SettingBtn title="Cài đặt chữ ký" src={require('./components/icon/sign.png')} />
        <SettingBtn title="Đăng xuất" src={require('./components/icon/logout.png')} />
      </View>

    </View>
  )
}