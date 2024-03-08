let buttons = [];
let winnerIndex;
let winnerButtonIndex;

function createButtons() {
    let container = document.getElementById("buttons-container");
    for (let i = 0; i < 3; i++) {
        let button = document.createElement('button');
        button.textContent = 'Button ' + (i + 1);
        button.style.background = "rgba(255,0,0,0.8)";
        buttons.push(button);
        container.appendChild(button);
      }
}

function chooseRandomButton() {
    winnerIndex = Math.floor(Math.random() * 3);
    winnerButtonIndex = buttons[winnerIndex];
    showWinnerButton();
}

function showWinnerButton() {
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        if (button === winnerButtonIndex) {
          button.textContent = 'Winner Button';
        } else {
          button.textContent = 'Loser Button';
        }
      });
    });
}
