$(document).ready(function() {
    var graduationDate = new Date('May 11, 2019');
    if(Date.now() < graduationDate) {
        $("#graduationDate").html("will graduate in May of 2019");
        $("#graduationTense").html("");
    }
});