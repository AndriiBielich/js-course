class Car {
    constructor(model, manufacturer, yearProduction, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearProduction = yearProduction;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`
            model - ${this.model}\n
            manufacturer - ${this.manufacturer}\n
            yearProduction - ${this.yearProduction}\n
            maxSpeed - ${this.maxSpeed}\n
            engineVolume - ${this.engineVolume}
            ${this.driver ? `\ndriver - {name: ${this.driver.name}, age: ${this.driver.age}}` : ''}
        `);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed > this.maxSpeed ? newSpeed : this.maxSpeed;
    }

    changeYear(newYear) {
        this.yearProduction = newYear;
    }

    addDriver(driver) {
        this.driver = {
            name: driver.name,
            age: driver.age
        }
    }
}
