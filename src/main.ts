import Game from "./game/Game";
import Map from "./game/map/Map";






function main(): number {
    const map:Map = new Map();

    let game = new Game(map);


    game.init();

    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    let pressedKey:string = null;
    game.render()
    


    //Ici, faire une boucle temps que le joueur est vivant et écouter les keyboard events pour que les pnj s'updates 
    process.stdin.on('keypress', (str, key) => {
        if(key.ctrl == true && key.name == 'c'){
            process.exit()
        }
        
        pressedKey = key.name;
        
                
        game.update(pressedKey);
        game.render();
                    
    })
                    

                        
                        
    
    
    
    //while  : game.handleEvent, game.update, game.render
    return 1;
}

const result: any = main();
// console.log(result);

export default main;