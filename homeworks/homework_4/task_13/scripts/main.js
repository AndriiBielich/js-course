function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyIndex = -1;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            currencyIndex = i;
            break;
        }
    }

    if (currencyIndex < 0) {
        return 'Exchange impossible!';
    } else if (currencyValues[currencyIndex].value <= 0) {
        return 'Currency value cannot be less than 0 or equal to 0.';
    }

    return sumUAH / currencyValues[currencyIndex].value;
}
