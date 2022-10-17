import Position from "../utils/Position";
import Mystery from "../Blocs/Mystery";
import Bricks from "../Blocs/Bricks";
const screenWidth = 10;
const screenHeight = 10;
class Map {


    map : Array<Array<any>>; 

    constructor(){
        this.map = [];


        for(let i:number = 0; i < screenWidth; i++){
            
            const a:Array<any> =[];
            
            for(let j:number = 0; j < screenHeight; j++){
                a.push(0);
            }

            this.map.push(a);

        }

        this.map[9][3] = new Bricks(new Position(3,1))
        this.map[9][4] = new Bricks(new Position(4,1))
        this.map[9][5] = new Bricks(new Position(5,1))
        this.map[9][6] = new Bricks(new Position(6,1))
        
        
        this.map[6][1] = new Mystery(new Position(6,1))
    }

    getMap(){
        return this.map
    }

}
export default Map