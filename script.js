const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');
let playerPosition = 50;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        playerPosition += 10;
    } else if (event.key === 'ArrowLeft') {
        playerPosition -= 10;
    }
    player.style.left = playerPosition + 'px';
});

// Example of a game loop (simplified)
function gameLoop() {
    // Update game logic, check collisions, etc.
    requestAnimationFrame(gameLoop);
}

gameLoop();