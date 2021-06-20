import { NegociacoesView, MensagemView, typInfo } from "../views/index";

import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import {
  logarTempoDeExecução,
  domInject,
  throttle,
} from "../helpers/decorators/index";
import { NegociacaoService, HandlerFunction } from "../services/index";
import { imprime } from "../helpers/index";
export class NegociacaoController {
  @domInject("#data")
  private _inputData: JQuery;
  @domInject("#quantidade")
  private _inputQuantidade: JQuery;
  @domInject("#valor")
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView", true);
  private _mensagemView = new MensagemView("#mensagemView", true);
  private _service = new NegociacaoService();

  constructor() {
    //this._inputData = $('#data');
    //this._inputQuantidade = $('#quantidade');
    //this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }
  private isUtilDay(date: Date) {
    return (
      date.getDay() == diaDeSemana.Domingo ||
      date.getDay() == diaDeSemana.Sábado
    );
  }

  @throttle(500)
  async importaDados() {
      try{
          const negociacoesParaImportar = await this._service
              .obterNegociacoes((res) => {
                  if (res.ok) {
                      return res;
                  } else {
                      throw new Error(res.statusText);
                  }
              });

          const negociacoesJaImportadas = this._negociacoes.paraArray();

          negociacoesParaImportar
              .filter(
                  (negociacao: Negociacao) =>
                      !negociacoesJaImportadas.some((jaImportada) =>
                          negociacao.ehIgual(jaImportada)
                      )
              )
              .forEach((negociacao: Negociacao) =>
                  this._negociacoes.adiciona(negociacao)
              );

          this._negociacoesView.update(this._negociacoes);
      } catch(err){
          this._mensagemView.update(err.message)
      }

      }
  @throttle(500)
adiciona() {
    let data = new Date(this._inputData.val().replace(/-/g, "/"));

    // Verificando se a data selecionada é dia útil
    if (this.isUtilDay(data)) {
      this._mensagemView.update("Negociações só são possíveis em dias úteis");
      return;
    }
    console.log(this._inputValor.val());
    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);

    imprime(negociacao, this._negociacoes);

    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada!");
    // TEste para ver se da para deletar do paraArray
  }
}
enum diaDeSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}
