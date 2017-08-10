/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {


  function createTweetElement(obj){
      //We create a new article html using the input object and add it to index.html file
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


      //better way of doing this function is like below:(copying the whole html code inside spans and entering data from js in ${})
      /*return `
      <div class="fridge">
        <h2>${fridge.model}</h2>
        <p>${fridge.brand}</p>
      </div>`;*/
    }
  //to show the old tweets
  loadTweets();

  //this function gets an array and for each object in that array creates an element.
  function renderTweets(arr){
    arr.forEach(function(item){
      var newtweet = createTweetElement(item);
      $(".whole-container").prepend(newtweet);
    });
  }




  function loadTweets(){
    $.getJSON( "/tweets", renderTweets);//gets the data from the form in the form of JSON and runs the renderTweets function on it.
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
          //when post request is done, we clear the form and load all the tweets by using loadTweets function.
          form.reset();//emptying the form to make it ready to show the whole updated database
          loadTweets();//showing the whole updated database. this function is gonna call renderTweets and that itself is gonna call createTweetElement.
        });
      }
  });

   //here we are creating the event on the compose button to slidetoggle the new tweet container
  $("#nav-bar button").on('click',function(){
        $(".new-tweet").slideToggle();
  })



});


