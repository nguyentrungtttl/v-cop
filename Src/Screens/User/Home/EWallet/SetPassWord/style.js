import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    Bblack: {
        fontSize: 22,
        fontWeight:"bold",
        marginTop:"18%",
        textAlign:"center"
    },
    container:{
        backgroundColor:"white",
        height: 800,
        alignItems:"center"
    },
    textInput:{
        backgroundColor:"#F7F8F9",
        borderWidth: 1,
        borderColor:"#E8ECF4",
        borderRadius: 8,
        color:"black",
        textAlign:"left",
        paddingVertical: "3%",
        paddingRight: "50%",
        paddingLeft:"5%",
        marginTop:"5%"
    },
    blueBtn:{
        backgroundColor:"#143072",
        paddingHorizontal:"34%",
        borderRadius: 8,
        paddingVertical:"4%",
        top:"52%"
    },
    white:{
        fontSize: 18,
        fontWeight:"bold",
        color:"white"
    }
})

export {styles}