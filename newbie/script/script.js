// function inges() {
//     document.getElementById("header").innerHTML = "#header".load("../includes/header.htm");
//     document.getElementById("footer").innerHTML = "#footer".load("../includes/footer.htm");
// }

function include_header() {
    document.getElementById("header").innerHTML = '<object type="text/html" data="../includes/header.html" ></object>';
}

function include_footer() {
    document.getElementById("footer").innerHTML = '<object type="text/html" data="../includes/footer.html" ></object>';
}