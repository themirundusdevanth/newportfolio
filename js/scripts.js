$(document).read(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else{
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }   
    });
    
    $(".goTop").click(fucntion){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
        delagate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });
});

    