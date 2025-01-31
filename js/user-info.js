// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBiVc598fJn7WmgGVivUvZyKRBNfrug75U",
  authDomain: "noteswift-login.firebaseapp.com",
  projectId: "noteswift-login",
  storageBucket: "noteswift-login.appspot.com",
  messagingSenderId: "227729152808",
  appId: "1:227729152808:web:445ffda231ae7baf8a4e1d",
  measurementId: "G-Y3GZ6HDWF4"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
var isLoggingOut = false; // Variable to track logout state



// Check if user is logged in
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    displayUserInfo(user); // Display user information
    fetchEnrolledCourses(user); // Fetch enrolled courses
  } else if (!isLoggingOut) {
    window.location.replace("https://app.noteswift.in/sign-in"); // Redirect to login page
  }
});

// Display user information
function displayUserInfo(user) {
  // Old IDs
  var fullNameElementOld = document.getElementById("full-name");
  var emailElementOld = document.getElementById("email");
  var userClassElementOld = document.getElementById("user-class");
  var loadingMessageElementOld = document.getElementById("loading-message");
  var studentAvatarOld = document.getElementById("studentAvatar");

  // New IDs
  var fullNameElementNew = document.getElementById("userFullName");
  var emailElementNew = document.getElementById("userEmail");
  var userClassElementNew = document.getElementById("classSpan");
  var loadingMessageElementNew = document.getElementById("userLoadingMessage");
  var studentAvatarNew = document.getElementById("userAvatar");

  // Fetch user data from the database
  var userRef = firebaseApp.database().ref('users/' + user.uid);
  userRef.once('value', snapshot => {
    var userData = snapshot.val();
    if (userData) {
      var fullName = userData.fullName;
      var email = user.email;
      var userClass = userData.class;
      var avatarUrl = userData.avatarUrl || "https://app.noteswift.in/images/student-avatar.png";

      // Hide loading messages
      if (loadingMessageElementOld) loadingMessageElementOld.style.display = "none";
      if (loadingMessageElementNew) loadingMessageElementNew.style.display = "none";

      // Update HTML elements with user data
      if (fullNameElementOld) fullNameElementOld.textContent = fullName;
      if (fullNameElementNew) fullNameElementNew.textContent = fullName;

      if (emailElementOld) emailElementOld.textContent = email;
      if (emailElementNew) emailElementNew.textContent = email;

      if (userClassElementOld) userClassElementOld.textContent = userClass;
      if (userClassElementNew) userClassElementNew.textContent = userClass;

      if (studentAvatarOld) studentAvatarOld.src = avatarUrl;
      if (studentAvatarNew) studentAvatarNew.src = avatarUrl;
    } else {
      console.error('User data not found');
    }
  });

  // Display loading messages initially
  if (loadingMessageElementOld) loadingMessageElementOld.style.display = "block";
  if (loadingMessageElementNew) loadingMessageElementNew.style.display = "block";
}

// Upload profile picture
function uploadProfilePicture(event) {
  var user = firebaseApp.auth().currentUser;
  var loadingOverlayOld = document.getElementById("loading-overlay");
  var loadingOverlayNew = document.getElementById("loadingOverlay");
  var studentAvatarOld = document.getElementById("studentAvatar");
  var studentAvatarNew = document.getElementById("userAvatar");

  if (user && event.target.files[0]) {
    var file = event.target.files[0];
    var storageRef = firebaseApp.storage().ref('profile_pictures/' + user.uid + '/' + file.name);

    // Show loading overlay
    if (loadingOverlayOld) loadingOverlayOld.style.display = "flex";
    if (loadingOverlayNew) loadingOverlayNew.style.display = "flex";

    // Upload file to Firebase Storage
    var uploadTask = storageRef.put(file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // Optional: Monitor upload progress
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        console.error("Error uploading file:", error);
        if (loadingOverlayOld) loadingOverlayOld.style.display = "none";
        if (loadingOverlayNew) loadingOverlayNew.style.display = "none";
      },
      () => {
        // Once uploaded, get the download URL
        uploadTask.snapshot.ref.getDownloadURL()
          .then(downloadURL => {
            console.log('File available at', downloadURL);

            // Update the user's avatar URL in the database
            var userRef = firebaseApp.database().ref('users/' + user.uid);
            userRef.update({ avatarUrl: downloadURL })
              .then(() => {
                // Hide loading overlay
                if (loadingOverlayOld) loadingOverlayOld.style.display = "none";
                if (loadingOverlayNew) loadingOverlayNew.style.display = "none";

                // Update profile picture
                if (studentAvatarOld) studentAvatarOld.src = downloadURL;
                if (studentAvatarNew) studentAvatarNew.src = downloadURL;

                console.log("Profile picture updated successfully!");
              })
              .catch(error => {
                console.error("Error updating user avatar URL:", error);
                if (loadingOverlayOld) loadingOverlayOld.style.display = "none";
                if (loadingOverlayNew) loadingOverlayNew.style.display = "none";
              });
          })
          .catch(error => {
            console.error("Error getting download URL:", error);
            if (loadingOverlayOld) loadingOverlayOld.style.display = "none";
            if (loadingOverlayNew) loadingOverlayNew.style.display = "none";
          });
      }
    );
  } else {
    console.error("No file selected or user not authenticated.");
  }
}

