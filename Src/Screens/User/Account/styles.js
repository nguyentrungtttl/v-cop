import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    avatar:{
        width: 100,
        height: 55,
        // borderRadius: "50%",
        flex: 0.24,
        top: "10%",
        left:"38%"
    },
    userInfo:{
        top: "11%",
        alignItems:"center",
    },
    text:{
        // fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 24,
        // letterSpacing: "0.30000001192092896",
        textAlign: "center",
        color:"#1D3A70"
    },
    phoneNum:{
        // fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
        // letterSpacing: "0.30000001192092896",
        textAlign: "center",
        color:"#6B7280"
    },
    box:{
        borderTopWidth:1.5,
        borderTopColor:"#F3F4F6",
        marginVertical: "2%",
        marginHorizontal:"4%",
        top:"2%"
      }
})