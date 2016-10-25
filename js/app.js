var LANG; // overall name of the language

$(document).ready(function() {

    function loadGrammars() {
        // establish the full and abbreviated name of the language
        var languageGrammar = tracery.createGrammar(grammars["languageName"]);
        LANG = languageGrammar.flatten("#title#");
        addToBook(LANG);
    }

    setTimeout(function() {
        loadGrammars();
    }, 10);

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });

    function addToBook(addition) {
      $("#container").append(addition);
    }
});
