import uitoolkit from 'https://class.noteswift.in/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnhEWWdyTVNSMUdSOHVqdDBTekppZyIsInRwYyI6IkNsYXNzIDEwIEVjb25vbWljcyIsInJvbGVfdHlwZSI6MSwidXNlcl9pZGVudGl0eSI6IlRlYWNoZXIiLCJzZXNzaW9uX2tleSI6InVuaXF1ZV9zZXNzaW9uX2lkZW50aWZpZXIiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3NDA3OTA3NzgsImV4cCI6MTc0MDk2MzU3OH0.cloa9fsKTNSEL5-q9jERoZ75QY-XmcBU726h9qLFmM4',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 10 Economics',
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
