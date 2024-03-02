var button1 = document.getElementById('hiddenButton1');
var button2 = document.getElementById('hiddenButton2');
var button3 = document.getElementById('hiddenButton3');

function chooseRandomButton() {
    var buttons = [button1, button2, button3];
    winnerButton = buttons[Math.floor(Math.random() * buttons.length)];
    console.log(winnerButton);
}

function status1() {
    if (winnerButton === button1) {
        document.getElementById("hiddenButton1").innerHTML = "Castigator";
    } else {
        document.getElementById("hiddenButton1").innerHTML = "Necastigator";
    }
}

function status2() {
    if (winnerButton === button2) {
        document.getElementById("hiddenButton2").innerHTML = "Castigator";
    } else {
        document.getElementById("hiddenButton2").innerHTML = "Necastigator";
    }
}
function status3() {
    if (winnerButton === button3) {
        document.getElementById("hiddenButton3").innerHTML = "Castigator";
    } else {
        document.getElementById("hiddenButton3").innerHTML = "Necastigator";
    }
}