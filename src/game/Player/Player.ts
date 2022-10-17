import IMovable from "../utils/IMove";
import Position from "../utils/Position"

class Player implements IMovable{
    Person: String;
    Hp: Number;
    Power: String;
    jumping_v: number = 27;
    dead: boolean;
    position: Position;
    
    moveTo(position: Position): void{
        this.position = position; 
    }

    jump(){
        this.position.y = this.position.y + 1;
    }

    die() {
        this.dead = true;
      }

}