const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
const ARR_SIZE = arr.length - 1;

let i = 0;

console.log('1. While loop')
while (i <= ARR_SIZE) {
    console.log(arr[i]);
    i++;
}

console.log('\n2. For loop');
for (let index = 0; index <= ARR_SIZE; index++) {
    console.log(arr[index]);
}

console.log('\n3. While loop even indexes')
i = 0;

while (i <= ARR_SIZE) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}

console.log('\n4. For loop odd indexes');
for (let index = 0; index <= ARR_SIZE; index++) {
    if (index % 2 !== 0) {
        console.log(arr[index]);
    }
}

console.log('\n5. While loop only even values');
i = 0;

while (i <= ARR_SIZE) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}

console.log('\n6. For loop only even values');
for (let index = 0; index <= ARR_SIZE; index++) {
    if(arr[index] % 2 === 0) {
        console.log(arr[index]);
    }
}

console.log('\n7. Replace every number what % 3 === 0 with okten');
const task_7_copy_arr = [];

for (let index = 0; index <= ARR_SIZE; index++) {
    task_7_copy_arr[index] = arr[index];
}

for (let index = 0; index < task_7_copy_arr.length; index++) {
    if(task_7_copy_arr[index] % 3 === 0) {
        task_7_copy_arr[index] = 'okten';
    }
}

console.log('\n8. Reverse array')
for (let index = ARR_SIZE; index >= 0; index--) {
    console.log(arr[index]);
}

console.log('9. While loop reverse')
i = ARR_SIZE;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

console.log('\n10. For loop reverse');
for (let index = ARR_SIZE; index >= 0; index--) {
    console.log(arr[index]);
}

console.log('\n11. While loop even indexes reverse')
i = ARR_SIZE;

while (i >= 0) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}

console.log('\n12. For loop odd indexes reverse');
for (let index = ARR_SIZE; index >= 0; index--) {
    if (index % 2 !== 0) {
        console.log(arr[index]);
    }
}

console.log('\n13. While loop only even values reverse');
i = ARR_SIZE;

while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}

console.log('\n14. For loop only even values reverse');
for (let index = ARR_SIZE; index >= 0; index--) {
    if(arr[index] % 2 === 0) {
        console.log(arr[index]);
    }
}

console.log('\n15. Replace every number what % 3 === 0 with okten reverse');
const task_15_copy_arr = [];

for (let index = 0; index < arr.length; index++) {
    task_15_copy_arr[index] = arr[index];
}

for (let index = task_15_copy_arr.length - 1; index >= 0; index--) {
    if(task_15_copy_arr[index] % 3 === 0) {
        task_15_copy_arr[index] = 'okten';
    }
}
