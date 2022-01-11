export class Player {

    
    constructor(name, logo) {
        this.name = name;
        this.logo = logo;
        this.position =0;
        this.isBlocked = false;
    }
    
    getName() {
        return this.name;
    }
    getLogo() {
        return this.logo;
    }
    getPosition() {
        return this.position;
    }
    getStatus() {
        return this.isBlocked;
    }

    setName(name) {
        this.name = name;
    }
    setLogo(logo) {
        this.logo = logo;
    }
    setPosition(position) {
        this.position = position;
    }
    setStatus(status) {
        this.isBlocked = status;
    }   

    updatePosition(index) {
        this.position += index;
    }
}