var url = "http://www.filltext.com/?rows=30&fname={firstName}&lname={lastName}&pretty=true&words={lorem|15}";

$(document).ready(function() {
    $.getJSON(url, function(data) {
        $('#placeQuote').html(data[0].words);
    });
    $('.quote-button').on('click', function() {
        $.getJSON(url, function(data) {
            $('#placeQuote').html(data[0].words);
            $('.footer').html(data[0].fname + " " + data[0].lname);
            $('#placeQuote').html(data[0].words);
        });
    });
});


function tweetIt () {
  var phrase = document.getElementById('placeQuote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '.' +
    '#quotes';

  window.open(tweetUrl);
}
