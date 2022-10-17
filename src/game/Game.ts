import Position from "./utils/Position";
import Map from "./map/Map"
const screenWidth = 10;
const screenHeight = 10;


class Game {
    map : Array<Array<any>>; 


    constructor(map: Map){
        this.map = map.getMap();
    }

    init(): void{

    }


    
    update(): void{

    }

    render(): void{
        for(let i:number = 0; i < screenWidth; i++){
            for(let j:number = 0; j < screenWidth; j++){

                // checker avec des typeof le remettre dans un tab et le console.log
                process.stdout.write(this.map[i][j].render ? this.map[i][j].render() : "_");
                // console.log(this.map[i][j]?.render() /* In the future*/);
            }   
            console.log("");
        }
    }

    

}

export default Game;