
(function () {
    let quotes = ["Money makes your life easier. <br>If you're lucky to have it, you're lucky.",
     "It's easy to fool the eye <br>but it's hard to fool the heart.",
    "I don't ever give my opinion.<br>Opinions I have about anything are in my personal life.",
    "There has been a lot of self-doubt <br>and unwelcome events in my life.",
    "Shakespeare's plays are <br>more violent than Scarface."]
    i = 0;
    setInterval(function(){ $('#quote-text').fadeOut(function(){
        $(this).html(quotes[(i = (i + 1) % quotes.length)]).fadeIn();
      }); }, 10000)
})();