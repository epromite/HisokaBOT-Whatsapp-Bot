const fs = require('fs-extra')

/**
 * Add background card.
 * @param {String} userId 
 * @param {Object} _dir 
 */
const addBg = (userId, _dir) => {
    const obj = { id: userId, link: 'https://i.ibb.co/THNCKSB/bc1.png' }
    _dir.push(obj)
    fs.writeFileSync('./lib/data/function/user/card/background.json', JSON.stringify(_dir))
}

/**
 * Get background.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getBg = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].link
    }
}

/**
 * Replace background.
 * @param {String} userId 
 * @param {String} link 
 * @param {Object} _dir 
 */
const replaceBg = (userId, link, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].link = link
        fs.writeFileSync('./lib/data/function/user/card/background.json', JSON.stringify(_dir))
    }
}

module.exports = {
    addBg,
    getBg,
    replaceBg
}