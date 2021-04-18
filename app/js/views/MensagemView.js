class MensagemView {
    constructor(select) {
        this._elemento = document.querySelector(select);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
