import ECalculator from './calculator/engeener';
import switchTheme from './ThemeSwitcher';

let calcE = new ECalculator('Engineer', true);
calcE.init();


let calcS = new ECalculator('Simple', false);
calcS.init();
