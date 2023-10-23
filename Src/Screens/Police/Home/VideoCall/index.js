// import React, { Component } from 'react';
// import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
// import { APPID } from '../../../../../onlineCall';
// import { APPSIGN } from '../../../../../onlineCall';
// export default function VoiceCallPage({navigation}) {
//     const userName = "username"
//     const userID = 123456789
//     return (
//         <View style={styles.container}>
//             <ZegoUIKitPrebuiltCall
//                 appID={APPID}
//                 appSign={APPSIGN}
//                 userID={userID} // userID can be something like a phone number or the user id on your own user system. 
//                 userName={userName}
//                 callID={callID} // callID can be any unique string. 

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