import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var attendeeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoibU41cktsSTNTLUNOZEIwTmxCSjFzZyIsInRwYyI6IkNsYXNzIDEyIEJpb2xvZ3kiLCJyb2xlX3R5cGUiOjAsInVzZXJfaWRlbnRpdHkiOiIiLCJzZXNzaW9uX2tleSI6InVuaXF1ZV9zZXNzaW9uX2lkZW50aWZpZXIiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3NTE2NzcyOTksImV4cCI6MTc1MTg1MDA5OX0.jn-oYDyOryA2ftOU9wBWe3KJcSjG0U6ABG6G9B_oz8M';  // This will be replaced by the updateTokens.js script


function joinSession() {
    var userName = document.getElementById('username').value || 'Student'; // Default to 'Student' if no username is entered
    var config = {
        videoSDKJWT: attendeeToken,
        sessionName: 'Class 12 Biology',
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
