function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
    return nums;
}
