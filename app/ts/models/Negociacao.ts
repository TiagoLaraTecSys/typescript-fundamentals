import { Imprimivel } from "./Imprimivel";

export class Negociacao implements Imprimivel {
  constructor(
    readonly date: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}

  get volume() {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log(`Data: ${this.date},
                     quantidade: ${this.quantidade},
                     valor: ${this.valor},
                     volume: ${this.volume}`);
  }
}
