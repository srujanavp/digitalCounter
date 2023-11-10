var count=0;
function increase()
{
    count++;
    document.getElementById("countNum").innerHTML=count;
}
function decrease()
{
    count--;
    document.getElementById("countNum").innerHTML=count;
}
function reset()
{
    count=0;
    document.getElementById("countNum").innerHTML=count;
}

