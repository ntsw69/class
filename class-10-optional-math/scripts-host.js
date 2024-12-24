import uitoolkit from 'https://class-noteswift.netlify.app/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnhEWWdyTVNSMUdSOHVqdDBTekppZyIsInRwYyI6IkNsYXNzIDEwIE9wdGlvbmFsIE1hdGgiLCJyb2xlX3R5cGUiOjEsInVzZXJfaWRlbnRpdHkiOiJUZWFjaGVyIiwic2Vzc2lvbl9rZXkiOiJ1bmlxdWVfc2Vzc2lvbl9pZGVudGlmaWVyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzM1MDAxNjMyLCJleHAiOjE3MzUxNzQ0MzJ9.yjPsSQzcnblcJ0nW6Hj6fiZcipF723xlg9Nb1NNnP1A',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 10 Optional Math',
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
