$(document).ready(function(){
// displays number of characters. red when invalid
  $(".new-tweet textarea").on('keyup', function(){
    let chars = $(this).val().length;
    const counter = $(this).siblings(".counter");
    counter.text(chars);
// ?? should i add a class here to update color ... ??
    chars > 140 ? counter.css('color', 'red') : counter.css('color', 'black');
  });

});


