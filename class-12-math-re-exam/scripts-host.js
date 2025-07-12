import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnA2VTFFdXNUX0djaTFNU3J1QWF2USIsInRwYyI6IkNsYXNzIDEyIE1hdGggUmVleGFtIiwicm9sZV90eXBlIjoxLCJ1c2VyX2lkZW50aXR5IjoiVGVhY2hlciIsInNlc3Npb25fa2V5IjoidW5pcXVlX3Nlc3Npb25faWRlbnRpZmllciIsInZlcnNpb24iOjEsImlhdCI6MTc1MjI4MjQ4MSwiZXhwIjoxNzUyNDU1MjgxfQ.8nFcyzP_s2TT-K8jPFFCQzrwoWYXHQEiK0ibrLoSfPU',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 12 Math Reexam',
    userName: 'Teacher',
    sessionPasscode: 'NTSW@#1216',
    features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
};


function joinSession() {
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
