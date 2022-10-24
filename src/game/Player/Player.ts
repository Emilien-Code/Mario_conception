import IMovable from "../utils/IMove";
import Position from "../utils/Position"
import IRenderable from "../utils/IRenderable"
import IDeath from "../utils/IDeath"

class Player implements IMovable, IRenderable, IDeath{
    person: string;
    Hp: number;
    power: string;
    jumping_v: number;
    dead: boolean;
    position: Position;

    constructor(position : Position, power: string){
        this.position = position;
        this.power = power;

    }
    
    moveTo(position: Position): void{
        this.position = position; 
    }

    jump(){
        this.position.y = this.position.y + 1;
    }

    die() {
        this.dead = true;
    }

    render(): string {
        if(!this.dead){
            return "$";
        }
        return "";
    }

}


export default Player;