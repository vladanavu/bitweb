var field = document.querySelector("#field");
var stopped = true;

function updatePlayer(event) {
    if (stopped) {
        var player = document.querySelector("#player");
        player.parentNode.removeChild(player);
        var playerX = event.clientX + "px";
        var playerY = event.clientY + "px";
        console.log(playerX, playerY);

        var newPlayer = document.createElement("div");
        newPlayer.setAttribute("id", "player");
        newPlayer.innerHTML = "<img src='./images/player.png'>";
        newPlayer.style.top = playerY;
        newPlayer.style.left = playerX;
        field.appendChild(newPlayer);
    }
}
field.addEventListener("click", updatePlayer);

function stopPlayer() {
    if (stopped) {
        stopped = false;
    } else {
        stopped = true;
    }
}

var button = document.querySelector("#stop");
button.addEventListener("click", stopPlayer);