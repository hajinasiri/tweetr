/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 //this part is for


input=
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
}


$(function() {


function createTweetElement(obj){
  var $tweet = $("<article>");
 $tweet.addClass("old-tweets");
  var $header = $("<header>");
  var image= $("<img>");

  image.attr("src",obj.user.avatars.small);
  $header.append(image);

  var $h2 = $("<h2>");
  $h2.text(obj.user.name);
  $header.append($h2);

  $h4 = $("<h4>");
  $h4.text(obj.user.handle);
  $header.append($h4);
  $tweet.append($header);


  var $par = $("<p>");
  $par.text(obj.content.text);
  $tweet.append($par);

  $hr = $("<hr>");
  $tweet.append($hr);

  var $ftr = $("<footer>");


  var $spann = $("<span>");

  var A = Number(obj["created_at"]);
  var d = new Date(A);
  var n = d.toDateString();
  console.log(n);

  $spann.text(n);


  $ftr.append($spann);



  var $divv = $("<div>");
  $divv.addClass("icons");

  var $i1 = $("<i>");
  $i1.addClass("fa fa-flag");
  $i1.attr("aria-hidden", "true");
  $divv.append($i1);

  var $i2 = $("<i>");
  $i2.addClass("fa fa-heart");
  $i2.attr("aria-hidden", "true");
  $divv.append($i2);

  var $i3 = $("<i>");
  $i3.addClass("fa fa-retweet");
  $i3.attr("aria-hidden", "true");
  $divv.append($i3);


  $ftr.append($divv);


  $tweet.append($ftr);



  return $tweet;
}

var tweetContainer = createTweetElement(input);

$(".whole-container").append(tweetContainer);

});

