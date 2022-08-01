$(document).ready(function(){

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

