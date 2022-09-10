export const objHasNull = (player) => {

    let cond_nickname = /^[aA-zZ 0-9 _&-]*$/
    if (cond_nickname.test(player.nickname) === false || player.nickname.length === 0) return true
    if (player.avatar === '') return true

    return false;
}