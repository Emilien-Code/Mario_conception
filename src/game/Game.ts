import Position from "./utils/Position";
import Player from "./Player/Player";
import Map from "./map/Map"
const readline = require('readline');

const screenWidth = 10;
const screenHeight = 10;

class Game {
    map : Array<Array<any>>; 
    _isPlaying : boolean;
    player : Player;

    constructor(map: Map){
        this.map = map.getMap();
        this.player = new Player(new Position(0,9), "normal")
        this._isPlaying = true;
    }

    isPlaying():boolean{
        return this._isPlaying
    }

    init(): void{
        this.map[this.player.getPosition().y][this.player.getPosition().x] = this.player
    }
    
    
    
    update(key: string): void{
        
        this.map[this.player.getPosition().y][this.player.getPosition().x] = 0
        
        if(key === 'right') {
            if(this.player.getPosition().x < screenWidth-1 )
            this.player.moveTo(new Position(this.player.getPosition().x + 1, this.player.getPosition().y))
            console.log("droite");
        }
        if(key === 'left'){
            if(this.player.getPosition().x > 0 )
                this.player.moveTo(new Position(this.player.getPosition().x - 1, this.player.getPosition().y))
            console.log("gauche");
        }
        if(key === 'space') {
            console.log("jump");  
        }

        this.map[this.player.getPosition().y][this.player.getPosition().x] = this.player
    }

    render(): void{
        process.stdout.write('\ __________\n');
        
        for(let i:number = 0; i < screenHeight; i++){
            process.stdout.write('|');
            for(let j:number = 0; j < screenWidth; j++){
                
                process.stdout.write(this.map[i][j].render ? this.map[i][j].render() : "\ ");
            }   
            process.stdout.write('|');
            console.log(""); // Passer à la ligne
        }
        process.stdout.write('\ __________\n\n');
    }

    

}

export default Game;