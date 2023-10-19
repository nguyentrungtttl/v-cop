import {View,Text,Image,TouchableOpacity,SafeAreaView} from 'react-native'

export default function Sign(){
    return(
        <SafeAreaView style={{alignItems:"center",marginTop:"25%"}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>CÀI ĐẶT CHỮ KÝ</Text>
            <Text style={{fontWeight:"bold",marginTop:"2%"}}>Tạo chữ ký bằng cách ký lên đây</Text>
            <Image style={{width:400,height:400,marginTop:"15%"}} source={require("../../../../../assets/sign.png")}/>

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{backgroundColor:"#E8ECF4",paddingVertical:"3%",paddingHorizontal:"7%",borderRadius:18,right:"85%",top:-55}}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>Xác nhận</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#E8ECF4",paddingVertical:"3%",paddingHorizontal:"12%",borderRadius:18,left:"165%",top:-55}}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}