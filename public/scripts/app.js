const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function(){


$( ".new-tweet form" ).on( "submit", function( event ) {
  event.preventDefault();
    $.ajax({
      url: `/tweets`,
      method: 'POST',
      data:$( this ).serialize(),
      success: function (morePostsHtml) {
      console.log('Success: ', morePostsHtml);
      }
    });
  });


// $('.new-tweet input').on('click', function(event){
//   event.preventDefault();
//   $.ajax({
//     $.ajax({
//       url: '',
//       method: 'POST',
//       success: function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//       }
//     });
//   })

// })










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
  tweets.forEach(tweet => {
    $('#tweet-container').append(createTweetElement(tweet));
  })
}

renderTweets(data)

})


