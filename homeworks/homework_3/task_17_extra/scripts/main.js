const mixArray = [1, 'a', true, 2, 'b', false, 3, 'c', true, false];

for (const item of mixArray) {
    if (typeof item === 'string') {
        console.log(item);
    }
}
