import { MeuObjeto } from "./MeuObjeto";

export class Negociacao implements MeuObjeto<Negociacao> {
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
  ehIgual(negociacao: Negociacao): boolean {
    return (
      this.date.getDate() == negociacao.date.getDate() &&
      this.quantidade == negociacao.quantidade &&
      this.valor == negociacao.valor
    );
  }
}
