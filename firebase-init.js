// <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUkQcMA-1heFhvy1Agcr6MZn1XzintEAM",
    authDomain: "kuba-s-wallet.firebaseapp.com",
    projectId: "kuba-s-wallet",
    storageBucket: "kuba-s-wallet.appspot.com",
    messagingSenderId: "455240602854",
    appId: "1:455240602854:web:048d0e4e1b7f9fd9f25727",
    measurementId: "G-C8BQHX4G6G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//</script>
