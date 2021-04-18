class Negociacao {
    
    constructor(private __date: Date, private __quantidade:number,private __valor: number){
    }

    get date (){
        return this.__date;
    }

    get quantidade(){
        return this.__quantidade;
    }

    get valor() {
        return this.__valor;
    }

    get volume() {
        return this.__quantidade * this.__valor;
    }
}