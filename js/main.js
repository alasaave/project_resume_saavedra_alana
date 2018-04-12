$(document).ready(function () {
    //Custom jQuery: highlight sections on mouseover
    $('section').mouseover(function () {
        $(this).css({'background-color': 'dodgerblue', 'color': 'white'});
    });
    $('section').mouseout(function () {
        $(this).css({'background-color': 'white', 'color': 'black'});
    });

    //jQuery plugin: animate image on click
    $('#btn').animateClick();

});
