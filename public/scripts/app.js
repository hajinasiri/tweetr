
$(function() {


  function createTweetElement(obj){

      var $tweet = $("<article class='old-tweets'>");

      // header section
      var $header = $("<header>").appendTo($tweet);

      $("<img>").attr("src",obj.user.avatars.small).appendTo($header);
      $("<h2>" + obj.user.name + "</h2>").appendTo($header);
      $h4 = $("<h4>").text(obj.user.handle).appendTo($header);
      $tweet.append($header);
      var $par = $("<p>").text(obj.content.text).appendTo($tweet);
      $hr = $("<hr>");
      $tweet.append($hr);
      var $ftr = $("<footer>");
      var A = Number(obj["created_at"]);
      var d = new Date(A);
      var n = d.toDateString();
      var $spann = $("<span>").text(n).appendTo($ftr);
      var $divv = $("<div>").addClass("icons");
      $("<i>").addClass("fa fa-flag").attr("aria-hidden", "true").appendTo($divv);
      $("<i>").addClass("fa fa-heart").attr("aria-hidden", "true").appendTo($divv);

      var $i3 = $("<i>").addClass("fa fa-retweet").attr("aria-hidden", "true").appendTo($divv);
      $ftr.append($divv);
      $tweet.append($ftr);
      return $tweet;

    }
  loadTweets();

  //this function gets an array and for each object in that array creates an element.
  function renderTweets(arr){
    arr.forEach(function(item){
      var newtweet = createTweetElement(item);
      $(".whole-container").prepend(newtweet);
    });
  };

  function loadTweets(){
    $.getJSON( "/tweets", renderTweets);
  }

 $(".container .new-tweet .subform").on('submit', function(event){
    event.preventDefault();

    var form = this;
    var inputValue = $(this).find('textarea').val();
    //chcking if the text is empty or null
    if(!inputValue){
      alert("Your tweet must be a non-empty text ");
    }else if(inputValue.length > 140){
      alert("Your tweet must be less than 140 character");
    }else{
      //we are sending post request to the server and sending the serialized form data as the data in post request
      $.ajax({
        url: '/tweets', //post request url
        method : 'post',
        data: $(form).serialize() //converting the form content to an object and sending it as a data
      }).done(function(){
        form.reset();
        loadTweets();
      });
    }
  });
  $("#nav-bar button").on('click',function(){
        $(".new-tweet").slideToggle();
  })
});


