function validarPin(pin) {
    if (pin === null) {
        return false;
    }

    if (pin === undefined) {
        return false;
    }

    if (pin === '') {
        return false;
    }

    if (pin.length !== 6) {
        return false;
    }

    if (!/^[0-9]+$/.test(pin)) {
        return false;
    }

    if (/^([0-9])\1+$/.test(pin)) {
        return false;
    }

    return true;
}

export { validarPin }