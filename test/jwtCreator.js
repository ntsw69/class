const jwt = require('jsonwebtoken');

const ZOOM_SDK_KEY = "mN5rKlI3S-CNdB0NlBJ1sg";
const ZOOM_SDK_SECRET = "hXO7e3UyDrnkKasTVspI4zNMeVV5FCWywKJi";

function createJWT(roleType, userName) {
  const payload = {
    app_key: ZOOM_SDK_KEY,
    tpc: 'Second Class',  // sessionName
    role_type: roleType, // role type (0 for attendee, 1 for host)
    user_identity: userName, // userName
    session_key: 'unique_session_identifier', // unique session identifier
    version: 1
  };

  const options = {
    algorithm: 'HS256',
    expiresIn: '2d'
  };

  return jwt.sign(payload, ZOOM_SDK_SECRET, options);
}

// Generate token for host (Teacher)
const hostToken = createJWT(1, 'Teacher');
console.log("Host Token: ", hostToken);

// Generate token for attendee (without username)
const attendeeToken = createJWT(0, '');
console.log("Attendee Token: ", attendeeToken);
