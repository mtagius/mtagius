$(document).ready(function() {
    var graduationDate = new Date('May 11, 2019');
    if(Date.now() < graduationDate) {
        $("#graduationDate").html("will graduate in May of 2019");
        $("#graduationTense").html("");
    }

    $('#dots').particleground({
        dotColor: '#000000',
        lineColor: '#000000',
        density: 70000,
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
        density: 8000,
        minSpeedX: .1,
        maxSpeedX: .5,
        minSpeedY: .1,
        maxSpeedY: .5,
        particleRadius: 15,
        parallaxMultiplier: 15,
        proximity: 100
    });
});