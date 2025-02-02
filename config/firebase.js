var admin = require("firebase-admin");
var serviceAccount = require("../firebase-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;


// curl -X POST "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
// AIzaSyDN2xdZwQEJ9B08fsLMG8f-1wxtl-FPWng" \
// -H "Content-Type: application/json" \
// -d '{
//     "email": "akashprinceakash9986@gmail.com", 
//     "password": "Akash@2002", 
//     "returnSecureToken": true
// }'