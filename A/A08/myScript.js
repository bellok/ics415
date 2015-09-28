/**
 * Created by Kaiewa on 9/27/2015.
 */

// Assistance received from Aljon Preza and Spencer Allen
$(document).ready(function() {
    $(".panel-body").hide();
    $(".up").hide();
    $(".panel-heading").click(function() {
        $(this).next(".panel-body").slideToggle();
        $(this).find(".up, .down").toggle();
    });
});

// Solution derived from
// http://stackoverflow.com/questions/17983348/how-to-get-div-content-from-another-page-using-ajax
/**
 * NumLinks receives the data from the urlName provided upon
 * @returns {boolean}
 * @constructor
 */
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