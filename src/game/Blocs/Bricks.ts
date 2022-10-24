import Bloc from "./Bloc"
import IBreakableBlock from "../utils/IBreakableBlock"
import Position from "../utils/Position"

class Bricks extends Bloc implements IBreakableBlock{
    private isBroken: boolean;


    constructor(position: Position){
        super(position);
        this.isBroken = false;
    }

    break(): void {
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