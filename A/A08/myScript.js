/**
 * Created by Kaiewa on 9/27/2015.
 */
$(document).ready(function() {
    $(".panel-body").hide();
    $(".up").hide();
    $(".panel-heading").click(function() {
        $(this).next(".panel-body").slideToggle();
        $(this).find(".up, .down").toggle();
    });
});

function Numlinks() {
    event.preventDefault();
    var urlName = document.getElementById("urlName").value;
    console.log(urlName);

    $('#webpage').hide();
    $("#webpage").load(urlName, function() {
        var length = document.getElementsByTagName('a').length;
        document.getElementById("numLinks").innerHTML = length;
    });
    return false;
}