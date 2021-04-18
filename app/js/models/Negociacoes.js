class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        // Gerando uma cópia da o array original da classe
        return [].concat(this._negociacoes);
    }
}
