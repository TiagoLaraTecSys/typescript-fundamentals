
 export abstract class View<T, k> {

        private _elemento: JQuery;
        private _escapar: boolean;
        constructor(seletor: string, escapar: boolean = false){
            this._elemento = $(seletor);
            this._escapar = escapar;
        }

        update(model: T,someEnum?: k) {
            const t1 = performance.now();
            let template = this.template(model)
            if(this._escapar)
                template = template.replace(/<script>[\s\S]*?<\/script>/g, ' ')

            this._elemento.html(this.template(model,someEnum));

            const t2 = performance.now();
            console.log(`O tempo de execução de update da view é de ${t2 - t1} ms`)
        }

        abstract template(model: T, someEnum?: k): string;
}
