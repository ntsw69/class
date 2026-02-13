import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var attendeeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnA2VTFFdXNUX0djaTFNU3J1QWF2USIsInRwYyI6IkNsYXNzIDEyIEVjb25vbWljcyIsInJvbGVfdHlwZSI6MCwidXNlcl9pZGVudGl0eSI6IiIsInNlc3Npb25fa2V5IjoidW5pcXVlX3Nlc3Npb25faWRlbnRpZmllciIsInZlcnNpb24iOjEsImlhdCI6MTc3MDk0NjA0NCwiZXhwIjoxNzcxMTE4ODQ0fQ.w1zGCf8gGw_TAayEnhAAkL4lr3Kyx4mdH5sI7dhfzAI';  // This will be replaced by the updateTokens.js script


function joinSession() {
    var userName = document.getElementById('username').value || 'Student'; // Default to 'Student' if no username is entered
    var config = {
        videoSDKJWT: attendeeToken,
        sessionName: 'Class 12 Economics',
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
