import uitoolkit from './@zoom/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoibU41cktsSTNTLUNOZEIwTmxCSjFzZyIsInRwYyI6IkNsYXNzIiwicm9sZV90eXBlIjowLCJ1c2VyX2lkZW50aXR5IjoiTm90ZVN3aWZ0Iiwic2Vzc2lvbl9rZXkiOiJ1bmlxdWVfc2Vzc2lvbl9pZGVudGlmaWVyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzIxMTQ1NzYyLCJleHAiOjE3MjEzMTg1NjJ9.qzB5Lelz5Dts_-QQ3rtg4vm5rkoF29InCv4Okl4VobQ',  // Replace with your actual JWT token
    sessionName: 'Class',
    userName: 'NoteSwift',
    sessionPasscode: 'secure123',
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
