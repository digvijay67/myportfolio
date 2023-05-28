// Your web app's Firebase configuration
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
import(getfirebase,email,fullname,password,number) from "https://digvijay-protfolio-default-rtdb.asia-southeast1.firebasedatabase.app/";

var database = firebase.database();
var ref = database.ref('users');
let email=document.getElementById("email")
let fullname=document.getElementById("fullname")
let password=document.getElementById("password")
let number=document.getElementById("number")
ref.on('value',gotData,errData);

function gotData(data)
{

  $("#userlist").empty();
  
  var users=data.val();
  var keys=Object.keys(users);
  // console.log(keys);

  for(var i=0;i<keys.length;i++)
  {
    var k=keys[i];
    var name=users[k].email;
    var email=users[k].fullname;
    var password=users[k].password;
    if(password)
    {
      password_msg=`<span class="badge badge-pill badge-success">Active</span>`;
    }
    else{
      password_msg=`<span class="badge badge-pill badge-danger">Deactivate</span>`;
    };
    
    $('#userlist').append(`
      <tr>
          <td>`+i+`</td>
          <td>`+email+`</td>
          <td>`+fullname+`</td>
          <td>`+password+`</td>
          <td>
              <input type="button" class="btn btn-info btn-sm" onclick="update_user('`+k+`',`+ status+`)" value="Chnage">
          </td>
      </tr>
    `); 
    
  }
}

function errData(err)
{
  
}

function update_user(email,fullname,password,number,status)
{
  
 
 if(status)
 {
  password=0;
 }
 else{
  password=1;
 }

  var rootRef = firebase.database().ref("users/"+email);
  var result=rootRef.update({password:password});
  console.log(result.key);
  
}
function addData()
{
  var email=$("#email").val();
  var fullname=$("#fullname").val();
  var password=$("#password").val();
  var number=$("#number").val();
  
  var users=0;
}
  var data={
    name: email,
    email: fullname,
    status: password
  }
  
  var result=ref.push(data);


  