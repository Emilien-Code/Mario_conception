import IMovable from "../utils/IMove";
import Position from "../utils/Position"
import IRenderable from "../utils/IRenderable"
import IDeath from "../utils/IDeath"

class Monster implements IMovable, IRenderable, IDeath{
    person: string;
    Hp: number;
    power: string;
    jumping_v: number;
    dead: boolean;
    position: Position;

    constructor(position : Position){
        this.position = position;
    }
    
    moveTo(position: Position): void{
        this.position = position; 
    }

    getPosition(){
        return this.position
    }

    die() {
        this.dead = true;
    }

    render(): string {
        if(!this.dead){
            return "@";
        }
        return "";
    }

}


export default Monster;