var LoginX = function()
{
    document.getElementById("PWHL").innerHTML = "";
    $.getScript("http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/USERVJ/" + window.UHC + ".js");
    $.getScript("http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/USERJ/" + window.UHC + ".js");
    setTimeout(LoginD, 500);
}

var LoginD = function()
{
    if (window.VRFX == 1)
    {
    if (window.UNHCX == hashCode(document.getElementById("PWT").value))
    {
        console.log("Successfull Login.");
        window.location.replace("./../?SLI");
    } else {
        console.log("Error");
        document.getElementById("PWHL").innerHTML = "<H3>Username or Password incorrect.</H3>";
    }
    } else {
        document.getElementById("PWHL").innerHTML = "<H3>Your account has not been verified. Please check your email.</H3>";
    }
}

var LoginA = function()
{
    window.UHC = hashCode(document.getElementById("UNT").value);
    document.getElementById("PWHL").innerHTML = "<iframe id=\"PWHLF\" height=\"0\" width=\"0\" src=\"http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/uhl.php?UNH=" + window.UHC + "\"></iframe>";
    setTimeout(LoginX, 500);
}