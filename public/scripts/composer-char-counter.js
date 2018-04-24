$(document).ready(function(){
  $(".new-tweet textarea").on('keyup', function(){
    $(".counter").text($(this).val().length);
  });
});


