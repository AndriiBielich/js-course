const ARR_SIZE = 100;
const RANDOM_SIZE = 20;

console.log('1.a. Fill array with even numbers');
const evenArr = [];
for (let i = 0; i < ARR_SIZE; i++) {
    if (i % 2 === 0) {
        evenArr.push(i);
    }
}

console.log('1.b. Fill array with odd numbers');
const oddArr = [];
for (let i = 0; i < ARR_SIZE; i++) {
    if (i % 2 !== 0) {
        oddArr.push(i);
    }
}

console.log('1.c. Fill array with random numbers');
const randomNumbers = [];
for (let i = 0; i < RANDOM_SIZE; i++) {
    randomNumbers.push(Math.random());
}
console.log(randomNumbers);

console.log('1.d. Fill array with random numbers and range between 8 and 732');
const MIN_VALUE = 8;
const MAX_VALUE = 732;
const randomArrayWithRange = [];
for (let i = 0; i < RANDOM_SIZE; i++) {
    const randomNumber = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    randomArrayWithRange.push(randomNumber);
}
console.log(randomArrayWithRange);

console.log('\n2. Show every third element');
for (let i = 0; i < randomArrayWithRange.length; i++) {
    if (i % 3 === 0) {
        console.log(randomArrayWithRange[i]);
    }
}

console.log('\n3. Show every third element if it is even');
for (let i = 0; i < randomArrayWithRange.length; i++) {
    if (i% 3 === 0 && randomArrayWithRange[i] % 2 === 0) {
        console.log(randomArrayWithRange[i]);
    }
}

console.log('\n4. Show every third element if it is even also add this item to the list');
const list = [];
for (let i = 0; i < randomArrayWithRange.length; i++) {
    if (i% 3 === 0 && randomArrayWithRange[i] % 2 === 0) {
        console.log(randomArrayWithRange[i]);
        list.push(randomArrayWithRange[i]);
    }
}

console.log('\5. Show every element if it right neighbor is even');
for (let i = 0; i < randomArrayWithRange.length - 1; i++) {
    if (randomArrayWithRange[i + 1] % 2 === 0) {
        console.log(randomArrayWithRange[i]);
    }
}

console.log('\n6. Calculate average price');
const prices = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const price of prices) {
    sum += price;
}

const averagePrice = sum / prices.length;
console.log(`Average price: ${averagePrice}`);

console.log('\n7. Multiply every element by 5 and add to the new array');
const nums = [];
for (let i = 0; i < RANDOM_SIZE; i++) {
    const randomNumber = Math.floor(Math.random() * (ARR_SIZE - RANDOM_SIZE - 1)) + ARR_SIZE;
    nums.push(randomNumber);
}

const multiplyBy5Nums = [];
for (const num of nums) {
    multiplyBy5Nums.push(num * 5);
}

console.log('\n8. Add only numbers to the new array');
const mixArray = [1, 'a', 'b', 22, true, {}, 17, 'c', 50, false, false, 43];
const onlyNumbers = [];

for (const item of mixArray) {
    if (typeof item === 'number') {
        onlyNumbers.push(item);
    }
}
