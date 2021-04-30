import { logarTempoDeExecução } from "../helpers/decorators/index";

 export abstract class View<T, k> {

        private _elemento: JQuery;
        private _escapar: boolean;
        constructor(seletor: string, escapar: boolean = false){
            this._elemento = $(seletor);
            this._escapar = escapar;
        }

       
        update(model: T,someEnum?: k) {
            
            let template = this.template(model)
            if(this._escapar)
                template = template.replace(/<script>[\s\S]*?<\/script>/g, ' ')

            this._elemento.html(this.template(model,someEnum));

            
            
        }

        abstract template(model: T, someEnum?: k): string;
}


