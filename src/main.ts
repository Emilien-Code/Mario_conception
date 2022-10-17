import Game from "./game/Game"



function main(): number {
    let game = new Game();

    game.init();


//while  : game.handleEvent, game.update, game.render


    game.render()

    //const hello: string = "Hello, World!";
    return 1;
}

const result: any = main();
console.log(result);

export default main;