// Logout function
function logout() {
  // Create the confirmation pop-up
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('logout-popup-container');

  // Create the pop-up content
  const popupContent = document.createElement('div');
  popupContent.classList.add('logout-popup-content');

  // Close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('logout-close');
  closeButton.innerHTML = '&times;';

  // Image
  const img = document.createElement('img');
  img.classList.add('logout-img');
  img.src = 'https://img.freepik.com/free-vector/hand-drawn-resignation-illustration_23-2150360139.jpg?semt=ais_hybrid';
  img.alt = 'logout-img';

  // Text
  const text = document.createElement('p');
  text.classList.add('logoutp');
  text.innerText = 'Are you sure, you want to Sign out? Please confirm your action.';

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('logout-buttons');

  // Confirm button
  const confirmButton = document.createElement('button');
  confirmButton.classList.add('logout-confirm');
  confirmButton.innerText = 'Yes';

  // Cancel button
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('logout-cancel');
  cancelButton.innerText = 'No';

  // Append elements to the popup
  popupContainer.appendChild(popupContent);
  popupContent.appendChild(closeButton);
  popupContent.appendChild(img);
  popupContent.appendChild(text);
  buttonsDiv.appendChild(confirmButton);
  buttonsDiv.appendChild(cancelButton);
  popupContent.appendChild(buttonsDiv);
  document.body.appendChild(popupContainer);

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });

  // Close the popup when the cancel button is clicked
  cancelButton.addEventListener('click', () => {
    popupContainer.remove();
  });

  // Perform sign out if the confirm button is clicked
  confirmButton.addEventListener('click', () => {
    isLoggingOut = true; // Set the state to indicate logout is happening
    firebaseApp.auth().signOut().then(() => {
      window.location.replace("https://app.noteswift.in/sign-in"); // Redirect to the login page after sign out
    }).catch(error => {
      console.error('Error signing out: ', error);
    });
    popupContainer.remove();
  });
}

// Update greeting card dynamically with user info
function updateGreetingCard(user) {
  var greetingUserNameElement = document.querySelector(".greeting-text span");
  var greetingAvatarElement = document.getElementById("hiimg");

  // Determine the current time of day
  var currentHour = new Date().getHours();

  if (user) {
    // Fetch user data from Firebase Database
    var userRef = firebaseApp.database().ref('users/' + user.uid);
    userRef.once('value', snapshot => {
      var userData = snapshot.val();
      if (userData) {
        var fullName = userData.fullName || "User";
        var firstName = fullName.split(" ")[0]; // Extract the first name
        var avatarUrl = userData.avatarUrl || "https://app.noteswift.in/images/student-avatar.png";

        // Update greeting card with user data
        greetingUserNameElement.innerHTML = `Hi, <strong>${firstName}</strong>`; // "Hi" is normal, first name is bold
        greetingAvatarElement.src = avatarUrl;
      } else {
        console.error("User data not found for greeting card.");
        greetingUserNameElement.innerHTML = "Hi, <strong>User</strong>"; // Default greeting with "Hi" and bold name
        greetingAvatarElement.src = "https://app.noteswift.in/images/student-avatar.png";
      }
    });
  } else {
    // Fallback to default values
    greetingUserNameElement.innerHTML = "Hi, <strong>User</strong>"; // Default greeting with "Hi" and bold name
    greetingAvatarElement.src = "https://app.noteswift.in/images/student-avatar.png";
  }
}

// Call updateGreetingCard when user logs in
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    updateGreetingCard(user);
  }
});


// Call updateGreetingCard when user logs in
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    updateGreetingCard(user);
  }
});


// Call updateGreetingCard when user logs in
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    updateGreetingCard(user);
  }
});



const sidebarButton = document.getElementById('sidebarButton');
let startX = 0;

// Detect touch start
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Detect touch move
document.addEventListener('touchmove', (e) => {
  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  // Trigger click if swipe starts near the left edge and is significant enough
  if (startX < 200 && diffX > 50) { // Adjusted startX threshold
    sidebarButton.click();
  }
});



