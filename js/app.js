var lang; // overall name of the language

$(document).ready(function() {

    function loadGrammars() {
        //$("#output").html("");

        // establish the name of the language
        var languageGrammar = tracery.createGrammar(grammars["languageDetails"]);
        lang = languageGrammar.flatten("#title#");

        var div = $("<div/>", {
            class : "outputSample",
            html : lang
        });

        $("#container").append(div);
    }

    setTimeout(function() {
        loadGrammars();
    }, 10);

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });
});
