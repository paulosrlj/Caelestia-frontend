import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBiu2ndAk8NEzgjsJ9DWa_LNtfhmvAArM',
  authDomain: 'caelestia-bc841.firebaseapp.com',
  projectId: 'caelestia-bc841',
  storageBucket: 'caelestia-bc841.appspot.com',
  messagingSenderId: '260255026270',
  appId: '1:260255026270:web:60062d5d16dd5bff0378cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
