/*import ECalculator from './calculator/engeener';


let calcE = new ECalculator('Engineer', true);
calcE.init();


let calcS = new ECalculator('Simple', false);
calcS.init();
*/
import Calculator from './calculator/Calculator';
import ThemeSwitcher from './ThemeSwitcher';
import sliderSwitcher from './slider';

let calcE = new Calculator('Engineer', true);
calcE.init();


document.Switcher = new ThemeSwitcher();