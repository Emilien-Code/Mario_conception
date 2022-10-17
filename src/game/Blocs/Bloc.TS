import Position from "../utils/Position"


abstract class Bloc {

    private position: Position;
    
    constructor(position: Position) {
        this.position = position;
    }
}
export default Bloc