export class Negociacao {
    
    constructor(readonly date: Date, readonly quantidade:number,readonly valor: number){
    }


    get volume() {
        return this.quantidade * this.valor;
    }
}
