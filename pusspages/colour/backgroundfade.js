var limiter = 0000;
var chv = 000000;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function padHex(inStr) {
    var padlength = 6 - inStr.length;
    var pad = "";
    var i;
    for (i = 0; i < padlength; i++) {
        pad = pad + "0";
    }
    return pad + inStr;
}

var main = function() {
    var getBgRGB = document.body.style.backgroundColor;
    var bgRGBlist = ((getBgRGB.replace("rgb(", "")).replace(")","")).split(",");
    var bgcurrant = componentToHex(bgRGBlist[0]) + componentToHex(bgRGBlist[1]) + componentToHex(bgRGBlist[2]);
    chv = padHex((parseInt(chv, 16) + 000001).toString(16))
    console.log(chv);
    document.body.style = "background-color:#" + chv + ";";
    setTimeout(main, limiter);
}

main();