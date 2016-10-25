var grammars = {

    /**
     * Defines the name and various elements of the language.
     */
    languageName : {
        first : ["Discovering", "The Art of", "An Intro to", "How To Use", "Introduction To", "The Idiot's Guide To", "The Complete Language Reference"],
        title : ["#first#</br><h2>#scriptname##scriptmid# #scriptsuffix#</h2>"],
        scriptname : ["#l##l#", "#l##l##l#", "#l##l##l##l#", "#writtenname#"],
        l : ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        writtenname : ["Base", "Assemble", "Lite", "Neon", "Oxy", "Calc", "Bro", "Pro", "Bit", "Byte", "Iso", "Switch", "Tetra"],
        scriptmid : ["Script", "Code", ""],
        scriptsuffix : ["201#year#", "Pro", "#num#.#num#"],
        year : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        num : ["1", "2", "3", "4", "5", "6"]
    },

    /**
     * Main book definiton
     */
    book : {
        origin : ["#opening#"],
        title : ["This is a paragraph."]
    }
}
