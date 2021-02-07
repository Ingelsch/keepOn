//Calculate Tip
function calculateTip() {
    let pris = document.getElementById("pris").value;
    let happy = document.getElementById("happy").value;
    let implied = document.getElementById("peopleamt").value;

    //validate input
    if (pris === "" || happy == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (implied === "" || implied <= 1) {
        implied = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (pris * happy) / implied;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();

};