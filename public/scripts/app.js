$(document).ready(function(){

  function loadTweets() {
    $.ajax({
      url:'/tweets',
      method:'GET',
      success: function(tweets) {
        renderTweets(tweets);
      }
    });
  }

  loadTweets();

  $( ".new-tweet form" ).on( "submit", function( event ) {
    event.preventDefault();
    let length = $(this).find('textarea').val().length;
    if(length === 0){
       $(".new-tweet span").text("Can't post empty tweet!").css("color","red");
    } else if ($(this).text() <= 140){
      $.ajax({
        url: `/tweets`,
        method: 'POST',
        data:$( this ).serialize(),
        success: function (stuff) {
           loadTweets();
        }
      });
      }else {
        $(".new-tweet span").text("Too Many Characters!")
      }

  });

  function createTweetElement (tweetObject) {

    let $tweet = $("<article>").addClass('tweet');
    let $header = $("<header>").addClass("clearfix");
    let $content = $("<div>").addClass("content");
    let $footer = $("<footer>");



    $header.append(`<img src="${tweetObject.user.avatars.small}">`);
    $header.append(`<h2>${tweetObject.user.name}</h2>`);
    $header.append(`<h3>${tweetObject.user.handle}</h3>`);
    $content.append(`<p>${tweetObject.content.text}</p>`);
    $footer.append(`<span>${tweetObject.created_at}</span>`);

    $footer.append('<span class="icons"><i class="fas fa-flag"></i><i class="fas fa-recycle"></i><i class="fas fa-heart"></i></span>');

    $tweet.append($header);
    $tweet.append($content);
    $tweet.append($footer);

    return $tweet;
  }

function renderTweets(tweets) {
   $('#tweet-container').empty();
  tweets.forEach(tweet => {
    $('#tweet-container').prepend(createTweetElement(tweet));
  })

}




})


