const screenWidth = 10;
const screenHeight = 10;

class Game {
    square : Array<Array<any>>; 


    constructor(){
        this.square = [];

    }

    init(): void{
        for(let i:number = 0; i < screenWidth; i++){
            
            const a:Array<any> =[];
            
            for(let j:number = 0; j < screenWidth; j++){
                a.push(0);
            }

            this.square.push(a);
        }
    }


    
    update(): void{

    }

    render(): void{
        for(let i:number = 0; i < screenWidth; i++){
            //for(let j:number = 0; j < screenWidth; j++){

                // checker avec des typeof le remettre dans un tab et le console.log
                console.log(this.square[i]/*?.render* In the future*/);
            //}   
            console.log("");
        }
    }

    

}

export default Game;