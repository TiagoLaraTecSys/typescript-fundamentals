System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(__date, __quantidade, __valor) {
                    this.__date = __date;
                    this.__quantidade = __quantidade;
                    this.__valor = __valor;
                }
                get date() {
                    return this.__date;
                }
                get quantidade() {
                    return this.__quantidade;
                }
                get valor() {
                    return this.__valor;
                }
                get volume() {
                    return this.__quantidade * this.__valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
