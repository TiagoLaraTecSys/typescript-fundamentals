
    import { View } from './View';
    import { Negociacoes } from '../models/Negociacoes';


    export class NegociacoesView extends View<Negociacoes,null> {

        template(model: Negociacoes): string{

            return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.paraArray().map( negociacao => 
                        `
                            <tr>
                                <td>${negociacao.date.getDate()}/${negociacao.date.getMonth() + 1}/${negociacao.date.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                        ).join('')}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
                
            `;
        }
}   
