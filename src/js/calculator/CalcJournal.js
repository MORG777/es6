import CalcJournalItem from './CalcJournalItem';

class CalcJournal {

    constructor(divId) {
        /**
         * CalcJournalItem[]
         */
        this.journal = [];

        this.divId = divId;
    }

    push (formula, result) {
        this.journal.push( new CalcJournalItem(formula, result) );
        console.log('111')
    }
    

    display() {
        let result = '';
        for(let i = 0; i < this.journal.length; i ++) {
            let item = this.journal[i];
            let itemResult = `
            <div class="journalItem">
                <div class="journalItem--result">${item.result}</div>
                <div class="journalItem--formula">${item.formulaString}</div>
            </div>
            `;
            result += itemResult;
        }
        
        document.getElementById(this.divId).innerHTML = result;

    }
}
export default CalcJournal;