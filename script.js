$(document).ready(function() {
    function updateClock() {
        var now = moment();
        var time = now.format('D MMMM YYYY H:mm:ss A'); // Format the time as desired
        $('#clock').text(time); // Update the clock element with the formatted time

        var hour = now.hours();
        var greeting;

        if (hour >= 0 && hour < 5) {
            greeting = 'Good Night 🌙🌠😴';
        } else if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning 🌞😊☕️';
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Good Afternoon 🌤️🕒🍵';
        } else {
            greeting = 'Good Evening 🌃🌟🌠';
        }

        $('#greeting').text(greeting); // Update the greeting element with the appropriate greeting
    }

    // Update the clock and greeting every second
    setInterval(updateClock, 1000);
});
