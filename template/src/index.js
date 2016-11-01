$.ready(function(error) {
    if (error) {
        console.log('error', error);
        return;
    }

    $('#led-1').turnOn();
});
