
function hideLoader() {

    // $('.loader').addClass("hide");
    $('.loader').fadeOut("slow");

}
function disp() {

    $('.loader').addClass("disp");
}
    $(window).on("load",function(){
        disp();
    })

// setTimeout(disp, 2 * 1000);
// $(window).on('load', function () {

//     $(window).scrollTop(0);
// });





$(function () {
    $(document).scroll(function () {
        var $nav = $(".dark");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 200);
    });
});
// $('.container').isotope({
//     itemSelector: '.portfolio-item',
//     layoutMode:"masonry",
//     percentPosition: true,
//     masonry: {
//         columnWidth: 1,
//         fitWidth: true,
//     }
// })

// $('.portfolio-item').isotope({
//     itemSelector: '.item',
//     percentPosition: true,
//     layoutMode:"masonry",
//     percentPosition: true,
//     masonry: {
//         columnWidth: 1,
//         fitWidth: true,
//     }
// });
// $('.portfolio-menu ul li').click(function () {
//     $('.portfolio-menu ul li').removeClass('active');
//     $(this).addClass('active');

//     var selector = $(this).attr('data-filter');
//     $('.portfolio-item').isotope({
//         filter: selector
//     });
//     return false;
// });
// $(document).ready(function () {
//     $("#cl").trigger('click');
//     var popup_btn = $('.popup-btn');
//     popup_btn.magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         }
//     });
// });
