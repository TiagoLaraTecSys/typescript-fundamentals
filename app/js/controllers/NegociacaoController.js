System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, diaDeSemana;
    var __moduleName = context_1 && context_1.id;
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
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView("#negociacoesView", true);
                    this._mensagemView = new index_1.MensagemView("#mensagemView", true);
                    this._service = new index_4.NegociacaoService();
                    //this._inputData = $('#data');
                    //this._inputQuantidade = $('#quantidade');
                    //this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                isUtilDay(date) {
                    return (date.getDay() == diaDeSemana.Domingo ||
                        date.getDay() == diaDeSemana.Sábado);
                }
                importaDados() {
                    this._service
                        .obterNegociacoes((res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    })
                        .then((negociacoes) => {
                        negociacoes.forEach((negociacao) => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, "/"));
                    // Verificando se a data selecionada é dia útil
                    if (this.isUtilDay(data)) {
                        this._mensagemView.update("Negociações só são possíveis em dias úteis");
                        return;
                    }
                    console.log(this._inputValor.val());
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    index_5.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada!");
                    // TEste para ver se da para deletar do paraArray
                }
            };
            __decorate([
                index_3.domInject("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject("#quantidade")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject("#valor")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.throttle(500)
            ], NegociacaoController.prototype, "importaDados", null);
            __decorate([
                index_3.throttle(500)
            ], NegociacaoController.prototype, "adiciona", null);
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
