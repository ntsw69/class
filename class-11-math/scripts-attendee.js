import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var attendeeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5Ijoiam1iYnRVeDhUZTY0Nm5DUHpnZV9qQSIsInRwYyI6IkNsYXNzIDExIE1hdGgiLCJyb2xlX3R5cGUiOjAsInVzZXJfaWRlbnRpdHkiOiIiLCJzZXNzaW9uX2tleSI6InVuaXF1ZV9zZXNzaW9uX2lkZW50aWZpZXIiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3NDQyNDY2OTYsImV4cCI6MTc0NDQxOTQ5Nn0.PLdOCdI0OtaZGyZzfP0u0GQz6RtNTtmBg4zICyr929k';  // This will be replaced by the updateTokens.js script


function joinSession() {
    var userName = document.getElementById('username').value || 'Student'; // Default to 'Student' if no username is entered
    var config = {
        videoSDKJWT: attendeeToken,
        sessionName: 'Class 11 Math',
        userName: userName,
        sessionPasscode: 'NTSW@#1216',
        features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
    };

    uitoolkit.joinSession(sessionContainer, config);

    uitoolkit.onSessionClosed(sessionClosed);
}

var sessionClosed = (() => {
    console.log('session closed');
    uitoolkit.closeSession(sessionContainer);

    document.getElementById('join-flow').style.display = 'block';
});

// Add event listener to button
document.getElementById('join-button').addEventListener('click', () => {
    document.getElementById('join-flow').style.display = 'none';
    joinSession();
});
