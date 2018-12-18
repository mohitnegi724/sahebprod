function addAnimation() {
    $(".abt_1").addClass("AnimatedAbt_1");
    $(".abt_2").addClass("AnimatedAbt_2");
    $(".abt_3").addClass("AnimatedAbt_3");
    $(".abt_4").addClass("AnimatedAbt_4");
    $(".abt_5").addClass("AnimatedAbt_5");
    $(".abt_6").addClass("AnimatedAbt_6");
    $(".abt_7").addClass("AnimatedAbt_7");
}
function removeAnimation() {
    $(".abt_1").removeClass("AnimatedAbt_1");
    $(".abt_2").removeClass("AnimatedAbt_2");
    $(".abt_3").removeClass("AnimatedAbt_3");
    $(".abt_4").removeClass("AnimatedAbt_4");
    $(".abt_5").removeClass("AnimatedAbt_5");
    $(".abt_6").removeClass("AnimatedAbt_6");
    $(".abt_7").removeClass("AnimatedAbt_7");
}
function WhatsOnTheMenuAddAnimation(fast=false) {
    $(".MenuImages01").addClass("MenuImages01Animation");
    $(".MenuImages02").addClass("MenuImages02Animation");
    $(".MenuContent").addClass("AnimatedWhatsOnTheMenuContainer");
    $(".WhatsOnTheMenuContainerUnorderedList").addClass("AnimatedWhatsOnTheMenuContainerUnorderedList");
}
function WhatsOnTheMenuRemoveAnimation(fast=false) {
    $(".MenuImages01").removeClass("MenuImages01Animation");
    $(".MenuImages02").removeClass("MenuImages02Animation");
    $(".WhatsOnTheMenuContainerUnorderedList").removeClass("AnimatedWhatsOnTheMenuContainerUnorderedList");
    $(".MenuContent").removeClass("AnimatedWhatsOnTheMenuContainer");
}


$(window).on("load", function () {
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
        // removeAnimation();
        // WhatsOnTheMenuRemoveAnimation();
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
        // addAnimation();
        // WhatsOnTheMenuRemoveAnimation();
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
        // removeAnimation();
        // WhatsOnTheMenuAddAnimation();
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
        // removeAnimation();
        // WhatsOnTheMenuRemoveAnimation();
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
        // removeAnimation();
        // WhatsOnTheMenuRemoveAnimation();
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
        // removeAnimation();
        // WhatsOnTheMenuRemoveAnimation();
   });
});

var scrolledDown;
var previousScroll = 0;


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > previousScroll)
        scrolledDown = true;
    else
        scrolledDown = false;
    previousScroll = scrollTop;

    var Home = $('#section0').offset().top;
    var Hosts = $('#section1').offset().top;
    var OurMenu = $('#section2').offset().top;
    var Showcase = $('#section3').offset().top;
    var Clients = $('#section4').offset().top;
    var Contact = $('#section5').offset().top;

    if (scrollTop===Home){
        $(".Header").css({
            "backgroundColor": "rgba(64, 64, 64, 0.5)"
        });
        $("#Logo").css({
            "borderColor": "rgba(64, 64, 64, 0.5)"
        });
        $("#Home").addClass("Home");
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Hosts){
         $(".Header").css({
             "backgroundColor": "#798452"
         });
         $("#Logo").css({
             "borderColor": "#798452"
         });
         $("#Home").removeClass("Home");
        $("#Hosts").addClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===OurMenu){
        $(".Header").css({
            "backgroundColor": "#a8b94d"
        });
        $("#Logo").css({
            "borderColor": "#a8b94d"
        });
        $("#Home").removeClass("Home");
        $("#Hosts").removeClass("Hosts");
        $("#Menu").addClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Showcase){
        $(".Header").css({
            "backgroundColor": "#000000"
        });
        $("#Logo").css({
            "borderColor": "#000000"
        });
        $("#Home").removeClass("Home");
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").addClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").removeClass("Contact");
    }
    else if(scrollTop===Clients){
         $('html, body').animate({
             scrollTop: $('#section4').position().top
         }, 300);
         $(".Header").css({
             "backgroundColor": "#3ba3f8"
         });
         $("#Logo").css({
             "borderColor": "#3ba3f8"
         });
        $("#Home").removeClass("Home");
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
        $("#Home").removeClass("Home");
        $("#Hosts").removeClass("Hosts");
        $("#Menu").removeClass("Menu");
        $("#Showcase").removeClass("Showcase");
        $("#Clients").removeClass("Clients");
        $("#Contact").addClass("Contact");
    }
    else if (scrollTop > (Home + 5) && scrollTop<=(Hosts - 5)) {
        if (scrolledDown){
            addAnimation();
        } else {
            removeAnimation();
        }

        $(".Header").css({
            "backgroundColor": "#798452"
        });
        $("#Logo").css({
            "borderColor": "#798452"
        });
    }
    else if(scrollTop>(Hosts + 5) && scrollTop<=(OurMenu - 5)){
        if (scrolledDown){
            removeAnimation();
            WhatsOnTheMenuAddAnimation();
        } else {
            addAnimation();
            WhatsOnTheMenuRemoveAnimation();
        }

        $(".Header").css({
            "backgroundColor": "#a8b94d"
        });
        $("#Logo").css({
            "borderColor": "#a8b94d"
        });
    }
    else if(scrollTop>(OurMenu + 5) && scrollTop<=(Showcase - 5)){

        if (scrolledDown){
            WhatsOnTheMenuRemoveAnimation();
        } else {
            WhatsOnTheMenuAddAnimation();
        }

        $(".Header").css({
            "backgroundColor": "#000000"
        });
        $("#Logo").css({
            "borderColor": "#000000"
        });
    }
    else if(scrollTop>(Showcase + 5) && scrollTop<=(Clients - 5)){
        $(".Header").css({
            "backgroundColor": "#3ba3f8"
        });
        $("#Logo").css({
            "borderColor": "#3ba3f8"
        });
    }
});
