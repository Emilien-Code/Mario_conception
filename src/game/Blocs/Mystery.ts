import Bloc from "./Bloc"
import IBreakableBlock from "../utils/IBreakableBlock"
import Position from "../utils/Position"
//Brokable
class Bricks extends Bloc implements IBreakableBlock{
    private isOpened: boolean;


    constructor(position: Position){
        super(position);
        this.isOpened = false;
    }

    break(): void {
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