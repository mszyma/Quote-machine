var url = "https://quotes.stormconsultancy.co.uk/random.json";

$(document).ready(function() {
    $.getJSON(url, function(data) {
        $('#placeQuote').html(data.quote);
        $('.footer').html(data.author);
    });
    $('.quote-button').on('click', function() {
        $.getJSON(url, function(data) {
            $('#placeQuote').html(data.quote);
            $('.footer').html(data.author);
            $('#placeQuote').html(data.quote);
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
