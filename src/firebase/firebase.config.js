// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzokHEpMRJZPEGOkj9KvNTmQfMxwkeob0",
  authDomain: "dragon-news-client-28591.firebaseapp.com",
  projectId: "dragon-news-client-28591",
  storageBucket: "dragon-news-client-28591.appspot.com",
  messagingSenderId: "850871708609",
  appId: "1:850871708609:web:6c4f01ea67e76cfac01d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;