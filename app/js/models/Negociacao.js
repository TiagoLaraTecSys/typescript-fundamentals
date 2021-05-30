System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(date, quantidade, valor) {
                    this.date = date;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log(`Data: ${this.date},
                     quantidade: ${this.quantidade},
                     valor: ${this.valor},
                     volume: ${this.volume}`);
                }
                ehIgual(negociacao) {
                    return (this.date.getDate() == negociacao.date.getDate() &&
                        this.quantidade == negociacao.quantidade &&
                        this.valor == negociacao.valor);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
