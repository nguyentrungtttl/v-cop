import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Bblack: {
        fontSize: 22,
        fontWeight:"bold"
    },
    black:{
        fontSize: 14,
        fontWeight:"bold"
    },
    leading:{
        top:"10%",
        flexDirection:"column",
        alignItems:"center"
    },
    container:{
        backgroundColor:"white",
        alignItems:"center",
        height: 800
    },
    textInput:{
        backgroundColor:"#F7F8F9",
        borderWidth: 1,
        borderColor:"#E8ECF4",
        borderRadius: 8,
        color:"black",
        textAlign:"left",
        paddingVertical: "3%",
        paddingRight: "30%",
        paddingLeft:"5%",
        marginTop:"5%"
    },
    btn:{
        backgroundColor:"#E8ECF4",
        borderRadius: 16,
        marginTop:"20%",
        padding: "2%",
        paddingHorizontal:"6%"
    }
})

export {styles}