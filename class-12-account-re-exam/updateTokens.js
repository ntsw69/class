const fs = require('fs');
const path = require('path');

// Path to the tokens file
const tokensPath = path.join(__dirname, 'tokens.json');

// Path to your JavaScript files
const hostFilePath = path.join(__dirname, 'scripts-host.js'); // Update with your actual file name
const attendeeFilePath = path.join(__dirname, 'scripts-attendee.js'); // Update with your actual file name

// Read the tokens from the tokens.json file
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// Read the host JavaScript file and replace the token
let hostFileContent = fs.readFileSync(hostFilePath, 'utf8');
hostFileContent = hostFileContent.replace(/videoSDKJWT: '.*'/, `videoSDKJWT: '${tokens.hostToken}'`);
fs.writeFileSync(hostFilePath, hostFileContent, 'utf8');

// Read the attendee JavaScript file and replace the token
let attendeeFileContent = fs.readFileSync(attendeeFilePath, 'utf8');
attendeeFileContent = attendeeFileContent.replace(/var attendeeToken = '.*';/, `var attendeeToken = '${tokens.attendeeToken}';`);
fs.writeFileSync(attendeeFilePath, attendeeFileContent, 'utf8');

console.log('Tokens updated successfully');



