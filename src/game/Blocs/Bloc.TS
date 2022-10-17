import Position from "../utils/Position"
import IRenderable from "../utils/IRenderable"


abstract class Bloc implements IRenderable{

    private position: Position;
    
    constructor(position: Position) {
        this.position = position;
    }
    
    abstract render() : string;
}
export default Bloc