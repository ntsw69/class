import uitoolkit from 'https://class-noteswift.netlify.app/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5Ijoiam1iYnRVeDhUZTY0Nm5DUHpnZV9qQSIsInRwYyI6IkNsYXNzIDExIEJpb2xvZ3kiLCJyb2xlX3R5cGUiOjEsInVzZXJfaWRlbnRpdHkiOiJUZWFjaGVyIiwic2Vzc2lvbl9rZXkiOiJ1bmlxdWVfc2Vzc2lvbl9pZGVudGlmaWVyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzI2MzYxNzk3LCJleHAiOjE3MjY1MzQ1OTd9.G2Vypp3OK_gPjaJkgNnIrG-BPPBzmU9JRMH9q_eKkYs',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 11 Biology',
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
