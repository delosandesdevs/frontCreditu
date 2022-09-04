export const objHasNull = (target) => {
    for (var member in target) {
        if (target[member] === '' || target[member] === null)
            return true;
    }
    return false;
}