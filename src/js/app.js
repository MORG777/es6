import Calculator from './calculator/Calculator';
import SimpleCalculator from './calculator/SimpleCalculator';
import TwoPositionsSwitcher from './switcher/TwoPositionsSwitcher';

import ThemeSwitcher from './ThemeSwitcher';

import '../styles/styles.scss';





let calcE = new Calculator('Engineer', true);
calcE.init();

let calcSimple = new SimpleCalculator('Simple', false);
calcSimple.init();


document.themeSwitcher = new ThemeSwitcher();



/**
 * create theme switcher interface
 * param1 - where to place switcher
 * param2 - possible values
 * param3 - firing event
 */

document.themeSwitcherInterface = new TwoPositionsSwitcher('#themeSwitcher', ['Lighter', 'Dark'], 'switchTheme');
// attach theme switcher event
document.addEventListener('switchTheme', function(e){
    document.themeSwitcher.switchTheme(e.detail.value);
})