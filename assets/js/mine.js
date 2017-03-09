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

(function ($) {
	'use strict';
	$.fn.padHeight = function () {
		var base = this[0];
		var holder = this.closest('.holder');
		var bHeight = $(base).outerHeight();
		var hHeight = $(holder).outerHeight();
		var pad = (hHeight - bHeight) / 2;
		$(base).css('margin-top', pad + 'px');
	};
	$.fn.setHeight = function () {
		var maxHeight = 100;
console.log(this);
		$(this).each(function () {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$(this).height(maxHeight);
	};
}(jQuery));