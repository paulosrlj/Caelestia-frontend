// import axios from 'axios';
import {
  ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase';

async function uploadImageCallBack(file) {
  const imageRef = ref(storage, `image/${file.name + v4()}`);

  const response = await uploadBytes(imageRef, file);

  const uploadedImageRef = ref(storage, response.ref.fullPath);

  const url = await getDownloadURL(uploadedImageRef);
  return { data: { link: url } };
}

export default uploadImageCallBack;
