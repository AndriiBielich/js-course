const addToLocalStorage = (arrayName, objToAdd) => {
    const arr = JSON.parse(localStorage.getItem(arrayName));
    if (!arr) {
        throw new Error('Local storage is empty');
    }

    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}
