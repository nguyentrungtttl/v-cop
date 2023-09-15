import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import recognitionPlate from '../../../../API/recognition';
import { styles } from './styles';

export default function ViolatorContact() {
  const [imageUri, setImageUri] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);

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
      const plateData = await recognitionPlate(imageUri);
      setPlateNumber(plateData.results[0].plate);
      console.log('License Plate Data:', plateData);
    } catch (error) {
      console.error('Error recognizing plate:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Button title="Take Photo" onPress={handleTakePhoto} />

        {imageUri ? (
          <View>
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
            <Button title="Recognize Plate" onPress={handleRecognizePlate} />
            <View>
              <Text style={{ fontSize: 30 }}>{plateNumber}</Text>
            </View>
          </View>
        ) : (
          <View>
            <Text>No photo taken</Text>
          </View>
        )}
      </View>
    </View>
  );
}