import Bloc from "./Bloc"
import IHitableBlock from "../utils/IHitableBlock"
import Position from "../utils/Position"

class Bricks extends Bloc implements IHitableBlock{
    private isOpened: boolean;


    constructor(position: Position){
        super(position);
        this.isOpened = false;
    }

    hit(): void {
        this.isOpened = true;
        console.log("Bricks disapear")
    }

    render(): string{
        if(!this.isOpened)
            return "?"
        return "";
    }   
    
}

export default Bricks