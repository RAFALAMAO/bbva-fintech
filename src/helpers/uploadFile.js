//Axios
import { axiosUploadFile } from "../config/axiosGeneral";

const getBase64 = (file) => {
    const data = new Promise((resolve) => {
      let baseURL = '';
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
    return data;
  };

export async function uploadFile(file, emailIn){
  const streamString = await getBase64(file);
  const partsStream = streamString.split(',');
  let email = emailIn;

  const toSend = {
      "email": email,
      "docto": {
        "name": 'Artículo.pdf',
        "type": file.type,
        "base64": partsStream[1]
      }
  }

  return await axiosUploadFile().post('/', toSend);
}
