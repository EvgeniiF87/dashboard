import { CONFIG_APP } from "../config";


export const cloudinarySaveImage = async(file: string) => {

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CONFIG_APP.CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(CONFIG_APP.CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    })
  
    const data = await response.json();
    
    return data.url
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}