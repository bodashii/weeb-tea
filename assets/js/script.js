// returns quote data and appends quote to index.html
$(function() {
    const displayQuote = $('#quote')
    const displayChar = $('#character')
    const displayAnime = $('#anime')

    $.ajax({
        type: 'GET',
        url: 'https://animechan.vercel.app/api/random',
        success: function(getQuote) {
            console.log(getQuote);
            console.log(getQuote.quote, getQuote.character, getQuote.anime);
            displayQuote.append(getQuote.quote);
            displayChar.append(getQuote.character);
            displayAnime.append(getQuote.anime);
        }
    });
});

// displays quote

