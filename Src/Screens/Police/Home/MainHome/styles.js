import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    blueBgr:{
        backgroundColor:"#1D3A70",
        flex: 0.2,
        justifyContent:"space-between",
    },
    container:{
        backgroundColor:"white",
        top:"60%",
        alignItems:"center",
        borderRadius: 16,
        height: 700
    },
    whiteBig:{
        // fontFamily: "Open Sans",
        fontSize: 20,
        // fontWeight: 700,
        // lineHeight: 24,
        // letterSpacing: "-0.05em",
        color:"white"
    },
    whiteSmall:{
        // fontFamily: "Open Sans",
        fontSize: 10,
        // fontWeight: 700,
        // lineHeight: 15,
        // letterSpacing: "-0.05em",
        color:"white"
    },
    leading:{
        // fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "bold",
        // lineHeight: 21,
        // letterSpacing: "0.30000001192092896",
        marginVertical:"7%",
        color:"black"
    },
    month:{
        // fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        // lineHeight: 21,
        // letterSpacing: 0.30000001192092896,
        marginRight:"30%"
    },
    count:{
        // fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        // lineHeight: 21,
        // letterSpacing: 0.30000001192092896,
        left:"200%"
    }
})