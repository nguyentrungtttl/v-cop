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
            'Authorization': `Token 2a97f6582486e5b724707dd0007222b12d01badc`,
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