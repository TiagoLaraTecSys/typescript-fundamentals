import { NegociacoesView, MensagemView, typInfo } from '../views/index';

import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecução, domInject } from '../helpers/decorators/index';


export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView',true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {

        //this._inputData = $('#data');
        //this._inputQuantidade = $('#quantidade');
        //this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes)

    }
    private isUtilDay(date: Date){
        return date.getDay() == diaDeSemana.Domingo || 
        date.getDay() == diaDeSemana.Sábado;
    }
    
    importaDados(){
        function isOk(res: any ){
            if (res.ok){
                return res;
            } else {
                throw new Error(res.statusText);
            }
            
        }
        fetch('http://localhost:8080/dados')
        .then(response => isOk(response))
        .then(res => res.json())
        .then((dados: any[]) =>  {
            dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)).forEach(Negociacao => this._negociacoes.adiciona(Negociacao));
            this._negociacoesView.update(this._negociacoes);
        }
        )
        .catch(err => console.log(err.message))
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