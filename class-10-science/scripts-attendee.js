import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var attendeeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnA2VTFFdXNUX0djaTFNU3J1QWF2USIsInRwYyI6IkNsYXNzIDEwIFNjaWVuY2UiLCJyb2xlX3R5cGUiOjAsInVzZXJfaWRlbnRpdHkiOiIiLCJzZXNzaW9uX2tleSI6InVuaXF1ZV9zZXNzaW9uX2lkZW50aWZpZXIiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3MzgwMjU1NjksImV4cCI6MTczODE5ODM2OX0.6VkDI9a_HVvY2JB8RfsM4A5rq6wHdfw1z9ALG3MqvOQ';  // This will be replaced by the updateTokens.js script


function joinSession() {
    var userName = document.getElementById('username').value || 'Student'; // Default to 'Student' if no username is entered
    var config = {
        videoSDKJWT: attendeeToken,
        sessionName: 'Class 10 Science',
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
