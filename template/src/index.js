$.ready(function(error) {
    if (error) {
        console.log('error', error);
        return;
    }

    var led = $('#led-1');
    var methods = ['turnOn', 'turnOff'];
    var ticks = 10;

    var interval = setInterval(function () {
        console.log('#', ticks);
        led[methods[ticks % 2]]();
        if (--ticks <= 0) {
            console.log('hello world');
            clearInterval(interval);
        }
    }, 500);
});
