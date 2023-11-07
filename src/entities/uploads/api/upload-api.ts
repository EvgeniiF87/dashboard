import { CONFIG_APP } from "../../../shared";
import { DownLoadInput } from "../DTO/auth-dto";

// const url =  CONFIG_APP.API_UPLOADS

const download = async (payload: DownLoadInput): Promise<any> => {
  const formData = new FormData();
  formData.set('file', payload.file)

  // const response = await fetch(`${url}/uploads`, {
  //   method: "POST",
  //   body: formData,
  // })

  // return await response.json()
  return new Promise((resolve) => {
    resolve('/uploads/admin.avatar.jpg')
  })
}

const uploadPreview = async (preview: File): Promise<{ url: string | null }> => {
  const formData = new FormData()
  formData.append('preview', preview)

  try { 
    const pathUpload = '/upload/preview';
  
    const response = await fetch(`${CONFIG_APP.API_UPLOADS}${pathUpload}`, {
      method: 'POST',
      body: formData,
    })
    
    if (!response.ok) {
      return { url: null }
    }
    
    const { url } = await response.json()

    const formattedPath = `${CONFIG_APP.API_UPLOADS}${url}`
  
    return { url: formattedPath }
  } catch (error) {
    throw new Error(`${error}`)
  }
}


export const UploadsApi = {
  download,
  uploadPreview,
}

