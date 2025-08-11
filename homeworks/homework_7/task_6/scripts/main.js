function Car(model, manufacturer, yearProduction, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearProduction = yearProduction;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function() {
        console.log(`
            model - ${this.model}\n
            manufacturer - ${this.manufacturer}\n
            yearProduction - ${this.yearProduction}\n
            maxSpeed - ${this.maxSpeed}\n
            engineVolume - ${this.engineVolume}
            ${this.driver ? `\ndriver - {name: ${this.driver.name}, age: ${this.driver.age}}` : ''}
        `);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed = newSpeed > this.maxSpeed ? newSpeed : this.maxSpeed;
    }

    this.changeYear = function(newYear) {
        this.yearProduction = newYear;
    }

    this.addDriver = function(driver) {
        this.driver = {
            name: driver.name,
            age: driver.age
        }
    }
}
