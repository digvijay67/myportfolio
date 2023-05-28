
var firebaseConfig = {
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

// Add event listener for form submission
document.getElementById('myForm').addEventListener('submit', submitForm);

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Get form values
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('password').value;
  var email = document.getElementById('number').value;
  

  // Save the form data to Firebase
  database.ref('submissions').push({
    name: name,
    email: email,
    password:password,
    number:number
  }, function(error) {
    if (error) {
      console.log("Data could not be saved." + error);
    } else {
      console.log("Data saved successfully.");
      document.getElementById('myForm').reset(); // Clear form fields
    }
  });
}