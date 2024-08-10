
$(document).ready(function () {
    var timeout;

    // Show the div on click
    $(document).on('click', function () {
        $('.controlskit').show();

        // Reset timeout on click
        clearTimeout(timeout);

        // Hide the div after 5 seconds of inactivity
        timeout = setTimeout(function () {
            $('.controlskit').hide();
        }, 3000);
    });

    // Initially hide the div
    $('.controlskit').hide();

    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Get the 'name' parameter from the URL and set it as the value of the username input field
    var username = getUrlParameter('name');
    $('#username').val(username);

    // Enable the join button if the username field is not empty
    if ($('#username').val().trim() !== '') {
        $('#join-button').prop('disabled', false);
        // Automatically click the join button
        $('#join-button').click();
    }

    // Add event listener to the username input field
    $('#username').on('input', function () {
        if ($(this).val().trim() !== '') {
            $('#join-button').prop('disabled', false);
        } else {
            $('#join-button').prop('disabled', true);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const maxRetries = 20; // Maximum number of retries (20 seconds)
    let attempts = 0;

    const intervalId = setInterval(function () {
        const firstButton = document.querySelector('button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base');

        if (firstButton) {
            // Click the first button when it's found
            firstButton.click();
            console.log('First button clicked successfully!');

            // Stop checking for the first button
            clearInterval(intervalId);

            // Now look for the second button
            const secondButtonInterval = setInterval(function () {
                const secondButton = document.querySelector('button[aria-label="Mute"]');

                if (secondButton) {
                    // Click the second button when it's found
                    secondButton.click();
                    console.log('Second button (Mute) clicked successfully!');
                    clearInterval(secondButtonInterval);
                } else {
                    attempts++;
                    if (attempts >= maxRetries) {
                        console.log('Second button (Mute) not found after multiple attempts.');
                        clearInterval(secondButtonInterval);
                    }
                }
            }, 1000); // Check every second for the second button
        } else {
            attempts++;
            if (attempts >= maxRetries) {
                console.log('First button not found after multiple attempts.');
                clearInterval(intervalId);
            }
        }
    }, 1000); // Check every second for the first button
});