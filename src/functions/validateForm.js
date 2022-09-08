export const objHasNull = (target) => {
    let cond_nickname = /^[aA-zZ 0-9 _&-]*$/

    if (cond_nickname.test(target.nickname) === false || target.nickname === '') return true
    if (target.avatar === null) return true

    return false;
}