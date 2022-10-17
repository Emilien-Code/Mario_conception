const screenWidth = 10;
const screenHeight = 10;

class Game {
    square : Array<Array<string>>; 

    constructor(){
        this.square = [];

    }

    init(): void{
        console.log(this.square)
        for(let i:number = 0; i < screenWidth; i++){
            
            const a:Array<string> =[];
            
            for(let j:number = 0; j < screenHeight; j++){
                a.push("#");
            }

            this.square.push(a);
        }
    }


    
    update(): void{

    }

    render(): void{
        for(let i:number = 0; i < screenWidth; i++){
            for(let j:number = 0; j < screenWidth; j++){
                process.stdout.write(this.square[i][j]);
            }   
            console.log("");
        }
    }

    

}

export default Game;