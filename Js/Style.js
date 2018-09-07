$(window).on("load",function(){
    $("#Loader").css({
        "display": "none"
    });
    $("#FullBody").css({
        "display": "inline-block"
    });
})
$(document).ready(function(){
    // See More Button Event
    $("#SeeMore").click(function(){
        $(".MeetYourHostsContainer").css({
            "height":"400px",
            "overflow": "auto"
        });
         $("#SeeMore").css({"display":"none"});
    });
    //On Click Diplay Shown Of OpenVideoContainer And Open Video For 01
    $(".Video01Play").click(function () {
        $(".OpenVideoContainer").css({"display":"block"});
        $("#openedVideo").attr("src", function (i, origValue) {
            return "http://www.sahebproductions.com/video/v2.mp4";
        });
    });
    //On Click Diplay Shown Of OpenVideoContainer And Open Video For 02
    $(".Video02Play").click(function () {
        $(".OpenVideoContainer").css({
            "display": "block"
        });
        $("#openedVideo").attr("src", function (i, origValue) {
            return "http://www.sahebproductions.com/video/v1.mp4";
        });
    });
    // Closing Opened Video And Setting Attribute To Default One
    $("#closeVideo").click(function () {
        let videoDefaultLink = "http://www.sahebproductions.com/video/v1.mp4";
        $(".OpenVideoContainer").css({ "display": "none" });
         $("#openedVideo").attr("src", function (i, origValue) {
             return videoDefaultLink;
         });
    });
});
// Header Scroller
$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel({
      flankingItems: 3,
      movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });

    $('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel.reload(newOptions);
      return false;
    });

  });