/*let social = document.getElementById("bt");
let pj = document.getElementById("project");
let skill = document.getElementById("skills");
let about = document.getElementById("abt");

function bottomFunction() {
    document.documentElement.scrollIntoView(false);
}

function projectFunction() {
    window.scrollTo(0, 550);/*scrollTo(y-axis,x.axis)*/
/*}
function skillsFunction() {
    window.scrollTo(0, 550);
}
function aboutFunction() {
    window.scrollTo(0, 1000);
}*/


/* Set the width of the side navigation to 250px and the
left margin of the page content to 250px and add a black
 background color to body */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
/* Set the width of the side navigation to 0 and the
left margin of the page content to 0, and the background
 color of body to white */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("content").style.marginLeft = 0;
    document.body.style.backgroundColor = "white";
}