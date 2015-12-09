if(Meteor.isClient){

    Template.carousel_page.rendered = function () {
        $("#myCarousel").carousel();
    }

}



Main  = function main() {

       $(window).scroll(function() {
           if ($(".topbar").offset().top > 50) {
               $(".topbar").addClass("bgwhite padd-10");
               document.getElementById('logo').setAttribute("src","/logo_blue.png");
           } else {
               $(".topbar").removeClass("bgwhite padd-10");
               document.getElementById('logo').setAttribute("src","/logo_white.png");
           }
       });



}
Main();

