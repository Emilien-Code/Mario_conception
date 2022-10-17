import Position from "../utils/Position"


abstract class Bloc {

    position: Position;
    
    constructor() {
        this.position = new Position();
    }
}
export default Bloc