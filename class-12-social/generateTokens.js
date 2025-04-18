const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const ZOOM_SDK_KEY = "ogQhPdqdQyuHg89VPvu1Ig";
const ZOOM_SDK_SECRET = "v3U9BHJjyTeO3qQxb6VPlG6WFmJrHM3Ux4OG";

function createJWT(roleType, userName) {
  const payload = {
    app_key: ZOOM_SDK_KEY,
    tpc: 'Class 12 Social',  // sessionName
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

function generateAndSaveTokens() {
  const hostToken = createJWT(1, 'Teacher');
  const attendeeToken = createJWT(0, '');

  const tokens = {
    hostToken: hostToken,
    attendeeToken: attendeeToken
  };

  const tokensPath = path.join(__dirname, 'tokens.json');
  fs.writeFileSync(tokensPath, JSON.stringify(tokens, null, 2));
  console.log('Tokens updated successfully');
}

// Run immediately
generateAndSaveTokens();
