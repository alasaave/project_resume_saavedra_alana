$(document).ready(function () {
    //Custom jQuery: highlight sections on mouseover
    $('section').mouseover(function () {
        $(this).css({'background-color': 'dodgerblue', 'color': 'white'});
    });
    $('section').mouseout(function () {
        $(this).css({'background-color': 'white', 'color': 'black'});
    });

    //jQuery plugin: animate image on click
    $('img').animateClick({
        'color': 'gold',
        'animation': 'shoot',
        'size': 7
    });

    //jQuery plugin: moving letters on Name
    $('.ml9 .letters').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>'));
    });

    anime.timeline({loop: true})
        .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: function (el, i) {
                return 45 * (i + 1);
            }
        }).add({
            targets: '.ml9',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 3000
        });
});
