$(window).on("load", function () {
    setTimeout(() => {
        $(".preloader-wrap").css({ "display": "none" });
        $(".Header").css({
            "display": "inline-flex"
        });
    }, 2000);
    $("#FullBody").css({
        "display": "inline-block"
    });
    const sliderEl = document.querySelector('.slider-1');
    if (!sliderEl) {
        return;
    }
    const slider = new Swiper(sliderEl, {
        loop: false,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var width = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime / 5000) % 60) * 100;

    // Loadbar Animation
    $(".loadbar").animate({
        width: width + "%"
    }, time);

    // Loadbar Glow Animation
    $(".glow").animate({
        width: width + "%"
    }, time);

    // Percentage Increment Animation
    var PercentageID = $("#precent"),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function () {
        $('.preloader-wrap').fadeOut(500);
    }, time);
});
$(document).ready(function () {
    $(".Header").css({
        "display": "none"
    });

    $("#FullBody").css({
        "display": "none"
    });
    $(".selected").on("mouseover", function () {
        $('.showCaseNav .Thumb div').removeClass('activeThumb');
        $(this).addClass('activeThumb');

    });
    $(".selected").on("mouseleave", function () {
        $('.showCaseNav .Thumb div').removeClass('activeThumb');
    });
    // $("#SeeMore").click(function(){
    //     $(".hideText").toggleClass("showHideText");
    //     var status = document.getElementById("SeeMore");
    //     if(status.innerText == "See More"){
    //         status.innerText = "Show Less";
    //         $(".MeetYourHostsContainer").css("transform", "translate(-50%, -46%)");
    //     }
    //     else{
    //         status.innerText = "See More";
    //         $(".MeetYourHostsContainer").css("transform", "translate(-50%, -50%)");
    //     }
    // });


    // var reelHeight = document.getElementById('reel').height;
    // var rocketHeight = document.getElementById('rocket').height;
    // var newHeight = rocketHeight + "px";
    // var adjHeight = "5vw";
    // document.getElementById('HostText').style.bottom = 'calc(' + newHeight + ')';
    // document.getElementById('HostText').style.bottom = '5vw';

    // console.log(reelHeight);
    //On Click Diplay Shown Of OpenVideoContainer And Open Video For 01
    $(".Video01Play").click(function () {
        $(".OpenVideoContainer").css({ "display": "block" });
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
    $("#PlayNow").click(function () {
        $(".OpenVideoContainer").css({
            "display": "block",
            "z-index": 2000
        });
    });
    $("#PlayYoutubeNow").click(function () {
        $(".OpenYoutubeVideoContainer").css({
            "display": "block",
            "z-index": 2000
        });
    });
    // $(".PlayNow").click(function () {
    //     $(".OpenVideoContainer").css({
    //         "display": "block",
    //         "z-index": 2000
    //     });
    // });
    // Details On Clicks in Carousel

    // jupiter
    document.getElementById("jupiter").addEventListener("click", function () {
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/TVS-Jupiter.jpg";
        document.getElementById("VideoProductHeading").textContent = "TVS Jupiter Making";
        document.getElementById("details").textContent = `Is there any joy more pure than the joy of helping someone achieve their life’s dream. TVS Jupiter tried to
											capture the same overwhelming emotion through a digital film and we were just happy to add life to this noble
											cause. A digital film about spreading happiness and getting happiness in return is still, to date one of the
                                            projects that we are immensely proud of.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/nZAIH-gYWDY?version=3&enablejsapi=1");
    });



    //Panvilas
    document.getElementById("Panvilas").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Panvilas-Product-Film.jpg";
        document.getElementById("VideoProductHeading").textContent = "Panvilas";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/9ZVluN4ZHZA?version=3&enablejsapi=1");
    });
    //sbi
    document.getElementById("sbi").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/SBI-Prime-Card.jpg";
        document.getElementById("VideoProductHeading").textContent = "SBI Prime Card";
        document.getElementById("details").textContent = `it’s happiness like always but this time it’s in your face. enter the 3d animated world of coca cola and revel in the joy of spreading happiness all around.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/PfIZUAM5_N0?version=3&enablejsapi=1");
    });
    //gpi
    document.getElementById("gpi").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/GPI.jpg";
        document.getElementById("VideoProductHeading").textContent = "GPI";
        document.getElementById("details").textContent = `GPI`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/wASA2MVPDdI?version=3&enablejsapi=1");
    });
    //himaliyan
    document.getElementById("himaliyan").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Himayan-Orchard-Pure.jpg";
        document.getElementById("VideoProductHeading").textContent = "Himalayan Orchid Pure ";
        document.getElementById("details").textContent = ` A family gets into a Honda Amaze, what happens is sheer magic. See Chandni Chowk from the comfort of a fully loaded Sedan. `;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/jLgBkd44nMg?version=3&enablejsapi=1");
    });
    //GPI Stop Motion
    document.getElementById("gpi").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/GPI.jpg";
        document.getElementById("VideoProductHeading").textContent = "GPI Stop Motion";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/wASA2MVPDdI?version=3&enablejsapi=1");
    });
    //Coke City
    document.getElementById("coke").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Coke.jpg";
        document.getElementById("VideoProductHeading").textContent = "Coke City";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/c4VC25iKZvo?version=3&enablejsapi=1");
    });
    //Limca PW
    document.getElementById("limca").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Limca.jpg";
        document.getElementById("VideoProductHeading").textContent = "Limca PW";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/KWFhvPRo9IY?version=3&enablejsapi=1");
    });
    //horlicks
    document.getElementById("horlicks").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Horlicks.jpg";
        document.getElementById("VideoProductHeading").textContent = "Horlicks";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/58POD7YXJQQ?version=3&enablejsapi=1");
    });
    //Pepsi Ranbir Gabbar
    document.getElementById("pepsi").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Pepsi.jpg";
        document.getElementById("VideoProductHeading").textContent = "Pepsi Ranbir Gabbar";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/LDEuVngAMsE?version=3&enablejsapi=1");
    });
    //Lenovo Vibe Shot
    document.getElementById("lenovo").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Lenovo.jpg";
        document.getElementById("VideoProductHeading").textContent = "Lenovo Vibe Shot";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/S6iEdHzXY9s?version=3&enablejsapi=1");
    });
    //Skill India Logo
    document.getElementById("skiindia").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Skill-India.jpg";
        document.getElementById("VideoProductHeading").textContent = "Skill India Logo";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/1SIwwzpp85g?version=3&enablejsapi=1");
    });
    //World Food India TVC
    document.getElementById("wfitvc").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/WFI-TVC.jpg";
        document.getElementById("VideoProductHeading").textContent = "World Food India TVC";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/FUgCglgTubg?version=3&enablejsapi=1");
    });
    //UNICEF TVC
    document.getElementById("unicef").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Unicef-Tvc.jpg";
        document.getElementById("VideoProductHeading").textContent = "UNICEF TVC";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/1SIwwzpp85g?version=3&enablejsapi=1");
    });
    //Santoor
    document.getElementById("santoor").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Santoor.jpg";
        document.getElementById("VideoProductHeading").textContent = "SANTOOR 3D";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/1SIwwzpp85g?version=3&enablejsapi=1");
    });
    //PEPSI IPL
    document.getElementById("pepsiipl").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Pepsi-IPL-Pre-Roll.jpg";
        document.getElementById("VideoProductHeading").textContent = "PEPSI IPL";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/1SIwwzpp85g?version=3&enablejsapi=1");
    });
    //Limca LBR
    document.getElementById("limcalbr").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/LBR-2.jpg";
        document.getElementById("VideoProductHeading").textContent = "Limca LBR";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/swXflm_9s-U?version=3&enablejsapi=1");
    });
    //SBI FBB Card 
    document.getElementById("sbifbb").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/SBI-FBB-2.jpg";
        document.getElementById("VideoProductHeading").textContent = "SBI FBB Card";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/sxW9V2ButKw?version=3&enablejsapi=1");
    });
    //snapdeal
    document.getElementById("snapdeal").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Snapdeal.jpg";
        document.getElementById("VideoProductHeading").textContent = "Snapdeal Making";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/1SIwwzpp85g?version=3&enablejsapi=1");
    });
    //intex
    document.getElementById("intex").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/Intex.jpg";
        document.getElementById("VideoProductHeading").textContent = "Intex Irist";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/Vzbg8JbByMI?version=3&enablejsapi=1");
    });
    //sbidoctor
    document.getElementById("sbidoctor").addEventListener("click", function () {
        $("#ShowCaseDetailImage").removeAttr("src");
        document.getElementById("ShowCaseDetailImage").src = "./Media/work/Banners/SBI-FBB-2.jpg";
        document.getElementById("VideoProductHeading").textContent = "SBI DOCTORS CARD";
        document.getElementById("details").textContent = `Take the joy of sharing and spreading happiness, throw in some old world Sher-o- Shaayari, add an A List Celeb and you get a campaign that remains etched in your memory for ages. That is what happened when Snapdeal, Brand Ambassador - Aamir Khan, chose to tell a story. We were only too happy to direct and see the magic unfold.`;
        document.getElementById("openedYoutubeVideo").setAttribute("src", "https://www.youtube.com/embed/oOuanHfVc1E?version=3&enablejsapi=1");
    });

    // Closing Opened Video And Setting Attribute To Default One
    $("#closeVideo").click(function () {
        let videoDefaultLink = "http://www.sahebproductions.com/video/v1.mp4";
        $(".OpenVideoContainer").css({ "display": "none" });
        $("#openedYoutubeVideo").attr("src", function (i, origValue) {
            return videoDefaultLink;
        });
    });

    $("#closeYouTubeVideo").click(function () {
        $(".OpenYoutubeVideoContainer").css({
            "display": "none"
        });
        $('#openedYoutubeVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
});


