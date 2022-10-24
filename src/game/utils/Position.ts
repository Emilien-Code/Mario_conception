class Position{
    private _x: number;
    private _y: number;


    constructor(x:number=0, y:number=0){
        this.x = x;
        this.y = y;
    }

    public get x(): number {
        return this._x;
    }
    
    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }
    
    public set y(value: number) {
        this._y = value;
    }

  }


export default Position