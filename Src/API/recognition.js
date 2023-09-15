import axios from 'axios';
const recognizePlate = async (imageUri) => {
    try {
      const formData = new FormData();
      formData.append('upload', {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
  
      const response = await axios.post(
        'https://api.platerecognizer.com/v1/plate-reader/',
        formData,
        {
          headers: {
            'Authorization': `Token 2df8a1a50b28f66254829a04d4594aeca1f055a6`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error recognizing plate:', error);
      throw error;
    }
  };

  export default recognizePlate;