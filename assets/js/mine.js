// JavaScript Document
$(document).ready(function () {
    "use strict";
    $(window).resize(function () {
        headerSpacing();
    });
    $("#headerHolder").css("display", "none");
    var progress = setInterval(function () {
        var $bar = $("#bar"),
            p = 0;
        if ($bar.width() >= 100) {
            clearInterval(progress);
            pageLoaded();
        } else {
            p = parseInt($bar.width());
            $bar.text(p + "%");
            $bar.width($bar.width() + 100);
        }
    }, 1);
    $("#headerHolder").load("includes/header.html");
    $("#quote").load("./includes/Request-Quote.php");
    $("#awards").load("./includes/awards.php");
    $("#footerHolder").load("./includes/footer.html", function () {
        var footQuote = [
            "We learned a long time ago that sometimes it's what you DON'T say that's even more important and really persuades the viewer to take action.",
            "Awesome videos that get RESULTS are captivating, specific and tell YOUR story.  Not ANY story...YOUR story!",
            "Our videos keep brains constantly guessing and so they HAVE TO WATCH your video longer.",
            "We believe your story is different than your competitor's, don't you?",
            "We know all companies are not alike, so we work with you to create the best solution for your company.",
            "The creative process is not found in a template or premade images.  And a questionnaire Asks the wrong questions. Conversations and collaboration are needed to get the best Video.",
            "Our Videos are producing results that are astounding business owners.  They keep commming back for more.",
            "When can we show you how our process can transform your video strategy, engage your leads, and turn them into loyal clients.",
            "We are not your average studio, we don't do questionnaires or templates, we make YOUR video and fair prices, not Ad Agency prices.", "We have made tens of thousands of Videos for our very happy customers.",
            "We are continuing to work with great clients from around the North America and the world and we are having a great time brainstorming, collaborating and creating.",
            "Who knows what the best message is for your video?  I certainly don't know right now.  How could I? How could anyone? Until we really talk, ask questions, and listen to your answers.",
            "When you call us, we do the work for you.",
            "Really smart business owners know that it usually takes an outside person with experience in persuasion to know what should be left out of your video.",
            "Adding a Video to your website will boost sales and increase leads.", "We pride ourselves on our high quality and successful Spokespeople and professionally created videos.",
            "Our videos are all shot and built here at our headquarters to maintain quality and precision. We do not outsource our filming to any other studios. It is all filmed HERE."

        ];
        var theQuote = footQuote[Math.floor(Math.random() * footQuote.length)];
        $("#changeQuote").text(theQuote);
        var d = new Date();
        var year = d.getFullYear();
        $("#year").text(year);
        //----countdown
        var endDate, male, female;
        $.ajax({
            type: "GET",
            url: "http://www.websitetalkingheads.com/featuredactor/featuredactor.xml",
            dataType: "xml",
            success: function (xml) {
                male = xml.getElementsByTagName('male')[0].innerHTML;
                female = xml.getElementsByTagName('female')[0].innerHTML;
                endDate = xml.getElementsByTagName('newdate')[0].innerHTML;
                var saleEnd = endDate.split(' ');
                var m = saleEnd[0];
                var months = ["January", "February", "March", "April", "May", "June", "July",  "August", "September", "October", "November", "December"];
                var month = (months.indexOf(m) + 1); 
                var day = saleEnd[1].slice(0,-2);
                var launchDay = new Date();
                launchDay.setMonth(month,day);
                console.log(month);
                $("#timer").countdown({
                    until: launchDay
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    function pageLoaded() {
        $(".loader").fadeOut(1000, function () {
            $("#headerHolder").css("display", "block");
            headerSpacing();
            var pageName = getAbsolutePath();
            switch (pageName) {
                case "home":
                    $(".navbar-mine #home").addClass("active");
                    break;
                case "specials":
                    $(".navbar-mine .navbar-mine #specials").addClass("active");
                    break;
                case "spokespeople":
                    $(".navbar-mine #spokespeople").addClass("active");
                    console.log("hit");
                    break;
                case "Custom_Video_Presentation":
                    $(".navbar-mine #presentations").addClass("active");
                    break;
                case "Website_Spokesperson":
                    $(".navbar-mine #web").addClass("active");
                    break;
                case "specials":
                    $(".navbar-mine #specials").addClass("active");
                    break;
                default:
                    console.log("default");
            }
        });
    }

    function headerSpacing() {
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            var headerWidth = $(".nav-container").outerWidth();
            var leftWidth = $(".navbar-brand").outerWidth();
            var centerWidth = $(".navbar-mine").outerWidth();
            var rightWidth = $(".navbar-right").outerWidth();
            if (windowWidth > 991) {
                var pad = (headerWidth - leftWidth - centerWidth - rightWidth) / 2;
                $(".navbar-mine").css("padding-left", pad);
            } else {
                $(".navbar-brand").css("padding-left", (windowWidth - leftWidth) / 2 + "px");
                $(".navbar-mine").css("padding-left", (windowWidth - centerWidth) / 2 + "px");
                $(".navbar-right").css("padding-right", (windowWidth - rightWidth) / 2 + "px");
            }
        }
    }
});

$.fn.onAvailable = function (fn) {
    "use strict";
    var sel = this.selector;
    var timer;
    if (this.length > 0) {
        fn.call(this);
    } else {
        timer = setInterval(function () {
            if ($(sel).length > 0) {
                fn.call($(sel));
                clearInterval(timer);
            }
        }, 500);
    }
    console.log(this.length);
};
///set height of div inside .holder to all be the same
(function ($) {
    "use strict";
    $.fn.padHeight = function () {
        var base = this[0];
        var holder = this.closest(".holder");
        var bHeight = $(base).outerHeight();
        var hHeight = $(holder).outerHeight();
        var pad = (hHeight - bHeight) / 2;
        $(base).css("margin-top", pad + "px");
    };
    $.fn.setHeight = function () {
        var maxHeight = 100;
        $(this).each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $(this).height(maxHeight);
    };
}(jQuery));

function getAbsolutePath() {
    "use strict";
    var loc = window.location;
    var path = loc.pathname.replace("/", "");
    var pathName = path.replace("/", "");
    if (!pathName.trim()) {
        pathName = "home";
    }
    return pathName;
}
