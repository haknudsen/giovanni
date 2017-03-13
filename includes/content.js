// JavaScript Document
$(document).ready(function () {
	"use strict";
	$.ajax({
		url: "includes/content.xml",
		dataType: "xml",
		success: parse,
		error: function () {
			alert("Error: Something went wrong");
		}
	});

	function parse(document) {
		var x = 0;
		var paragraph = Array();
		var title = Array();
		$(document).find('content').each(function () {
			title[x] = $(this).find('title').text();
			paragraph[x] = $(this).find('paragraph').text();
			x++;
		});
		var random = Math.floor(Math.random() * paragraph.length);
		$(".panel-title:first").text(title[random]);
		$(".panel-body:first").text( paragraph[random] );
	}
});
