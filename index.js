$(document).ready(function() {
    $("#mtaButton").click(function(){
    var status = $("#mtaText").val();
    });
});
$.getJSON(
    "https://ajar-target.gomix.me/stops", 
    function(response) {
        console.log(Object.keys(response));
        var stops = Object.keys(response)
        $("#mtaSpace").append(stops + "</br>");
});