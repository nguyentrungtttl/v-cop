import { TouchableOpacity, Image, View, Text,StyleSheet } from "react-native"

export default function SettingBtn({ title, src, onPress }){
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Image style={{width:50,height:50}} source={src} />
                <Text style={styles.text}>{title}</Text>
                <Image style={{marginLeft:"auto",marginTop:"4%",marginRight:"6%"}} source={require('../../../User/Account/components/right.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    btn:{
        flexDirection: "row",
        marginVertical:"3%",
        marginHorizontal:"5%",
        backgroundColor:"white",

    },
    text:{
        marginLeft:"5%",
        // fontFamily: "Roboto",
        fontSize: 14,

        textAlign: "left",
        color:"#1D3A70",
        marginTop:"3%"
      }

})