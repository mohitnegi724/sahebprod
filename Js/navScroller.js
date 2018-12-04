var addAnimationTime = 0;
var removeAnimationTime = 0;
var WhatsOnTheMenuAddAnimationTime = 0;
var WhatsOnTheMenuRemoveAnimationTime = 0;

var animationTime = 1000; // in seconds

removeAniHost = false;
addAniHost = false;
removeAniMenu = false;
addAniMenu = false;

function getTimestamp(){
    return (new Date()).getTime();
}

function addAnimation() {
    var time = getTimestamp();
    if (Math.abs(time - addAnimationTime) > animationTime && addAniHost) {
        addAnimationTime = time;
        // $(".MeetYourHostsContainer").addClass("AnimatedMeetYourHostsContainer");
        $(".abt_1").addClass("AnimatedAbt_1");
        $(".abt_2").addClass("AnimatedAbt_2");
        $(".abt_3").addClass("AnimatedAbt_3");
        $(".abt_4").addClass("AnimatedAbt_4");
        $(".abt_5").addClass("AnimatedAbt_5");
        $(".abt_6").addClass("AnimatedAbt_6");
        $(".abt_7").addClass("AnimatedAbt_7");
    }
}
function removeAnimation() {
    var time = getTimestamp();
    if (Math.abs(time - removeAnimationTime) > animationTime && removeAniHost) {
        removeAnimationTime = time;
        // $(".MeetYourHostsContainer").removeClass("AnimatedMeetYourHostsContainer");
        $(".abt_1").removeClass("AnimatedAbt_1");
        $(".abt_2").removeClass("AnimatedAbt_2");
        $(".abt_3").removeClass("AnimatedAbt_3");
        $(".abt_4").removeClass("AnimatedAbt_4");
        $(".abt_5").removeClass("AnimatedAbt_5");
        $(".abt_6").removeClass("AnimatedAbt_6");
        $(".abt_7").removeClass("AnimatedAbt_7");
    }
}
function WhatsOnTheMenuAddAnimation() {
    var time = getTimestamp();
    if (Math.abs(time - WhatsOnTheMenuAddAnimationTime) > animationTime && addAniMenu) {
        WhatsOnTheMenuAddAnimationTime = time;
        $(".MenuImages01").addClass("MenuImages01Animation");
        $(".MenuImages02").addClass("MenuImages02Animation");
        $(".MenuContent").addClass("AnimatedWhatsOnTheMenuContainer");
        $(".WhatsOnTheMenuContainerUnorderedList").addClass("AnimatedWhatsOnTheMenuContainerUnorderedList");
    }
}
function WhatsOnTheMenuRemoveAnimation() {
    var time = getTimestamp();
    if (Math.abs(time - WhatsOnTheMenuRemoveAnimationTime) > animationTime && removeAniMenu) {
        WhatsOnTheMenuRemoveAnimationTime = time;
        $(".MenuImages01").removeClass("MenuImages01Animation");
        $(".MenuImages02").removeClass("MenuImages02Animation");
        $(".WhatsOnTheMenuContainerUnorderedList").removeClass("AnimatedWhatsOnTheMenuContainerUnorderedList");
        $(".MenuContent").removeClass("AnimatedWhatsOnTheMenuContainer");
    }
}

function removeAllEvents(){
    document.getElementById("section0").removeEventListener("wheel", addAnimation);
    document.getElementById("section1").removeEventListener("wheel", removeAnimation);
    document.getElementById("section1").removeEventListener("wheel", WhatsOnTheMenuAddAnimation);
    document.getElementById("section2").removeEventListener("wheel", addAnimation);
    document.getElementById("section2").removeEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
    document.getElementById("section3").removeEventListener("wheel", WhatsOnTheMenuAddAnimation);
    document.getElementById("section3").removeEventListener("wheel", removeAnimation);
    document.getElementById("section4").removeEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
    document.getElementById("section4").removeEventListener("wheel", removeAnimation);
    document.getElementById("section5").removeEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
    document.getElementById("section5").removeEventListener("wheel", removeAnimation);
}


