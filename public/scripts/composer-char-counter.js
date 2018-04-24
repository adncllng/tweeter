$(document).ready(function(){
// character counter
  $(".new-tweet textarea").on('keyup', function(){
    let chars = $(this).val().length;
    const counter = $(this).siblings(".counter");
    counter.text(chars);
    counter.css('color', chars > 140 ? 'red' : 'black');
  });
});
