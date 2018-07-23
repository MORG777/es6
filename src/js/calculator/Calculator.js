import CalcJournal from './CalcJournal';
import {plus, minus, delimiter, multiply,sqrt, ln, factorial, pow, unaryMinus} from './math/math';
import { CalculatorDisplay } from './CalculatorDisplay';

class Calculator {

    
    /**
     * Constructor method
     * @param {string} divId ID of container to build calculator
     * @param {boolean} engineerMode Add additional functionality
     */
    constructor(divId, engineerMode) {
        //super();

        /**
         * @attribute {CalculatorDisplay} 
         */

        this.display = undefined;

        /**
         * @attribute Id of container to build application
         */
        this.divId = undefined;

        

        /**
         * @attribute {string} Id for Jounal DOM-element
         */
        this.journalContainerId = '';

        /**
         * @attribute {boolean} Switch between simple and engineer modes
         */
        this.engineerMode = false;

        /**
         * @attribute {DOM} Dom element to show result
         */
        this.resultDiv = undefined;

        /**
         * @attribute {DOM} DOM element to display formula
         */
        this.formulaDiv = undefined;

        /**
         * @attribute {DOM} DOM element to display operations history
         */
        this.historyDiv = undefined;

        /**
         * @attribute {string} Formula string 
         */
        this.formulaString = '';

        /**
         * @attribute {Array} History
         */
        this.actors = [];

        /**
         * @attribute {Number} result
         */
        this.result = null;

        /**
         * @attribute {String} Container for complex numbers 
         */
        this.numCell = '';

        /**
         * @attribute {object}
         */
        this.availableHandlers = {
            '+' : plus,      // calc summ
            '-' : minus,     // calc diff
            '*' : multiply,     // multiply action
            '/' : delimiter, // delimiter action
            '√' : sqrt,      // sqrt
            'ln': ln,        // ln
            'n!': factorial, // factorial 
            'x^2' : pow,     // pow    
            '+/-' : unaryMinus,   // unary minus
        };

        // actions, requires 2 parameters  
        this.twoActorsActions = {
            '+': '',    
            '-': '',
            '*': '',
            '/': '',
        };

        this.this = this;
        /**
         * generate ID for journal
         */
        this.journalContainerId = "journalContainer-" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

        this.journal = new CalcJournal(this.journalContainerId);

        this.divId = divId;

        this.engineerMode = engineerMode !== undefined ? engineerMode : false ;


    }


    /**
     * show results in field
     */
    displayResult() {

        this.formulaDiv.innerHTML = this.actors.join(' ');
        
        if(this.result != NaN && parseFloat(this.result)) {
            this.resultDiv.innerHTML = this.result;
        }
        //this.historyDiv.innerHTML = this.actors.join('<br/>');

    }

    /**
     * reset numCell
     */
    clearNumCell() {
        this.numCell = '';
    }

    /**
     * if more than one digit in number
     */
    updateNumCell(symbol) {

        symbol = typeof symbol === 'string' ? symbol : symbol.target.childNodes[0].data ;
        
        this.numCell += symbol;
        this.displayResult();
        this.formulaDiv.innerHTML = this.formulaDiv.innerHTML + this.numCell;
        
    }

    /**
     * 
     */
    pushNumCellToActors() {
        if(this.numCell && parseFloat(this.numCell)) {
            this.actors.push( parseFloat(this.numCell) );
            this.numCell = '';
        }
    }

    pushToJournal() {
        this.journal.push( this.formulaDiv.innerHTML, this.resultDiv.innerHTML );
        this.journal.display();
    }

    /**
     * initiate calculator
     */
    init() {

        this.buildCalculator(this.divId, this.engineerMode);

        let numbers_btns = document.querySelectorAll('#' + this.divId + ' .calculator-buttons-numbers-item');
        // attach numbers buttons
        for(let i = 0; i < numbers_btns.length; i++ ) {
            numbers_btns[i].addEventListener('click', this.updateNumCell.bind(this));
        }

        // attach math actions
        let math_actions = document.querySelectorAll('#' + this.divId + ' .calculator-buttons-actions--item');
        for(let i=0; i < math_actions.length; i++){
            math_actions[i].addEventListener('click', this.mathAction.bind(this));
        }
        
        // attach equals handler
        document.querySelector('#' + this.divId + ' .calculator-buttons-numbers-item-calculate').
            addEventListener('click', this.calculate.bind(this));

        // attach clear action
        document.querySelector('#' + this.divId + ' .calculator-buttons-clear').
            addEventListener('click', this.reset.bind(this));

        this.formulaDiv = document.querySelector('#' + this.divId + ' .calculator-formula');
        this.resultDiv = document.querySelector('#' + this.divId + ' .calculator-result');
    }
    /**
     * @returns boolean true if last history record was math action
     */
    checkLasthistoryIsAction() {
        if(!this.actors || !this.actors.length) {
            return false;
        } else {
            let lastAct = this.actors[ this.actors - 1 ];
            return this.availableHandlers.hasOwnProperty( lastAct );
        }
    }

    /**
     * 
     */
    mathAction( action ) {
        
        action = typeof action === 'string' ? action : action.target.childNodes[0].data;

        this.pushNumCellToActors();

        if(this.checkLasthistoryIsAction()) {
            // rewrite last action with new one
            this.actors[ this.actors.length - 1 ] = action;
        } else {
            this.actors.push(action);
        }
        this.calculate();
    }

   
    


    /**
     * 
     */
    calculate() {
        if (this.numCell && this.numCell != '') {
            this.pushNumCellToActors();
        }
        this.result = this.actors[0];
        
        // first actor is already in result
        for(let i = 1; i < this.actors.length; i++) {
            if(this.availableHandlers.hasOwnProperty(this.actors[i])) {
                // call math handler
                if(this.twoActorsActions.hasOwnProperty(this.actors[i])) {
                    // use 2 numbers and skip next stage
                    this.result = this.availableHandlers[ this.actors[i] ](this.result, this.actors[++i]);
                } else {
                    this.result = this.availableHandlers[ this.actors[i] ](this.result);
                }
                
            }
        }


        this.displayResult();
        this.pushToJournal();
    }

    reset() {
        this.actors = [];
        this.result = 0;
        this.numCell = '';
        this.displayResult();
        this.resultDiv.innerHTML = '';
        this.formulaDiv.innerHTML = '';
        
    }

    /**
     * some kind of Builder pattern
     */
    buildCalculator(containerId, engineerMode) {
        
        
        this.display = new CalculatorDisplay(this);
        
        
/*
        this.resultDiv = document.querySelectorAll('#' + this.divId + ' .result')[0];
        this.formulaDiv = document.querySelectorAll('#' + this.divId + ' .formula')[0];
        this.historyDiv = document.querySelectorAll('#' + this.divId + ' .history')[0];*/
        

    }

  
}

export default Calculator;
