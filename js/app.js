
document.addEventListener("DOMContentLoaded", function(){
    let slideIndex = 0;
    let factIndex = 0;
    slideshow();
    factsshow();

    function slideshow() {
        let i;
        let x = document.getElementsByClassName("slider");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1
        }
        x[slideIndex-1].style.display = "block";
        setTimeout(slideshow, 10000);
    }

    function factsshow() {
        let y;
        let z = document.getElementsByClassName("fact");
        for (y = 0; y < z.length; y++) {
            z[y].style.display = "none";
        }
        factIndex++;
        if (factIndex > z.length) {
            factIndex = 1
        }
        z[factIndex-1].style.display = "inline-block";
        setTimeout(factsshow, 10000);
    }

    // function displayTime (){
    // const currentDate =  new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1;
    // const day = currentDate.getDate();
    // const hour = currentDate.getHours();
    // const minute = currentDate.getMinutes();
    // document.getElementById("date").innerText = day + "/" + month + "/" + year + " " + hour + ':' + minute;
    // }
    // setInterval(displayTime, 1000);

    /*animate.css*/

    jQuery(document).ready(function() {
        jQuery('.slider').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });

        jQuery('.fact').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInDown',
            offset: 100
        });

        jQuery('#services').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });

        jQuery('img').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated jackInTheBox',
            offset: 100
        });

        jQuery('.wobble').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });
    });


    /*jquery scroll navbar*/
    $(document).ready(function (){
        $(".mainNav").click(function (){
            $('html, body').animate({
                scrollTop: '0'
            }, 1000);
        });

        $(".pricingNav").click(function (){
            $('html, body').animate({
                scrollTop: '800px'
            }, 1000);
        });

        $(".galleryNav").click(function (){
            $('html, body').animate({
                scrollTop: '2100px'
            }, 1000);
        });

        $(".aboutNav").click(function (){
            $('html, body').animate({
                scrollTop: '2850px'
            }, 1000);
        });

        $(".contactNav").click(function (){
            $('html, body').animate({
                scrollTop: '3300px'
            }, 1000);
        });


    });
    /*changing li style while scrolling (not by clicking buttons)*/
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll < 800) {
            $(".mainNav").addClass("current");
        } else {
            $(".mainNav").removeClass("current");
        }
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 800 && scroll < 2100) {
            $(".pricingNav").addClass("current");
        } else {
            $(".pricingNav").removeClass("current");
        }
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 2100 && scroll < 2850) {
            $(".galleryNav").addClass("current");
        } else {
            $(".galleryNav").removeClass("current");
        }
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 2850 && scroll < 3300) {
            $(".aboutNav").addClass("current");
        } else {
            $(".aboutNav").removeClass("current");
        }
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 3300) {
            $(".contactNav").addClass("current");
        } else {
            $(".contactNav").removeClass("current");
        }
    });

});

