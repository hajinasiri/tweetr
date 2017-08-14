$( document ).ready(function() {

  $(".new-tweet textarea").on('keyup', function() {
    var l = (this.value).length;
    /*changing counter color to red after 140 characters and back to black before that */
    if(140 < l){
      $(this).siblings('.counter').first().css('color', 'red');
    }else{
      $(this).siblings('.counter').first().css('color', 'black');
    }
    /*setting the remained number of character for the counter */
    $(this).siblings('.counter').first().text(140 - l);

  });

});

