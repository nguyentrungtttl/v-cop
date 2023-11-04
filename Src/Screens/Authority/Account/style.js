import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    avatar:{
        width: 100,
        height: 90,
        top: "5%",
        left:"38%",
        borderRadius:50
    },
    userInfo:{
        top: "6%",
        alignItems:"center",
    },
    text:{
        // fontFamily: "Roboto",
        fontSize: 20,

        // letterSpacing: "0.30000001192092896",
        textAlign: "center",
        color:"#1D3A70"
    },
    phoneNum:{
        // fontFamily: "Roboto",
        fontSize: 12,

        // letterSpacing: "0.30000001192092896",
        textAlign: "center",
        color:"#6B7280"
    },
    box:{
        borderTopWidth:1.5,
        borderTopColor:"#F3F4F6",
        marginBottom: "4%",
        marginHorizontal:"4%",
        top:"2%"
      }
})