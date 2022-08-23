import {
  ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../config/firebase';

async function uploadImageCallBack(file, uploadType) {
  let uploadUrl = '';

  if (uploadType === 'profileImage') {
    uploadUrl = `profile_image/${file.name + v4()}`;
  } else if (uploadType === 'praticalLessonImage') {
    uploadUrl = `pratical_lesson_image/${file.name + v4()}`;
  }
  const imageRef = ref(storage, uploadUrl);

  let url = '';
  try {
    const response = await uploadBytes(imageRef, file);

    const uploadedImageRef = ref(storage, response.ref.fullPath);

    url = await getDownloadURL(uploadedImageRef);
  } catch (error) {
    console.error(error);
  }

  return { data: { link: url } };
}

export default uploadImageCallBack;
