$(document).ready(function(){
  var count = 0;
  $(".new-tweet textarea").on("keydown", function(event){
    if(event.keyCode == 8){
      if(count > 0){
        count--;
      }
    } else {
      count++;
    }
    $(".new-tweet .counter").text(count);
  });

});


