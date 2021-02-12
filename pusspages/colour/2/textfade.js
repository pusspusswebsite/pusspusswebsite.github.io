var textMain = function() {
    var chvT = 255 - chv;
    document.getElementById("someText").style = "color:rgb(" + chvT + "," + chvT + "," + chvT + ");";
    setTimeout(textMain, 0000);
}

textMain();