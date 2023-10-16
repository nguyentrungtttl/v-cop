import { TouchableOpacity, Image, Text, StyleSheet,View } from "react-native";

export default function TaskBtn({onPress,source,title,title2}){
    return(
        <View>
            <TouchableOpacity style={style.button} onPress={onPress}>
                <Image style={style.source} source={source}/>
                <View style={{alignItems:"center"}}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.title}>{title2}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    button:{
        width: 250,
        height: 170,
        flexDirection:"row",
        backgroundColor:"#F0F8FF",
        borderRadius: 8,
        elevation: 5,
        overflow:"hidden",
        shadowOffset:{width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowColor: "black",
        shadowRadius: 3,
        alignItems:"center",
        justifyContent:"center"
    },
    source:{
        width: 100,
        height: 75,
        right:"22%"
    },
    title:{
        // fontFamily: "Inter",
        fontSize: 16,
        // fontWeight: 500,
        // lineHeight: 16,
        // letterSpacing: "0em",
        textAlign: "center",
    }
})