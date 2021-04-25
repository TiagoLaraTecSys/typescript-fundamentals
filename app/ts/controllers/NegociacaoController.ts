import { NegociacoesView, MensagemView, typInfo } from '../views/index';

import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView',true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes)

    }
    private isUtilDay(date: Date){
        return date.getDay() == diaDeSemana.Domingo || 
        date.getDay() == diaDeSemana.Sábado;
    }
    adiciona(event: Event){
        
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,'/'));

        // Verificando se a data selecionada é dia útil
        if(this.isUtilDay(data)){
            this._mensagemView.update('Negociações só são possíveis em dias úteis')
            return
        } 
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada!');
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
    Sábado
}