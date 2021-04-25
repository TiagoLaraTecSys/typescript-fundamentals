System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, diaDeSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_1.MensagemView('#mensagemView', true);
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                isUtilDay(date) {
                    return date.getDay() == diaDeSemana.Domingo ||
                        date.getDay() == diaDeSemana.Sábado;
                }
                adiciona(event) {
                    const t1 = performance.now();
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, '/'));
                    // Verificando se a data selecionada é dia útil
                    if (this.isUtilDay(data)) {
                        this._mensagemView.update('Negociações só são possíveis em dias úteis');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada!');
                    // TEste para ver se da para deletar do paraArray
                    const t2 = performance.now();
                    console.log(`O tempo de execução de adiciona é de ${t2 - t1} ms`);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaDeSemana) {
                diaDeSemana[diaDeSemana["Domingo"] = 0] = "Domingo";
                diaDeSemana[diaDeSemana["Segunda"] = 1] = "Segunda";
                diaDeSemana[diaDeSemana["Terca"] = 2] = "Terca";
                diaDeSemana[diaDeSemana["Quarta"] = 3] = "Quarta";
                diaDeSemana[diaDeSemana["Quinta"] = 4] = "Quinta";
                diaDeSemana[diaDeSemana["Sexta"] = 5] = "Sexta";
                diaDeSemana[diaDeSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(diaDeSemana || (diaDeSemana = {}));
        }
    };
});
