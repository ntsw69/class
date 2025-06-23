import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5Ijoiam1iYnRVeDhUZTY0Nm5DUHpnZV9qQSIsInRwYyI6IkNsYXNzIDExIE1hdGgiLCJyb2xlX3R5cGUiOjEsInVzZXJfaWRlbnRpdHkiOiJUZWFjaGVyIiwic2Vzc2lvbl9rZXkiOiJ1bmlxdWVfc2Vzc2lvbl9pZGVudGlmaWVyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzUwNjQwODUzLCJleHAiOjE3NTA4MTM2NTN9.kleswH1k21uP0nFyFjcLmsLk7I6FgAIS_0Cz_Qr_Rfo',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 11 Math',
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
