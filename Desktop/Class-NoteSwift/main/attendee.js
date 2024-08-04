
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
