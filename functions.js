function WhoAreWe()
{
    var x = document.getElementById("WhoAreWeDiv");
    if (x.style.display === "none")
    {
        x.style.display = "block";
        document.getElementById("OurFocusDiv").style.display = "none";
    }
    else
    {
        x.style.display = "none";
    }
}

function OurFocus()
{
    var f = document.getElementById("OurFocusDiv");
    if (f.style.display === "none")
    {
        f.style.display = "block";
        document.getElementById("WhoAreWeDiv").style.display = "none";
    }
    else
    {
        f.style.display = "none";
    }
}

function WebSite()
{
    var f = document.getElementById("webDiv");
    if (f.style.display === "none")
    {
        f.style.display = "block";
        document.getElementById("hostDiv").style.display = "none";
        document.getElementById("securityDiv").style.display = "none";
    }
    else {
        f.style.display = "none";
    }
}

function WebHost()
{
    var f = document.getElementById("hostDiv");
    if (f.style.display === "none")
    {
        f.style.display = "block";
        document.getElementById("webDiv").style.display = "none";
        document.getElementById("securityDiv").style.display = "none";
    }
    else
    {
        f.style.display = "none";
    }
}
function WebSecurity()
{
    var f = document.getElementById("securityDiv");
    if (f.style.display === "none")
    {
        f.style.display = "block";
        document.getElementById("webDiv").style.display = "none";
        document.getElementById("hostDiv").style.display = "none";
    }
    else 
    {
        f.style.display = "none";
    }
}

function GXGames()
{
    var f = document.getElementById("GXGamesDiv");
    if (f.style.display === "none")
    {
        f.style.display = "block";
        document.getElementById("UnityGamesDiv").style.display = "none";
    }
    else
    {
        f.style.display = "none";
    }
}

function UnityGames()
{
    var h = document.getElementById("UnityGamesDiv");
    if (h.style.display === "none")
    {
        h.style.display = "block";
        document.getElementById("GXGamesDiv").style.display = "none";
    }
    else
    {
        h.style.display = "none";
    }
}