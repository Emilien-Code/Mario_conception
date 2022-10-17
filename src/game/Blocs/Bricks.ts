import Bloc from "./Bloc"
import IHitableBlock from "../utils/IHitableBlock"
import Position from "../utils/Position"

class Bricks extends Bloc implements IHitableBlock{
    private isBroken: boolean;


    constructor(position: Position){
        super(position);
        this.isBroken = false;
    }

    hit(): void {
        this.isBroken = true;
        console.log("Bricks disapear")
    }

    render(): string{
        if(!this.isBroken)
            return "#"
        return "";
    }   
    
}

export default Bricks