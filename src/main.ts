import Game from "./game/Game"
import Map from "./game/map/Map"




function main(): number {
    const map:Map = new Map();

    let game = new Game(map);

    game.init();


//while  : game.handleEvent, game.update, game.render


    game.render()

    //const hello: string = "Hello, World!";
    return 1;
}

const result: any = main();
console.log(result);

export default main;