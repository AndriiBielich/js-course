function swap(arr, index1, index2) {
    if (index1 < 0 || index2 < 0 || index1 > arr.length -1 || index2 > arr.length -1) {
        return;
    }

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
