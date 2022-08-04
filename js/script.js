$(document).ready(function(){

// navbar and stuff not weird fancy stuff from github lol

// navbar toggler btn
$('.navbar-toggler').click(function(){

  $('.navbar-toggler').toggleClass('change')

})
// sticky navbar
$(window).scroll(function(){

  let position = $(this).scrollTop();

  if(position>=718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  }
  else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }

})


//back to top btn
$(window).scroll(function(){

  let position = $(this).scrollTop();

  if(position>=718){
    $('#back-to-top').addClass('scroll-top');
  }
  else{
    $('#back-to-top').removeClass('scroll-top');
  }

})




//==================================================================
$("header, .info").ripples({
    dropRadius: 15,
    perturbance:0.01 ,
    
  });

  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
      enabled:true
    }
  });


});

