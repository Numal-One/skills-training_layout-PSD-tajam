function sliderMenuToggle () {
    $('.burger-menu').on('click', function(){
    $('.nav-mobile--itm').toggleClass('invisible');
    });
}

function videoPlayerToggle () {
    $('.watch-our-story_play-icon').on('click', function(){
        $('.watch-our-story_play-icon').addClass('invisible');
        $('.watch-our-story_play-discription').addClass('invisible');
        $('.video_ourstory').removeClass('invisible');
        
    });
}

$(document).ready(function(){
    $('.quote-author-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
       
      });
	
    sliderMenuToggle();
    videoPlayerToggle ()
});