import Calculator from './Calculator';

class CalculatorDisplay {

    
    /**
     * 
     * @param {Calculator} calc 
     */
    constructor(calc) {
        //super();
        this.container = document.getElementById(calc.divId);


        this.calc = calc;

        this.build(calc.availableHandlers);
    }

    build(availableActions) {
        let actionsHtml = '';
        if(availableActions) {
            for(let act in availableActions) {
                actionsHtml += `<button class="calculator-buttons-actions--item">` + act + `</button>`;
            }
        }



        /** TODO: move numbers pad to a separate module */
        let html = `
            <div class="calculatorWrapper">
                <div class="calculator-main">
                    <div class="calculator-formula"></div>
                    <div class="calculator-result"></div>
                    <div class="calculator-buttons">
                        <div class="calculator-buttons-main">
                            <div class="calculator-buttons-row">
                                <button class="calculator-buttons-clear">C</button>
                            </div>
                            <div class="calculator-buttons-numbers">
                                <button class="calculator-buttons-numbers-item">7</button>
                                <button class="calculator-buttons-numbers-item">8</button>
                                <button class="calculator-buttons-numbers-item">9</button>
                                <button class="calculator-buttons-numbers-item">6</button>
                                <button class="calculator-buttons-numbers-item">5</button>
                                <button class="calculator-buttons-numbers-item">4</button>
                                <button class="calculator-buttons-numbers-item">1</button>
                                <button class="calculator-buttons-numbers-item">2</button>
                                <button class="calculator-buttons-numbers-item">3</button>
                                <button class="calculator-buttons-numbers-item-calculate">=</button>
                                <button class="calculator-buttons-numbers-item">0</button>
                                <button class="calculator-buttons-numbers-item">.</button>
                            </div>
                        </div>
                        
                            ` + actionsHtml + `
                        
                    </div>
                </div>
                <div class="calculator-additional">
                    <div class="journal-wrapper" id="` + this.calc.journalContainerId + `"></div>
                </div>
            </div>
        `;
        
        if(this.container) {
            this.container.innerHTML = html;
        }        
    }
}

export { CalculatorDisplay };