function fibonacci(n) {
    if (n < 0) {
        throw new RangeError('El número no puede ser negativo')
    }

    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

export { fibonacci }