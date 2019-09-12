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
  centerPadding: '0px',
  slidesToShow: 5,
  infinite: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
      });
	
    sliderMenuToggle();
    videoPlayerToggle ()
});