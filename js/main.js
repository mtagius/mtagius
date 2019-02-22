$(document).ready(function() {
    var graduationDate = new Date('May 11, 2019');
    if(Date.now() > graduationDate) {
        $("#graduationDate").html("graduated");
        $("#graduationTense").html("ed");
    }
});