$(window).on("load", function () {
    addAniHost = true;
    removeAllEvents();
    document.getElementById("section0").addEventListener("wheel", addAnimation);
    
    //Home
    $("#Home").click(function(){
        $('html, body').animate({
            scrollTop: $('#section0').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "rgba(64, 64, 64, 0.5)"
        });
        $("#Logo").css({
            "borderColor": "rgba(64, 64, 64, 0.5)"
        });
        removeAnimation();
        WhatsOnTheMenuRemoveAnimation();
    });
    //Hosts
    $("#Hosts").click(function(){
        document.getElementById("section0").addEventListener("wheel", addAnimation);
        $('html, body').animate({
            scrollTop: $('#section1').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#798452"
        });
        $("#Logo").css({
            "borderColor": "#798452"
        });
        addAnimation();
        WhatsOnTheMenuRemoveAnimation();
    });
    //Our Menu
    $("#Menu").click(function(){
        $('html, body').animate({
            scrollTop: $('#section2').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#a8b94d"
        });
        $("#Logo").css({
            "borderColor": "#a8b94d"
        });
        removeAnimation();
        WhatsOnTheMenuAddAnimation();
    });
    //Show Case
    $("#Showcase").click(function(){
        $('html, body').animate({
            scrollTop: $('#section3').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#000000"
        });
        $("#Logo").css({
            "borderColor": "#000000"
        });
    });
    //Our Clients
    $("#Clients").click(function(){
        $('html, body').animate({
            scrollTop: $('#section4').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#3ba3f8"
        });
        $("#Logo").css({
            "borderColor": "#3ba3f8"
        });
    });
    //Contact Us
    $("#Contact").click(function(){
        $('html, body').animate({
            scrollTop: $('#section5').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#3cb958"
        });
        $("#Logo").css({
            "borderColor": "#3cb958"
        });
   });
});


$(window).scroll(function () {
    removeAniHost = true;
    removeAniMenu = true;

    var scrollTop = $(window).scrollTop();
    var Home = $('#section0').offset().top;
    var Hosts = $('#section1').offset().top;
    var OurMenu = $('#section2').offset().top;
    var Showcase = $('#section3').offset().top;
    var Clients = $('#section4').offset().top;
    var Contact = $('#section5').offset().top;
    if (scrollTop===Home){
        addAniHost = true;
        removeAllEvents();
        document.getElementById("section0").addEventListener("wheel", addAnimation);
        $(".Header").css({
            "backgroundColor": "rgba(64, 64, 64, 0.5)"
        });
        $("#Logo").css({
            "borderColor": "rgba(64, 64, 64, 0.5)"
        });
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Hosts){
        addAniMenu = true;
        removeAniHost = false;
        removeAllEvents();
        document.getElementById("section1").addEventListener("wheel", removeAnimation);
        document.getElementById("section1").addEventListener("wheel", WhatsOnTheMenuAddAnimation);
         $(".Header").css({
             "backgroundColor": "#798452"
         });
         $("#Logo").css({
             "borderColor": "#798452"
         });
        $("#Hosts").addClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===OurMenu){
        addAniHost = true;
        removeAniMenu = false;
        removeAllEvents();
        document.getElementById("section2").addEventListener("wheel", addAnimation);
        document.getElementById("section2").addEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
        $(".Header").css({
            "backgroundColor": "#a8b94d"
        });
        $("#Logo").css({
            "borderColor": "#a8b94d"
        });
        $("#Hosts").removeClass("Hosts");
        $("#Menu").addClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Showcase){
        addAniMenu = true;
        removeAllEvents();
        document.getElementById("section3").addEventListener("wheel", WhatsOnTheMenuAddAnimation);
        document.getElementById("section3").addEventListener("wheel", removeAnimation);
        $(".Header").css({
            "backgroundColor": "#000000"
        });
        $("#Logo").css({
            "borderColor": "#000000"
        });
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").addClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Clients){
        removeAllEvents();
        document.getElementById("section4").addEventListener("wheel", removeAnimation);
        document.getElementById("section4").addEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
         $('html, body').animate({
             scrollTop: $('#section4').position().top
         }, 300);
         $(".Header").css({
             "backgroundColor": "#3ba3f8"
         });
         $("#Logo").css({
             "borderColor": "#3ba3f8"
         });
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").addClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if (scrollTop===Contact){
        $('html, body').animate({
            scrollTop: $('#section5').position().top
        }, 300);
        $(".Header").css({
            "backgroundColor": "#3cb958"
        });
        $("#Logo").css({
            "borderColor": "#3cb958"
        });
        removeAllEvents();
        document.getElementById("section5").addEventListener("wheel", removeAnimation);
        document.getElementById("section5").addEventListener("wheel", WhatsOnTheMenuRemoveAnimation);
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").addClass("Contact");
    }
    else if (scrollTop > Home && scrollTop<=Hosts) {
        $(".Header").css({
            "backgroundColor": "#798452"
        });
        $("#Logo").css({
            "borderColor": "#798452"
        });
    }
    else if(scrollTop>Hosts && scrollTop<=OurMenu){
        $(".Header").css({
            "backgroundColor": "#a8b94d"
        });
        $("#Logo").css({
            "borderColor": "#a8b94d"
        });
    }
    else if(scrollTop>OurMenu && scrollTop<=Showcase){
        $(".Header").css({
            "backgroundColor": "#000000"
        });
        $("#Logo").css({
            "borderColor": "#000000"
        });
    }
    else if(scrollTop>Showcase){
        $(".Header").css({
            "backgroundColor": "#3ba3f8"
        });
        $("#Logo").css({
            "borderColor": "#3ba3f8"
        });
    }
});
