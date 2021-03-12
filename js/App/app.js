import Game, {GameSavingData} from '../Game/game.js';
import {readGameSaving as loadGame, writeGameSaving as saveGame} from '../Game/game.js';




console.log(Game);
console.log(GameSavingData);
console.log(loadGame);
console.log(saveGame);


const game = new Game();
game.start();


