import { Negociacao, NegociacaoParcial } from "../models/index";
export class NegociacaoService {
  obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[] | any> {
    return fetch("http://localhost:8080/dadosex")
      .then((res) => handler(res))
      .then((res) => res.json())
      .then((dados: NegociacaoParcial[]) =>
        dados.map(
          (dado) => new Negociacao(new Date(), dado.vezes, dado.montante)
        )
      )
      .catch((err) => {
        console.log(err);
        throw new Error('Não foi possível importar negociações')
      });
  }
}

export interface HandlerFunction {
  (res: Response): Response;
}
