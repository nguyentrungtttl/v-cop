// // App.js
// import React, { Component } from 'react';
// import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

// export default function VideoCall(props) {
//     return (
//         <View style={styles.container}>
//             <ZegoUIKitPrebuiltCall
//                 appID={104052679}
//                 appSign={"fe45fc3c43f54b5f1b9bfe2bddc6545b73f5f812b079ec468b8787ae3393539c"}
//                 userID={123} // userID can be something like a phone number or the user id on your own user system. 
//                 userName={"userName"}
//                 callID={"callID"} // callID can be any unique string. 

//                 config={{
//                     // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
//                     ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
//                     onOnlySelfInRoom: () => { navigation.navigate('FormHandle') },
//                     onHangUp: () => { navigation.navigate('FormHandle') },
//                 }}
//             />
//         </View>
//     );
// }

import {View,Text} from 'react-native'

export default function VideoCall(){
    return(
        <Text>VideoCall</Text>
    )
}