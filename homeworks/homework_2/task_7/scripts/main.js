const time = 17;

if (time >= 0 && time <= 15) {
    console.log("It's first quarter");
} else if (time >= 16 && time <= 30) {
    console.log("It's second quarter");
} else if (time >= 31 && time <= 45) {
    console.log("It's third quarter");
} else if (time >= 46 && time <= 59) {
    console.log("It's fourth quarter");
} else {
    console.log('Invalid data');
}
