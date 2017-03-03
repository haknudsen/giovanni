// JavaScript Document
var currentDate = (new Date);
var month = currentDate.getMonth() + 3;
var year = currentDate.getFullYear();
$(document).ready(function () {
    "use strict";
    $("#year").text(year);

});
var m = currentDate.getMonth();
var launchDay = new Date(2017, month + 2, 7);
$('#timer').countdown({
    until: launchDay
});
