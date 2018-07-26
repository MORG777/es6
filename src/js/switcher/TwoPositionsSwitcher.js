class TwoPositionsSwitcher {

    /**
     * 
     * @param {String} container Container to input 
     * @param {Array} positionsNames Array of positions
     * @param {String} eventName Event to dispatch
     */
    constructor(container = '', positionsNames = [], eventName = '') {
        // settings
        this.settings = {
            'positionClass' : 'TwoPositionsSwitcher--position',
            'positionActiveClass' : 'TwoPositionsSwitcher--position--active',
            'switcherActivePositionClass' : [
                'TwoPositionsSwitcher--switcher--pos1',
                'TwoPositionsSwitcher--switcher--pos2',
            ],
            'switcherBaseClass' : 'TwoPositionsSwitcher--switcher'
        };


        this.container = document.querySelector(container);
        this.switcherElement = undefined;

        this.positions = positionsNames;
        this.elementId = "TwoPositionsSwitcher-" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

        this.value = this.positions[0];



        this.init(container);
        this.createEvent(eventName);


        // set active first position
        this.setActivePosition(this.positions[0]);

        return this;
    }

    /**
     * Build switcher html
     * @param {DOM} container 
     */
    init(container) {
        let positions = ``;
        for(let i = 0; i < this.positions.length; i++) {
            positions += 
            `<span class="` + this.settings.positionClass + `" data-value="` + this.positions[i] + `">
                ` + this.positions[i] + `
            </span>`;
        }
        let html = `
        <span class="TwoPositionsSwitcher" id="` + this.elementId + `">
            ` + positions + `
            <span class="` + this.settings.switcherBaseClass + `"></span>
        </span>
        `;
        this.container.innerHTML = html;

        this.switcherElement = document.querySelector('#' + this.elementId + ' .' + this.settings.switcherBaseClass);

        document.getElementById(this.elementId).addEventListener('click', this.switch.bind(this));
    }

    /**
     * switch active position
     * @param {Event} event
     */
    switch( event ) {
        // TODO: we can use event.target if we need more than 2 positions
        let positionElements = document.querySelectorAll('#' + this.elementId + ' .' + this.settings.positionClass );

        // remove active classes from posision elements
        positionElements.forEach((function(element) {
            element.classList.remove(this.settings.positionActiveClass);
            element.className = element.className.replace(this.settings.positionActiveClass, '');
        }).bind(this));

        let currently_selected_item = document.querySelector('#' + this.elementId + ' [data-value="' + this.value + '"]');

        for(let i = 0; i < this.positions.length; i++) {
            if(this.positions[i].toLowerCase() === this.value.toLowerCase()) {
                
            } else {

                this.setActivePosition(this.positions[i]);
                // do not continue
                break;
            }
        }      
    }

    /**
     * Set active position
     * @param {String} position 
     */
    setActivePosition(position = '') {

        let index = this.positions.indexOf(position)

        if(index !== -1) {
            
            this.value = position;
            document.querySelector('#' + this.elementId).dataset.value = position;
            document.querySelector('#' + this.elementId + ' [data-value="' + position + '"]').classList.add(this.settings.positionActiveClass);
            
            // remove switcher element active classes
            this.settings.switcherActivePositionClass.forEach( (function(activeClass) {
                this.switcherElement.classList.remove(activeClass);
            }).bind(this) );

            this.switcherElement.classList.add(this.settings.switcherActivePositionClass[index]);

            // fire event
            document.dispatchEvent(this.event);
        }
    }

    /**
     * Creates a custom event
     * @param {String} eventName 
     */
    createEvent(eventName) {
        this.event = new CustomEvent(eventName, { 'detail': this});
    }
}

export default TwoPositionsSwitcher;