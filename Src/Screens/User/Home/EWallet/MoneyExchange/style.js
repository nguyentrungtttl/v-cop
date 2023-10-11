import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"white",
        flex:1
    },
    box:{
        backgroundColor:"white",
        elevation: 5,
        shadowColor:"#4D5DFA4D",
        borderWidth:1,
        borderColor:"#4D5DFA4D",
        borderRadius:16,
        padding:"5%",
        paddingVertical:"6%",
        paddingHorizontal:"20%",
        marginTop:"20%"
    },
    blueBox:{
        backgroundColor:"#F0F8FF",
        padding:"5%",
        borderRadius:8,
        right:"30%"
    },
    bluerBtn:{
        backgroundColor:"#556A92",
        padding:"5%",
        paddingHorizontal:"7%",
        borderRadius:8,
        left:"30%"
    },
    black:{
        color:"black",
        fontWeight:"bold",
        fontSize:17
    },

    white:{
        color:"white",
        fontWeight:"bold",
        fontSize:17
    }
})

export {styles}