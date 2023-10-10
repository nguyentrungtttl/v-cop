import { TouchableOpacity,View,Text,StyleSheet } from "react-native";

export default function Meeting({onPress,violator,date,Mtime,district,city}){
    return(
        <View style={styles.bgr}>
            <View>
                <Text style={styles.violator}>{violator.name}</Text>
                <View>
                <Text style={styles.location}>{district}</Text>
                <Text style={styles.location}>{city}</Text>
                </View>
            </View>

            <View style={styles.time}>
                <Text style={styles.lead}>Ngày giờ đặt lịch</Text>
                <Text style={styles.date}>Ngày {date}</Text>
                <Text style={styles.date}>{Mtime}</Text>
            </View>

        </View>
    )
}

const styles= StyleSheet.create({
    bgr:{
        width: 320,
        height: 75,
        backgroundColor:"#F7F8F9",
        borderRadius:8,
        borderWidth: 0.5,
        borderColor: "#55555540",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"5%"
    },
    violator:{
        // fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "bold",
        // lineHeight: 16,
        // letterSpacing: "0em",
        textAlign: "left",
        color:"#143072",
        top:"12%",
        left:"8%"
    },
    location:{
        // fontFamily: "Inter",
        fontSize: 12,
        // fontWeight: 400,
        // lineHeight: 16,
        // letterSpacing: "0em",
        left:"10%",
        top:"30%",
        color:"#8391A1"
    },
    time:{
        top:"2%",
    },
    lead:{
        // fontFamily: "Inter",
        fontSize: 12,
        // fontWeight: 400,
        // lineHeight: 16,
        // letterSpacing: "0em"
        color:"#090808AB"
    },
    date:{
        // fontFamily: "Inter",
        fontSize: 10,
        // fontWeight: 700,
        // lineHeight: 16,
        color:"#556A92",
        // letterSpacing: "0em"
    }
})