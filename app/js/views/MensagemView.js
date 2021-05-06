System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView, typInfo, SampleLabel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                template(model, alertType) {
                    if (alertType == null) {
                        alertType = 0;
                    }
                    return `
            <p class="alert ${SampleLabel.get(alertType)}">${model}</p>
        `;
                }
            };
            exports_1("MensagemView", MensagemView);
            (function (typInfo) {
                typInfo[typInfo["alertInfo"] = 0] = "alertInfo";
                typInfo[typInfo["alertDanger"] = 1] = "alertDanger";
                typInfo[typInfo["alertSucces"] = 2] = "alertSucces";
            })(typInfo || (typInfo = {}));
            exports_1("typInfo", typInfo);
            exports_1("SampleLabel", SampleLabel = new Map([
                [typInfo.alertInfo, 'alert-info'],
                [typInfo.alertDanger, 'alert-danger'],
                [typInfo.alertSucces, 'alert-success'],
            ]));
        }
    };
});
