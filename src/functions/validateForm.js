export const objHasNull = (target) => {
    //console.log(target)
    let cond_nickname = /^[aA-zZ 0-9 _&-]*$/

    if(cond_nickname.test(target.nickname) === false || target.nickname === '') return true
    if(target.avatar === null) return true
    /* for (var member in target) {
        if (target[member] === '' || target[member] === null) return true;
        if(cond_nickname.test(target[member]) === false) return true
    } */
    return false;
}