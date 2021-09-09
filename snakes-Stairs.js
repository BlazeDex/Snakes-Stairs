class Dice {
    throwDice() {
        return Math.floor(Math.random() *6 + 1);
    }
}

class GameBoard {
    changeBox(box) {
        switch(box) {
            // Stairs //            
            case 9:
                return 15;
            case 18:
                return 27;
            case 25:
                return 39;
            case 32:
                return 40;
            case 44:
                return 50;
            case 61:
                return 71;
            case 69:
                return 81;
            case 78:
                return 95;
            // Snakes //
            case 23:
                return 12;
            case 39:
                return 21;
            case 48:
                return 34;
            case 60:
                return 46;
            case 64:
                return 56;
            case 71:
                return 62;
            case 84:
                return 59;
            case 99:
                return 52;
            default:
                return box;    
        }
    }    
}

class Player {
    constructor(name) {
        this._name = name;
        this._board = 0;
        this._dice = new Dice;      
    }

    getName() {
        return this._name;
    }
    
    playerAdvance() {
        return this._board += this._dice.throwDice();
    }

    getBoard() {
        return this._board;
    }
}

let t  = 1;
let b  = new GameBoard;
let p1 = new Player('Alan');
let p2 = new Player('Tirzo');

while(p1.getBoard() < 100 && p2.getBoard() < 100) { 
    p1._board = b.changeBox(p1.playerAdvance());
    p2._board = b.changeBox(p2.playerAdvance());
   
    console.log('----------------------------------------------------------'); 
    console.log(`Turno número ${t++}:`);     
    console.log(`${p1.getName()} se encuentra en la casilla ${p1.getBoard()}.`);         
    console.log(`${p2.getName()} se encuentra en la casilla ${p2.getBoard()}.`);
                  
}

if(p1.getBoard() >= 100) {
    console.log('----------------------------------------------------------');
    console.log(`¡${p1.getName()} ha ganado en ${--t} turnos!`);
} else if(p2.getBoard() >= 100) {
    console.log('----------------------------------------------------------');
    console.log(`¡${p2.getName()} ha ganado en ${--t} turnos!`);
} 