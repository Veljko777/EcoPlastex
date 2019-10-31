
  $(document).ready(function(){
    $('.autoplay').slick({
        dots:true,
        arrows:false,
        speed:1000,
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:2000
      });
  });

  $(document).ready(function(){
    $('.autoplay1').slick({
        dots:false,
        arrows:false,
        speed:2000,
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:4000
      });
  });

$(document).ready(function(){
  $('.gallery').slick({
    centerMode: true,
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed:1500,
    speed:1000,
    dots:true,
    responsive: [
      
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
      
    ]
  });
});
 
