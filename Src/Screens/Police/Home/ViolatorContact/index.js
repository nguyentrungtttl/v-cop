import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text,SafeAreaView,TouchableOpacity,ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import recognitionPlate from '../../../../API/recognition';
import { styles } from './styles';
import { getInfoFromPlateNumber } from '../../../../API/getPersonalInfo';

export default function ViolatorContact({navigation}) {
  const [imageUri, setImageUri] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);
  const [ownerData, setOwnerData] = useState({})
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Camera permission not granted');
      }
    })();
  }, []);

  const handleTakePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    console.log('result.uri', result.assets[0].uri);
    setImageUri(result.assets[0].uri);
  };

  const handleRecognizePlate = async () => {
  
    try {
      console.log('recognizing');
      const plateData = await recognitionPlate(imageUri);
      setPlateNumber(plateData.results[0].plate);
      console.log('License Plate Data:', plateData);
      const handleSetOwnerData = async () =>{
        setOwnerData(await getInfoFromPlateNumber())
        console.log('owner data: ', ownerData);
      }
      handleSetOwnerData();
    } catch (error) {
      console.error('Error recognizing plate:', error);
    }
    navigation.navigate("ViolatorInf")

  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor:"white" }}>
      <View style={{ flex: 1 }}>

        <TouchableOpacity style={{alignItems:"center",marginTop:"10%"}} onPress={handleTakePhoto}>
          <Image style={{width:320,height:550}} source={require("../../../../assets/Camera.png")} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 30 }}>{plateNumber}</Text>
        </View>


        {imageUri ? (
          <View style={{alignItems:"center",marginTop:"10%"}}>
            <Image source={{ uri: imageUri }} style={{ width: 300, height: 200 }} />

            <View style={{marginTop:"5%"}}>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate("VPHC")}}>
              <Text>Tạo biên bản thủ công</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={handleRecognizePlate}>
              <Text>Tạo biên bản</Text>
            </TouchableOpacity>
            </View>
           
          </View>
        ) : (
          <View style={{alignItems:"center", marginTop:"2%"}}>
            <Text>No photo taken</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}