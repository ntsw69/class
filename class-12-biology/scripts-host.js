import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoibU41cktsSTNTLUNOZEIwTmxCSjFzZyIsInRwYyI6IkNsYXNzIDEyIEJpb2xvZ3kiLCJyb2xlX3R5cGUiOjEsInVzZXJfaWRlbnRpdHkiOiJUZWFjaGVyIiwic2Vzc2lvbl9rZXkiOiJ1bmlxdWVfc2Vzc2lvbl9pZGVudGlmaWVyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzM5NTgwNzg0LCJleHAiOjE3Mzk3NTM1ODR9.1198aLPj-OWsd4LEAQWMoaFDhAjm59jLzg4uOI5Cfh8',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 12 Biology',
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
