document.querySelector('.slider-switcher').addEventListener('click', function(){
    var availablePositions = ['pos1', 'pos2'];

    if(this.className.indexOf('pos1') === -1 && this.className.indexOf('pos2') === -1 ) {
        this.className = 'slider-switcher pos1';
    }

    if(this.className.indexOf('pos1') !== -1) {
        this.className = 'slider-switcher pos2';
    } else {
        this.className = 'slider-switcher pos1';
    }

    console.log(this.classList);
});