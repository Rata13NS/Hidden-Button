let buttons = [];

function createButtons() {
    let container = document.getElementById("buttons-container");
    for (var i = 0; i < 3; i++) {
        let button = document.createElement('button');
        button.textContent = 'Button ' + (i + 1);
        button.style.background = "rgba(255,0,0,0.8)";
        buttons.push(button);
        container.appendChild(button);
      }
}

function chooseRandomButton() {
    let winnerIndex = Math.floor(Math.random() * 3);
    let winnerButtonIndex = buttons[winnerIndex];
    console.log(winnerIndex);
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
          if (button === winnerButtonIndex) {
            button.textContent = 'Castigator';
          } else {
            button.textContent = 'Necastigator';
          }
        });
      });
}
