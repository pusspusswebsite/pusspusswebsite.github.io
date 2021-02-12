var limiter = 0000;
var chv = 000;
var back = false;

var main = function() {
    if (chv > 254)
    {
        back = true;
    }
    if (chv < 1)
    {
        back = false;
    }
    if (back)
    {
        chv = chv - 001;
    } else {
        chv = chv + 001;
    }
    console.log(chv);
    document.body.style = "background-color:rgb(" + chv + "," + chv + "," + chv + ");";
    setTimeout(main, limiter);
}

main();