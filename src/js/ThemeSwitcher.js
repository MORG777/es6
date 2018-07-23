class ThemeSwitcher {
    constructor() {
        this.availableThemes = ['Lighter', 'Dark'];
        this.defaultTheme = 'Lighter';

        document.body.className = this.defaultTheme;
    }

    switchTheme(theme) {
        if(this.availableThemes.indexOf(theme) != -1) {
            document.body.className = theme;
        }
    }
}

export default ThemeSwitcher;