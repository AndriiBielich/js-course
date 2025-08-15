function deepCopy(value) {
    if (value === undefined) {
        return undefined;
    }

    if (value === null) {
        return null;
    }

    if (typeof value === 'number' && Number.isNaN(value)) {
        return NaN;
    }

    if (typeof value === 'function') {
       return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepCopy(item));
    }

    if (typeof value === 'object') {
        const copiedObj = {};
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                copiedObj[key] = deepCopy(value[key]);
            }
        }
        return copiedObj;
    }

    return value;
}
