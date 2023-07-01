
const firebaseConfig = {
  apiKey: "AIzaSyAsek2QnZbuZrkKiuOzNGEQKBieTegDIPk",
  authDomain: "digvijay-protfolio.firebaseapp.com",
  databaseURL: "https://digvijay-protfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "digvijay-protfolio",
  storageBucket: "digvijay-protfolio.appspot.com",
  messagingSenderId: "285314638822",
  appId: "1:285314638822:web:d27c2354f61a65270f6c27",
  measurementId: "G-ZXX926ED93"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database
    var database = firebase.database();

    // Function to store email in the database
    function storeEmail() {
      var email = document.getElementById('email').value; // Get the email from the input field

      // Store the email under a unique key
      var newEmailRef = database.ref('emails').push();
      newEmailRef.set({
        email: email
      })
        .then(function() {
          console.log("Email stored successfully!");
        })
        .catch(function(error) {
          console.error("Error storing email: ", error);
        });
    }







