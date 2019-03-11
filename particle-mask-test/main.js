

$(document).ready(function() {
    $('#dots').particleground({
        dotColor: '#000000',
        lineColor: '#000000',
        density: 80000,
        minSpeedX: .1,
        maxSpeedX: .5,
        minSpeedY: .1,
        maxSpeedY: .5,
        particleRadius: 200,
        parallaxMultiplier: 100,
        proximity: 10
    });

    $('#particles').particleground({
        dotColor: '#000000',
        lineColor: '#000000',
        density: 10000,
        minSpeedX: .1,
        maxSpeedX: .5,
        minSpeedY: .1,
        maxSpeedY: .5,
        particleRadius: 15,
        parallaxMultiplier: 15,
        proximity: 100
    });


});