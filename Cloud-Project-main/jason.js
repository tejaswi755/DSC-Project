const auth = firebase.auth();


function login(){
  var userEmail = document.getElementById("user_name").value
    var userpass =  document.getElementById("pass_word").value

    firebase.auth().signInWithEmailAndPassword(userEmail, userpass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      });




}

function register(){
   var email = document.getElementById("reg_user_name").value
   var password =  document.getElementById("reg_pass_word").value

   firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       // Signed in
       var user = userCredential.user;
       // ...
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       // ..
       window.alert("Error: " + errorMessage);
     });
     var db = firebase.firestore();
 db.collection("users").doc( email).set({
   name: document.getElementById('first_name').value,
   last: document.getElementById('last_name').value,
   regno: document.getElementById('reg_user_name').value

})
.then((docRef) => {
   console.log("Document written with ID: ");
})
.catch((error) => {
   console.error("Error adding document: ", error);
});
   }
