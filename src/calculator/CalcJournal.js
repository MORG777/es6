import CalcJournalItem from './CalcJournalItem';

function CalcJournal(divId) {
    /**
     * CalcJournalItem[]
     */
    this.journal = [];

    this.container = document.getElementById(divId);

    this.push = function(formula, result) {
        this.journal.push( new CalcJournalItem(formula, result) )
    }

    this.display = function() {
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
        this.container.innerHTML = result;

    }
}
export default CalcJournal;