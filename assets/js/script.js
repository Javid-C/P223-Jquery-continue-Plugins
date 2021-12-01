$(document).ready(function() {
    // $(".title-icon").click(function() {
    //     let next = $(this).next();
    //     let icon = $(this).children(".icon");
    //     $(".article").not(next).slideUp();
    //     $(this).next().slideToggle();
    //     $(".icon").not(icon).removeClass("active")
    //     icon.toggleClass("active")
    // })

    // console.log($(".box .section").attr("data-id", "notimportant"));
    let section = $(".box .section");
    section.removeProp("data-id")
        // console.log(section.prop("data-id"));


    section.addClass("test")


    // $("input").keypress(function() {
    //     console.log($(this).val());
    // })

    // let style = {
    //     color: "white",
    //     backgroundColor: "blue",
    //     fontSize: "30px"
    // }

    // section.css(style)

    console.log();

    $(window).scroll(function() {
            console.log(window.scrollY);
        })
        // $('.parallax-window').parallax({ imageSrc: 'https://www.robin-noorda.com/uploads/1/6/8/3/16830688/810-6715-50_orig.jpg' });

})