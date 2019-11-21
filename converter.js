function convertToBinary(num) {
    let result = '';

    while (num != 0) {
        let remainder = num % 2;
        result = remainder + result;
        num = (num - remainder) / 2;
    }
    return result;
}

function convertToHex(num) {
    let result = '';

    while (num != 0) {
        let remainder = num % 16;
        switch (remainder) {
            case 10:
                result = 'A' + result;
                break;
            case 11:
                result = 'B' + result;
                break;
            case 12:
                result = 'C' + result;
                break;
            case 13:
                result = 'D' + result;
                break;
            case 14:
                result = 'E' + result;
                break;
            case 15:
                result = 'F' + result;
                break;
            default:
                result = remainder + result;

        }
        num = (num - remainder) / 16;
    }
    return result;
}

module.exports = {
    convertToBinary,
    convertToHex
}