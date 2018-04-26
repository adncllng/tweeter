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
        data:$(this).serialize(),
        success: function (tweet) {
           $('#tweet-container').prepend(createTweetElement(tweet));
           $(".new-tweet textarea").val('');
           $(".new-tweet .counter").text(0)
           $(".new-tweet").slideToggle();
        }
      });
      }else {
        $(".new-tweet span").text("Too Many Characters!");
      }

  });

  function createTweetElement (tweetObject) {

    let $tweet = $("<article>").addClass('tweet');
    let $header = $("<header>").addClass("clearfix");
    let $content = $("<div>").addClass("content");
    let $footer = $("<footer>");

    $header.append($("<img>").attr('src',tweetObject.user.avatars.small));
    $header.append($("<h2>").text(tweetObject.user.name));
    $header.append($("<h3>").text(tweetObject.user.handle));
    $content.append($("<p>").text(tweetObject.content.text));
    $footer.append($("<span>").text(moment.unix(tweetObject.created_at/1000).fromNow()));
    $footer.append('<span class="icons"> <i class="fas fa-flag"> </i> <i class="fas fa-recycle"> </i> <i class="fas fa-heart"> </i> </span>');

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


$("#compose").on('click', function(event){
  $(".new-tweet").slideToggle();
})



})


