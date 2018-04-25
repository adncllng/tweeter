$(document).ready(function(){

  function loadTweets() {
    $.ajax({
      url:'/tweets',
      method:'GET',
      success: function(tweets) {
        renderTweets(tweets);
        console.log('success: ', tweets);
      }
    });
  }

  loadTweets();

$( ".new-tweet form" ).on( "submit", function( event ) {
  event.preventDefault();
    $.ajax({
      url: `/tweets`,
      method: 'POST',
      data:$( this ).serialize(),
      success: function (stuff) {
      loadTweets();
      }
    });
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


