if (EASTERCHECK(YEAR) == "0" + MONTH + "." + DATE) {
document.getElementById("ZAKPUSS").innerHTML = "<P>Its easter!</P>";
} else if (MONTH == 12 && DATE == 9) {
document.getElementById("ZAK").innerHTML = "<P style=\"color:red;\">THE CURSE IS HERE.</P>";
} else if (MONTH == 12 && DATE == 25) {
document.getElementById("ZAKPUSS").innerHTML = "<P>Its christmas!</P>";
} else if (MONTH == 12 && DATE < 24) {
document.getElementById("ZAKPUSS").innerHTML = "<P>Its " + (25 - DATE) + " days until christmas!</P>";
} else if (MONTH == 12 && DATE == 24) {
document.getElementById("ZAK").innerHTML = "<P>Its christmas eve, 1 day until christmas!</P>";
} else if (MONTH == 12 && DATE == 26) {
document.getElementById("ZAK").innerHTML = "<P>Its boxing day.</P>";
} else if (MONTH == 12 && DATE == 31) {
document.getElementById("ZAK").innerHTML = "<P>Its new years eve! Pusspuss countdown:</P><iframe src='https://cocowebsite.github.io/files/cococounter1.html' title='Countdown' frameborder=0></iframe>";
refreshAt(12,0,0)
} else if (MONTH == 1 && DATE == 1) {
document.getElementById("ZAK").innerHTML = "<P>Happy new year!</P><H1>" + YEAR + "</H1>";
} else if (MONTH == 10 && DATE == 31) {
document.getElementById("ZAK").innerHTML = "<P>Its Halloween.</P>";
} else if (urlVariables["coco"] != undefined) {
document.getElementById("ZAK").innerHTML = "<P style=\"color:red;\">NO.</P>";
}