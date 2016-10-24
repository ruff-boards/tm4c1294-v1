$.ready(function(error) {
    if (error) {
        console.log('error', error);
        return;
    }

    console.log('hello world');

    $('#led-1').turnOn();

    $('#button-1').on('push', function () {
        console.log('push');
    });

    $('#button-1').on('release', function () {
        console.log('release');
    });
});
