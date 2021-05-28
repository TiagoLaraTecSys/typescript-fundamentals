import { Negociacao } from "./index";
import { Imprimivel } from "./Imprimivel";

export class Negociacoes implements Imprimivel {
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Array<Negociacao> {
    // Gerando uma cópia da o array original da classe
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log(JSON.stringify(this._negociacoes));
  }
}
