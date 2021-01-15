var LoginD = function()
{
    //document.getElementById("PWHL").innerHTML = "<script type=\"text/javascript\" src=\"http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/USERJ/" + window.UHC + ".js\"></script>";
    $.getScript("http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/USERJ/" + window.UHC + ".js");
    if (UNHCX == hashCode(document.getElementById("PWT").value))
    {
        console.log("Successfull Login.");
    } else {
        console.log("Error");
    }
}

var LoginA = function()
{
    window.UHC = hashCode(document.getElementById("UNT").value);
    document.getElementById("PWHL").innerHTML = "<iframe id=\"PWHLF\" height=\"0\" width=\"0\" src=\"http://3egaming.000webhostapp.com/coco.website.api/pusspuss/login/uhl.php?UNH=" + window.UHC + "\"></iframe>";
    setTimeout(LoginD, 500);
}