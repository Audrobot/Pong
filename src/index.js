import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 1000, 400);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();

let ambience = new Audio('public/sounds/parkambience.wav');
 +ambience.play();
