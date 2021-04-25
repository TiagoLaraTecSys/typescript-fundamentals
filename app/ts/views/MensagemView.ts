
import { View } from './View';
export class MensagemView extends View<string,typInfo> {
    
    template(model: string, alertType: number): string {
        if(alertType == null){
            alertType = 0;
        }
        return `
            <p class="alert ${SampleLabel.get(alertType)}">${model}</p>
        `;
    }

}

export enum typInfo {
    alertInfo ,
    alertDanger,
    alertSucces,
}

export const SampleLabel = new Map<number, string>([
    [typInfo.alertInfo, 'alert-info'],
    [typInfo.alertDanger, 'alert-danger'],
    [typInfo.alertSucces, 'alert-success'],
])