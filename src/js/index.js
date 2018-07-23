
let calcE = new ECalculator('Engineer', true);
calcE.init();


let calcS = new ECalculator('Simple', false);
calcS.init();

/**
 * Switch document theme
 */
function switchTheme(theme) {
    document.body.className = theme;
}