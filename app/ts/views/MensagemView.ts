class MensagemView {

    private _elemento: Element;

    constructor(select: string){

        this._elemento = document.querySelector(select);
    }

    update(model: string) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}