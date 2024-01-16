window.onload = function() {
    function showAlert(message) {
        alert(message);
    }

    document.getElementById('navigator').addEventListener('click', function(event) {
        event.preventDefault();
        showAlert('Navigator: ' + navigator.appName + ', ' + navigator.product + ', ' + navigator.appVersion + ', ' + navigator.userAgent + ', ' + navigator.platform + ', ' + navigator.language);
    });

    document.getElementById('window').addEventListener('click', function(event) {
        event.preventDefault();
        showAlert('Window: ' + window.innerHeight + 'x' + window.innerWidth);
    });

    document.getElementById('screen').addEventListener('click', function(event) {
        event.preventDefault();
        showAlert('Screen: ' + screen.width + 'x' + screen.height + ', Available: ' + screen.availWidth + 'x' + screen.availHeight + ', Color Depth: ' + screen.colorDepth + ', Pixel Depth: ' + screen.pixelDepth);
    });

    document.getElementById('location').addEventListener('click', function(event) {
        event.preventDefault();
        showAlert('Location: ' + location.href + ', Hostname: ' + location.hostname + ', Pathname: ' + location.pathname + ', Protocol: ' + location.protocol);
    });

    document.getElementById('geolocation').addEventListener('click', function(event) {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                showAlert('Geolocation: Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude);
            }, function(error) {
                showAlert('Error: ' + error.message);
            });
        } else {
            showAlert('Geolocation is not supported by this browser.');
        }
    });

};
