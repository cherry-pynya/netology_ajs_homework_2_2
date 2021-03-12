import Character from '../Domain/domain.js';

const paladin = new Character('Uther');
console.log(paladin);


export default class Game {
    start() {
      console.log('game started');
    }
  }
  


class GameSavingData {

};
  
function readGameSaving() {

};
  
function writeGameSaving() {

};

export {GameSavingData, readGameSaving, writeGameSaving}

  
