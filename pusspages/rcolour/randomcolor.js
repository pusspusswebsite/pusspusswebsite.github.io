var randomRGB = function() {
    return Math.floor(Math.random() * 256);
}

var setRandomBg = function() {
    var R1 = randomRGB();
    var R2 = randomRGB();
    var R3 = randomRGB();
    document.body.style = "background-color:rgb("+R1+","+R2+","+R3+");";
}