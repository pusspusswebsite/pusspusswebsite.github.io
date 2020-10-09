if (EASTERCHECK(YEAR) == "0" + MONTH + "." + DATE) {
document.getElementById("ZAKPUSS").innerHTML = "<P>Its easter!</P>";
} else if (MONTH == 12 && DATE == 25) {
document.getElementById("ZAKPUSS").innerHTML = "Its christmas!";
} else if (MONTH == 12 && DATE < 24) {
document.getElementById("ZAKPUSS").innerHTML = "<P>Its " + (25 - DATE) + " days until christmas!</P>";
}