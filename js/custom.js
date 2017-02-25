var url = "http://www.filltext.com/?rows=30&fname={firstName}&lname={lastName}&pretty=true&words={lorem|15}";

$(document).ready(function() {
  $('.quote-button').on('click', function() {
    $.getJSON(url, function(data) {
      $('#placeQuote').html(data[0].words);
      $('.footer').html(data[0].fname + " " + data[0].lname);
    });
  });
});
