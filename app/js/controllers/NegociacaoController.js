System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegociacaoController, diaDeSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_1.MensagemView('#mensagemView', true);
                    //this._inputData = $('#data');
                    //this._inputQuantidade = $('#quantidade');
                    //this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                isUtilDay(date) {
                    return date.getDay() == diaDeSemana.Domingo ||
                        date.getDay() == diaDeSemana.Sábado;
                }
                importaDados() {
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(response => isOk(response))
                        .then(res => res.json())
                        .then((dados) => {
                        dados.map(dado => new index_2.Negociacao(new Date(), dado.vezes, dado.montante)).forEach(Negociacao => this._negociacoes.adiciona(Negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(err => console.log(err.message));
                }
                adiciona(event) {
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
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
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
