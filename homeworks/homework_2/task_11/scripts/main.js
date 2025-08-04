let value = NaN;

if (Number.isNaN(value)) {
    value = 'default';
}

switch (value) {
    case 0:
    case '':
    case null:
    case false:
    case undefined:
        value = 'default';
        break;
    default:
        break
}
