$(document).ready(function() {

    function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars[name]);

        var s = grammar.flatten("#origin#");

        var div = $("<div/>", {
            class : "outputSample",
            html : s
        });

        $("#container").append(div);
    }

    setTimeout(function() {
        loadGrammar("tester");
    }, 10);

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });
});
