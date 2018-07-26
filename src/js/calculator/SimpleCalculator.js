import Calculator from './Calculator';
import {plus, minus, delimiter, multiply,sqrt, ln, factorial, pow, unaryMinus} from './math/math';

class SimpleCalculator extends Calculator {
    constructor(divId, engineerMode) {
        super(divId, engineerMode);

        this.availableHandlers = {
            '+' : plus,      // calc summ
            '-' : minus,     // calc diff
            '*' : multiply,     // multiply action
            '/' : delimiter, // delimiter action
        };
    }
}

export default SimpleCalculator;